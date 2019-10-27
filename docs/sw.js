self.importScripts("idb.js");

self.addEventListener("sync", function(event) {
  if (event.tag === "sendReports") {
    event.waitUntil(
      getDB().then(function(db) {
        var transaction = db.transaction("outbox", "readwrite");
        var store = transaction.objectStore("outbox");
        store.getAll().then(function(reports) {
          return Promise.all(
            reports.map(function(report) {
              const fd = new FormData();
              for (var prop in report.body) {
                if (prop === "attachments") {
                  report.body[prop].forEach(file => {
                    fd.append("attachments[]", file.blobFile, file.name);
                  });
                } else {
                  fd.set(prop, report.body[prop]);
                }
              }
              return fetch(report.url, {
                method: "POST",
                mode: "no-cors",
                body: fd,
              })
                .then(function() {
                  var transaction = db.transaction("outbox", "readwrite");
                  var store = transaction.objectStore("outbox");
                  return store.delete(report.id);
                })
                .catch(console.error);
            }),
          );
        });
      }),
    );
  }
});

self.addEventListener("fetch", function(event) {
  const req = event.request.clone();

  if (
    req.method === "GET" &&
    req.url !==
      "https://us-east4-rhok11-stopgap.cloudfunctions.net/getAllRampRequests"
  ) {
    event.respondWith(
      caches.open("mysite-dynamic").then(function(cache) {
        return cache.match(event.request).then(function(response) {
          return (
            response ||
            fetch(event.request).then(function(response) {
              cache.put(event.request, response.clone());
              return response;
            })
          );
        });
      }),
    );
  }
});

function getDB() {
  return idb.openDB("reports", 1, {
    upgrade: function(upgradeDB) {
      upgradeDB.createObjectStore("outbox", {
        autoIncrement: true,
        keyPath: "id",
      });
    },
  });
}

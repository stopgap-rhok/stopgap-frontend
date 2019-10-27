self.importScripts("idb.js");

// self.addEventListener("fetch", function(event){
//     var req = event.request.clone();

//     if(req.method === "POST" && req.url === "https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest") {
//         event.waitUntil(
//             fetch(req).catch(function(err){
//                 return getDB().then(function(db){
//                     var transaction = db.transaction('outbox', 'readwrite');
//                     const reader = event.request.clone().body.getReader()
//                     const stream = new ReadableStream({
//                         start(controller) {
//                           function push() {
//                             reader.read().then(({ done, value }) => {
//                               if (done) {
//                                 controller.close();
//                                 return;
//                               }
//                               controller.enqueue(value);
//                               push();
//                             });
//                           };
//                           push();
//                         }
//                       });
//                     return  transaction.objectStore('outbox').put({
//                             body: stream,
//                             url: req.url
//                         });
//                     })
//             })
//         )
//     }
// })

self.addEventListener("sync", function(event) {
  console.log("here1");
  console.log(event.tag);
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

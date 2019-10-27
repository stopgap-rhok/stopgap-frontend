import { openDB } from "idb";

export class HTTPError extends Error {}

/**
 * Make an http request
 *
 * This function wraps around `window.fetch`, checking if the response is ok and
 * throwing if not. By default `fetch` only throws if there is a network error,
 * but we care more for if the request was successful.
 *
 * @param {string} url - The url to make a request to
 * @param {object} options - A fetch options object
 * @returns Promise - A promise resolving to the body of the response
 */
export async function fetch(url, options, body) {
  try {
    const response = await window.fetch(url, options);

    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    getDB().then(function(db) {
      var transaction = db.transaction("outbox", "readwrite");
      return transaction.objectStore("outbox").put({
        body,
        url:
          "https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest",
      });
    });
  }
}

/**
 * Make a GET request
 */
export function get(urlString, params = {}) {
  const url = new URL(urlString);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return fetch(url);
}

export function formdataAppendObject(fd, obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      formdataAppendObject(fd, value);
    } else {
      fd.set(key, value);
    }
  }
}

/**
 * Make a POST request
 *
 * @param {string} url - The URL to send the form data to
 * @param {FormData} body - The data to include in the request
 * @returns {Promise}
 */
export function post(url, body, rawBody) {
  return fetch(
    url,
    {
      method: "POST",
      mode: "no-cors",
      body,
    },
    rawBody,
  );
}

async function getDB() {
  return await openDB("reports", 1, {
    upgrade: function(upgradeDB) {
      upgradeDB.createObjectStore("outbox", {
        autoIncrement: true,
        keyPath: "id",
      });
    },
  });
}

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
export async function fetch(url, options) {
  const response = await window.fetch(url, options);

  if (response.ok) {
    return await response.json();
  }

  throw new HTTPError(`${response.status}: ${response.statusText}`);
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

/**
 * Make a POST request
 */
export function post(url, body) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

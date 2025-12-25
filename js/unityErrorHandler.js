/**
 * Unity WebGL error handler.
 *
 * Handles JavaScript errors reported by the Unity WebGL runtime.
 * Passed to Unity via `config.errorHandler`.
 *
 * Return value:
 * - true  — error is considered handled and Unity will not process it further
 * - false — Unity will apply its default error handling
 *
 * @param {string} err   Error message
 * @param {string} url   Source file URL
 * @param {number} line  Line number where the error occurred
 * @returns {boolean}   Return `true` if you handled this error and don't want
 *                      Unity to process it further, `false` otherwise.
 */

export function unityErrorHandler(err, url, line) {
  console.error(
    "Unity WebGL error:",
    err,
    "source:",
    url,
    "line:",
    line
  );
  return false;
}

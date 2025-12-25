/**
 * Unity WebGL banner renderer.
 *
 * Renders warning and error messages above the Unity canvas.
 * Used by Unity WebGL runtime via `window.UNITY_CONFIG.showBanner`.
 *
 * Behavior:
 * - type === "warning": yellow banner, auto-hides after 5 seconds
 * - type === "error": red banner, persistent
 *
 * Requirements:
 * - DOM element with id `unity-warning` must exist
 *
 * Notes (Unity original description):
 * Shows a temporary message banner/ribbon for a few seconds, or
 * a permanent error message on top of the canvas if type=='error'.
 * If type=='warning', a yellow highlight color is used.
 * Modify or remove this function to customize the visually presented
 * way that non-critical warnings and error messages are presented to the
 * user.
 *
 * @param {string} msg   Message text (HTML allowed)
 * @param {"warning"|"error"} type  Message severity
 */

export function unityShowBanner(msg, type) {
  var warningBanner = document.querySelector("#unity-warning");

  function updateBannerVisibility() {
    warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
  }

  var div = document.createElement('div');
  div.innerHTML = msg;
  warningBanner.appendChild(div);

  if (type == 'error') div.style = 'background: red; padding: 10px;';
  else {
    if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
    setTimeout(function() {
      warningBanner.removeChild(div);
      updateBannerVisibility();
    }, 5000);
  }

  updateBannerVisibility();
}

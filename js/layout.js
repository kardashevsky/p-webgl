export function applyUnityLayout() {
  var canvas = document.querySelector("#unity-canvas");

  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
    document.head.appendChild(meta);

    document.getElementsByTagName('head')[0].appendChild(meta);
    document.querySelector("#unity-container").className = "unity-mobile";
    canvas.classList.add("unity-mobile");

    window.UNITY_CONFIG.devicePixelRatio = 1;
  } else {
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    window.UNITY_CONFIG.devicePixelRatio = 4;
  }
}

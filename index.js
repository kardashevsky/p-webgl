import "./js/config.js";
import { applyUnityLayout } from "./js/layout.js";

if (!window.UNITY_CONFIG) {
  throw new Error("UNITY_CONFIG is not defined");
}

applyUnityLayout();

var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBar = document.querySelector("#unity-progress-bar-full");
var progressText = document.querySelector("#unity-progress-text");

loadingBar.classList.add("visible");

var script = document.createElement("script");
script.src = window.UNITY_CONFIG.loaderUrl;

script.onload = function () {
  createUnityInstance(canvas, window.UNITY_CONFIG, function (progress) {
    var p = Math.round(progress * 100);
    progressBar.style.width = p + "%";
    progressText.textContent = p + "%";
  })
    .then(function (unityInstance) {
      loadingBar.classList.remove("visible");

      document.querySelector("#unity-fullscreen-button").onclick = function () {
        unityInstance.SetFullscreen(1);
      };
    })
    .catch(function (message) {
      alert(message);
    });
};

document.body.appendChild(script);

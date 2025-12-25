import { unityShowBanner } from "./unityShowBanner.js";
import { unityErrorHandler } from "./unityErrorHandler.js";

window.UNITY_CONFIG = {
  arguments: [],
  dataUrl: "Build/penguinization_build.data.unityweb",
  loaderUrl: "Build/penguinization_build.loader.js",
  frameworkUrl: "Build/penguinization_build.framework.js.unityweb",
  codeUrl: "Build/penguinization_build.wasm.unityweb",
  // dataUrl: "Build/penguinization_build.data.unityweb",
  // loaderUrl: "Build/penguinization_build.loader.js",
  // frameworkUrl: "Build/penguinization_build.framework.js.unityweb",
  // codeUrl: "Build/penguinization_build.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Black Boat Games",
  productName: "PENGUINIZATION",
  productVersion: "0.1",
  showBanner: unityShowBanner,
  errorHandler: unityErrorHandler,
  autoSyncPersistentDataPath: true,
  // matchWebGLToCanvasSize: false,
  // devicePixelRatio: 1,
};

/**
 *
 *
 */
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// Import custom code
import App from "./app";

const rootElm = document.querySelector("#app-root");
const root = createRoot(rootElm);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * Service Worker
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) => {
        console.log("SW registered: ", reg);
      })
      .catch((err) => console.log("SW reg error: ", err));
  });
}

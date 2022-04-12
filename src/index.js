/**
 *
 *
 */
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
// Import custom code
import App from "./app";
import { Dialog } from "./components";

const rootElm = document.querySelector("#app-root");
const root = createRoot(rootElm);
root.render(
  <StrictMode>
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Dialog />
    </>
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
        // Add install screen/prompt
        let defPrompt;
        window.addEventListener("beforeinstallprompt", (e) => {
          e.preventDefault();
          defPrompt = e;
          let btn = document.querySelector("[role=dialog] .btn");

          btn.addEventListener("click", (e) => {
            defPrompt.prompt();
          });
        });
      })
      .catch((err) => console.log("SW reg error: ", err));
  });
}

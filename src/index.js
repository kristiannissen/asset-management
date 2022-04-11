/**
 *
 *
 */
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// Tailwind
import "./styles/shell.css";
// Custom Components
import Card from "./components/card";
// Demo web worker
const worker = new Worker(new URL("./worker.js", import.meta.url));

const App = () => {
  useEffect(() => {
    worker.postMessage({ name: "Pussy" });
  });
  return (
    <div>
      <Card />
    </div>
  );
};

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

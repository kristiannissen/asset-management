/**
 *
 *
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// Tailwind
import "./styles/shell.css";
// Custom Components
import Card from "./components/card";

const App = () => <div className="pr-4">
        <Card />
    </div>;

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
        navigator.serviceWorker.register("service-worker.js").then(reg => {
            console.log("SW registered: ", reg)
        }).catch(err => console.log("SW reg error: ", err))
    })
}

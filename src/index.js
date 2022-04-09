/**
 *
 *
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const App = () => <div>Hello Pussy</div>;

const rootElm = document.querySelector("#app-root");
const root = createRoot(rootElm);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

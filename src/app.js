/**
 *
 *
 */
import React from "react";
// Tailwind
import "./styles/tailwind.css";
// Components
import Shell from "./components/shell";
import Spinner from "./components/spinner";

const App = ({ children }) => {
  return (
    <>
      <Shell />
      <main className="main__content">{children}</main>
    </>
  );
};

export default App;

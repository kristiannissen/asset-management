/**
 *
 *
 */
import React from "react";
// Tailwind
import "./styles/tailwind.css";
// Components
import Header from "./components/header";
import Spinner from "./components/spinner";

const App = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main__content">{children}</main>
    </>
  );
};

export default App;

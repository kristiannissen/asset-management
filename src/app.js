/**
 *
 *
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Tailwind
import "./styles/tailwind.css";
// Components
import Header from "./components/header";
import Spinner from "./components/spinner";
// Routes
import { Home } from "./routes/";
const App = () => {
  return (
    <>
      <Header />
      <main className="main__content"></main>
    </>
  );
};

export default App;

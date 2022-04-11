/**
 *
 *
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Tailwind
import "./styles/tailwind.css";
// Routes
import { Layout, Home } from "./routes/";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

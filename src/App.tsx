import React from "react";
import { Routes, Route } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/HomePage";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );

}
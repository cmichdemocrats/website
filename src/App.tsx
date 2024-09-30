import React from "react";
import { Routes, Route } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );

}
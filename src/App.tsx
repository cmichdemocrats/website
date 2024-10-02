import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/volunteer" element={<Navigate to="/projects" replace/>} />
      </Routes>
      <Footer />
    </>
  );

}
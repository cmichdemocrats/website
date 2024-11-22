import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, Location } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import VotingInformationPage from "./pages/VotingInformationPage/VotingInformationPage";
import MembershipPage from "./pages/MembershipPage/MembershipPage";
import MemberPage from "./pages/MemberPage/MemberPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import ConstitutionPage from "./pages/ConstitutionPage/ConstitutionPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {

  const location = useLocation();
  const [oldLocation, setOldLocation] = useState<Location>(location);

  useEffect(() => {

    if (location.pathname !== oldLocation.pathname) {

      window.scrollTo(0, 0);

    }

    setOldLocation(location);

  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constitution" element={<ConstitutionPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/membership/:memberID" element={<MemberPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/vote" element={<VotingInformationPage />} />
        <Route path="/volunteer" element={<Navigate to="/projects" replace/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );

}
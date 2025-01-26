import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import DisasterForm from "./components/DisasterForm";
import ReportForm from "./components/ReportForm";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Disaster Form */}
        <Route path="/disasterform" element={<DisasterForm />} />

        {/* Report Form */}
        <Route path="/reportform" element={<ReportForm />} />
      </Routes>
    </Router>
  );
};

export default App;

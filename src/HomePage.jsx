import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f4f4f9", height: "100vh" }}>
      <h1>Welcome to HelpHive</h1>
      <p>Join us to report and manage disasters in your community.</p>
      <Link to="/login">
        <button
          style={{
            backgroundColor: "#0078d4",
            color: "white",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
        >
          Login to Get Started
        </button>
      </Link>
    </div>
  );
};

export default Homepage;

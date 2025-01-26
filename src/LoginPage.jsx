import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (mock authentication)
    if (!formData.username || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    if (formData.username === "admin" && formData.password === "password") {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f4f4f9", height: "100vh" }}>
      <h1>Login to HelpHive</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left", padding: "2rem", backgroundColor: "#fff", borderRadius: "8px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ display: "block", margin: "1rem 0", width: "100%" }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: "block", margin: "1rem 0", width: "100%" }}
          />
        </label>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#0078d4",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

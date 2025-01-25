import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      setAuth(true);
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "300px",
      margin: "0 auto",
      padding: "20px",
      background: "#f7e8b5",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: isHovered ? "#8797af" : "#56667a", // Hover effect
      color: "white",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    title: {
      marginBottom: "20px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c1320",
    },
  };

  return (
    <form onSubmit={handleLogin} style={styles.container}>
      <h2 style={styles.title}>Log In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={styles.input}
      />
      <button
        type="submit"
        style={styles.button}
        onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Remove hover state on mouse leave
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;

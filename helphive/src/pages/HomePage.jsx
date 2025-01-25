import React, { useState } from "react";

const HomePage = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating a login for now
    if (username && password) {
      alert("Login successful!");
      setAuth(true); // Update authentication state
    } else {
      alert("Please enter valid credentials!");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#e8d395", // Background color matching the design
    },
    logo: {
      width: "150px",
      marginBottom: "30px",
    },
    form: {
      backgroundColor: "#f7e8b5",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      maxWidth: "400px",
      width: "100%",
    },
    title: {
      marginBottom: "20px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c1320",
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
      backgroundColor: "#56667a",
      color: "white",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#8797af",
    },
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <img
        src="/logo.png" // Replace with the path to your Help Hive logo
        alt="Help Hive Logo"
        style={styles.logo}
      />

      {/* Login Form */}
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Log In/Sign Up</h2>
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;

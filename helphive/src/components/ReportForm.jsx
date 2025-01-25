import React, { useState } from "react";
import axios from "axios";

const ReportForm = () => {
  const [disasterType, setDisasterType] = useState(""); // Dropdown for disaster type
  const [resourcesNeeded, setResourcesNeeded] = useState(false); // Toggle for resources needed
  const [severity, setSeverity] = useState(""); // Dropdown for severity
  const [location, setLocation] = useState(""); // Location input
  const [timestamp] = useState(new Date().toLocaleString()); // Current timestamp

  const handleReport = async (e) => {
    e.preventDefault();
    try {
      const reportData = {
        disasterType,
        resourcesNeeded,
        severity,
        timestamp,
        location,
      };

      // Send the report data to the backend
      await axios.post("http://localhost:5000/report", reportData);

      alert("Disaster reported successfully!");
      // Reset the form
      setDisasterType("");
      setResourcesNeeded(false);
      setSeverity("");
      setLocation("");
    } catch (error) {
      alert("Failed to report the disaster. Please try again.");
    }
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "400px",
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
    title: {
      marginBottom: "20px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c1320",
    },
  };

  return (
    <form onSubmit={handleReport} style={styles.container}>
      <h2 style={styles.title}>Report a Disaster</h2>
      
      {/* Disaster Type Dropdown */}
      <select
        value={disasterType}
        onChange={(e) => setDisasterType(e.target.value)}
        required
        style={styles.input}
      >
        <option value="">Select Disaster Type</option>
        <option value="snow">Snow</option>
        <option value="fire">Fire</option>
        <option value="droughts">Droughts</option>
        <option value="accidents">Accidents</option>
        <option value="tornadoes">Tornadoes</option>
        <option value="icy">Icy Conditions</option>
        <option value="available resources">Available Resources</option>
      </select>
      
      {/* Resources Needed */}
      <label>
        <input
          type="checkbox"
          checked={resourcesNeeded}
          onChange={(e) => setResourcesNeeded(e.target.checked)}
          style={{ marginRight: "10px" }}
        />
        Resources Needed?
      </label>
      
      {/* Severity Dropdown */}
      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        required
        style={styles.input}
      >
        <option value="">Select Severity</option>
        <option value="low">Low</option>
        <option value="mid">Medium</option>
        <option value="high">High</option>
      </select>
      
      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        style={styles.input}
      />
      
      {/* Timestamp (Display Only) */}
      <p><strong>Timestamp:</strong> {timestamp}</p>
      
      {/* Submit Button */}
      <button type="submit" style={styles.button}>
        Submit Report
      </button>
    </form>
  );
};

export default ReportForm;

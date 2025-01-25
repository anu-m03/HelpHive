import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    header: {
      backgroundColor: "#e8d395",
      textAlign: "center",
      padding: "1rem",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c1320",
    },
    content: {
      display: "flex",
      flexGrow: 1,
    },
    mapSection: {
      flex: 3,
    },
    formSection: {
      flex: 1,
      padding: "20px",
      backgroundColor: "#f7e8b5",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      background: "#ffffff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
    title: {
      marginBottom: "20px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c1320",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        Welcome to the Help Hive Dashboard!
      </header>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Map Section */}
        <div style={styles.mapSection}>
          <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>

        {/* Report Form Section */}
        <div style={styles.formSection}>
          <form style={styles.form}>
            <h2 style={styles.title}>Report a Disaster</h2>

            {/* Disaster Type */}
            <select style={styles.input} required>
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
                style={{ marginRight: "10px" }}
              />
              Resources Needed?
            </label>

            {/* Severity */}
            <select style={styles.input} required>
              <option value="">Select Severity</option>
              <option value="low">Low</option>
              <option value="mid">Medium</option>
              <option value="high">High</option>
            </select>

            {/* Location */}
            <input
              type="text"
              placeholder="Enter Location"
              style={styles.input}
              required
            />

            {/* Timestamp */}
            <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>

            {/* Submit Button */}
            <button type="submit" style={styles.button}>
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

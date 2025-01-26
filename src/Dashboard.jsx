import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from 'axios';
import L from 'leaflet';

const disasterTypeMap = {
  '1': 'Snowstorm',
  '2': 'Fire',
  '3': 'Drought',
  '4': 'Accident',
  '5': 'Tornado',
  '6': 'Icy',
  '7': 'Available Resources'
};


const createCustomIcon = (iconType) => {
  const iconName = disasterTypeMap[iconType] || 'default';
  return L.icon({
    iconUrl: `/static/icons/${iconName}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
};

const Dashboard = () => {
  const [markers, setMarkers] = useState([]);

  // Fetch markers from the backend on component mount
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await axios.get('http://localhost:30001/api/markers');
        setMarkers(response.data);
      } catch (error) {
        console.error('Error fetching markers:', error);
      }
    };

    fetchMarkers();
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      type: event.target.disasterType.value,
      severity: event.target.severity.value,
      resourcesNeeded: event.target.resourcesNeeded.checked,
      location: event.target.location.value,
      timestamp: new Date(),
      latitude: 0, // You'll need to implement geocoding to get these values
      longitude: 0,
      iconUrl: 'path/to/icon.png' // Set this based on the disaster type
    };

    try {
      await axios.post('http://localhost:30001/api/markers', formData);
      
      // Refresh markers after submission
      const response = await axios.get('http://localhost:30001/api/markers');
      setMarkers(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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
            {markers.map((marker, index) => (
              <Marker 
                key={index} 
                position={[marker.latitude, marker.longitude]}
                icon={createCustomIcon(marker.iconUrl)}
              >
                <Popup>
                  <div>
                  <h3>{disasterTypeMap[marker.type] || 'Unknown'}</h3>
                    <p>Severity: {marker.severity}</p>
                    <p>Resources Needed: {marker.resourcesNeeded ? 'Yes' : 'No'}</p>
                    <p>Location: {marker.location}</p>
                    <p>Timestamp: {new Date(marker.timestamp).toLocaleString()}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>


        {/* Report Form Section */}
        <div style={styles.formSection}>
          <form style={styles.form}>
            <h2 style={styles.title}>Report a Disaster</h2>

            {/* Disaster Type */}
            <select style={styles.input} required>
              <option value="">Select Disaster Type</option>
              <option value='1'>Snowstorm</option>
              <option value='2'>Fire</option>
              <option value='3'>Drought</option>
              <option value='4'>Accident</option>
              <option value='5'>Tornado</option>
              <option value='6'>Icy</option>
              <option value='7'>Available Resources</option>
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

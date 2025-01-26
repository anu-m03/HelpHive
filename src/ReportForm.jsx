import React, { useState } from "react";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    disasterType: "",
    resourcesNeeded: "No",
    severity: "Low",
    timestamp: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submission (replace with real API call)
    console.log("Submitted Report:", formData);

    // Reset form after submission
    setFormData({
      disasterType: "",
      resourcesNeeded: "No",
      severity: "Low",
      timestamp: "",
      location: "",
    });
    alert("Disaster report submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Report a Disaster</h2>

      <label>
        Disaster Type:
        <select name="disasterType" value={formData.disasterType} onChange={handleChange}>
          <option value="">Select a type</option>
          <option value="Snow Storm">Snow Storm</option>
          <option value="Fire">Fire</option>
          <option value="Drought">Drought</option>
          <option value="Accident">Accident</option>
          <option value="Tornado">Tornado</option>
          <option value="Icy Roads">Icy Roads</option>
        </select>
      </label>

      <label>
        Resources Needed:
        <div>
          <label>
            <input
              type="radio"
              name="resourcesNeeded"
              value="Yes"
              checked={formData.resourcesNeeded === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="resourcesNeeded"
              value="No"
              checked={formData.resourcesNeeded === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </label>

      <label>
        Severity:
        <select name="severity" value={formData.severity} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Mid">Mid</option>
          <option value="High">High</option>
        </select>
      </label>

      <label>
        Time of Incident:
        <input type="datetime-local" name="timestamp" value={formData.timestamp} onChange={handleChange} />
      </label>

      <label>
        Location:
        <input type="text" name="location" placeholder="Enter location" value={formData.location} onChange={handleChange} />
      </label>

      <button type="submit" style={{ backgroundColor: "#0078d4", color: "#fff", padding: "0.5rem", border: "none", borderRadius: "4px" }}>
        Submit
      </button>
    </form>
  );
};

export default ReportForm;

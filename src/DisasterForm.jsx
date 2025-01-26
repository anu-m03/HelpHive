import React, { useState } from "react";

const DisasterForm = () => {
  const [formData, setFormData] = useState({
    disasterType: "",
    severity: "Low",
    resourcesNeeded: "No",
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
    console.log("Disaster Report Submitted:", formData);
    alert("Your disaster report has been submitted!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
      <h2>Report a Disaster</h2>
      <label>
        Disaster Type:
        <select name="disasterType" value={formData.disasterType} onChange={handleChange}>
          <option value="">Select a disaster</option>
          <option value="Snow Storm">Snow Storm</option>
          <option value="Fire">Fire</option>
          <option value="Drought">Drought</option>
          <option value="Accident">Accident</option>
          <option value="Tornado">Tornado</option>
        </select>
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
        Time of Incident:
        <input type="datetime-local" name="timestamp" value={formData.timestamp} onChange={handleChange} />
      </label>

      <label>
        Location:
        <input type="text" name="location" placeholder="Enter location" value={formData.location} onChange={handleChange} />
      </label>

      <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#0078d4", color: "#fff", border: "none", borderRadius: "4px" }}>
        Submit
      </button>
    </form>
  );
};

export default DisasterForm;

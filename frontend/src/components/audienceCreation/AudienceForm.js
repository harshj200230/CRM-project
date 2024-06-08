import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const AudienceForm = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState({
    field: '',
    condition: '',
    value: ''
  });

  const navigate = useNavigate(); // Get the navigate function

  const handleAddRule = () => {
    // Check if all fields of the newRule are filled
    if (newRule.field && newRule.condition && newRule.value) {
      // Add the newRule to the rules array
      setRules([...rules, newRule]);
      // Clear the newRule state for the next input
      setNewRule({ field: '', condition: '', value: '' });
    } else {
      alert('Please fill in all fields before adding a rule.');
    }
  };

  const handleSaveAudience = async () => {
    try {
      // Format rules data
      const formattedRules = rules.map(rule => `${rule.field} ${rule.condition} ${rule.value}`);
      
      // Send audience creation request to the backend
      const response = await axios.post('http://localhost:5000/api/audiences', { rules: formattedRules });
      console.log('Audience created:', response.data);
      
      navigate('/campaigns'); // Redirect to Campaign List page
    } catch (error) {
      console.error('Error creating audience:', error.response.data.error);
    }
  };

  return (
    <div>
      {/* Input fields for specifying rules */}
      <div>
        <label htmlFor="field">Field:</label>
        <input
          type="text"
          id="field"
          value={newRule.field}
          onChange={(e) => setNewRule({ ...newRule, field: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="condition">Condition:</label>
        <input
          type="text"
          id="condition"
          value={newRule.condition}
          onChange={(e) => setNewRule({ ...newRule, condition: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="value">Value:</label>
        <input
          type="text"
          id="value"
          value={newRule.value}
          onChange={(e) => setNewRule({ ...newRule, value: e.target.value })}
        />
      </div>
      
      {/* Button to add rule */}
      <button onClick={handleAddRule}>Add Rule</button>

      {/* Button to save audience */}
      <button onClick={handleSaveAudience}>Save Audience</button>
    </div>
  );
};

export default AudienceForm;

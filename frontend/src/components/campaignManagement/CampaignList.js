// CampaignList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaign data from backend API
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error.response ? error.response.data.error : error.message);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h1>Campaigns</h1>
      {campaigns.length === 0 ? (
        <p>No campaigns available.</p>
      ) : (
        <ul>
          {campaigns.map((campaign) => (
            <li key={campaign._id}>
              <h2>{campaign.message}</h2>
              <p>Audience ID: {campaign.audienceId}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampaignList;

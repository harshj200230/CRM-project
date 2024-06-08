// DeliveryStats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeliveryStats = ({ campaignId }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Fetch delivery stats for the specified campaign ID
    const fetchDeliveryStats = async () => {
      try {
        const response = await axios.get(`/api/campaigns/${campaignId}/stats`);
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching delivery stats:', error.response.data.error);
      }
    };

    fetchDeliveryStats();
  }, [campaignId]);

  return (
    <div>
      {/* Render delivery statistics */}
    </div>
  );
};

export default DeliveryStats;

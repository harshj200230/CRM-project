const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// POST /api/campaigns
// Send a campaign to the specified audience
router.post('/campaigns', async (req, res) => {
  try {
    const { audienceId, message } = req.body; // Ensure audienceId and message are present
    if (!audienceId || !message) {
      return res.status(400).json({ error: 'audienceId and message are required' });
    }

    // Save information about the sent campaign in the database
    const newCampaign = new Campaign({ audienceId, message });
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    console.error('Error sending campaign:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/campaigns
// Get all campaigns
router.get('/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('audienceId');
    res.status(200).json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

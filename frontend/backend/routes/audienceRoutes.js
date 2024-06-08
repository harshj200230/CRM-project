const express = require('express');
const router = express.Router();
const Audience = require('../models/Audience'); 
router.post('/audiences', async (req, res) => {
  try {
   
    const { rules } = req.body; // Assuming 
    const audienceSize = rules.length;
    
    const newAudience = new Audience({ rules, size: audienceSize });
    await newAudience.save();
    res.status(201).json(newAudience);
  } catch (error) {
    console.error('Error creating audience:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/audiences', async (req, res) => {
  try {
   
    const audiences = await Audience.find();
    res.status(200).json(audiences);
  } catch (error) {
    console.error('Error fetching audiences:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

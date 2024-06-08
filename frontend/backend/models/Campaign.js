// models/Campaign.js

const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  audienceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Audience' },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Campaign', campaignSchema);

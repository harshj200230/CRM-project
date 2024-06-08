// models/Audience.js

const mongoose = require('mongoose');

const audienceSchema = new mongoose.Schema({
  rules: [{ type: String }], // Example: ['totalSpends > 10000', 'visits <= 3', 'lastVisit < "2022-06-06"']
  size: { type: Number, required: true }
});

module.exports = mongoose.model('Audience', audienceSchema);

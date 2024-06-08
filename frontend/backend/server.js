const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const audienceRoutes = require('./routes/audienceRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const authRoutes = require('./routes/auth'); // Import authRoutes
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);
app.use('/api', audienceRoutes);
app.use('/api', campaignRoutes);
app.use('/api/auth', authRoutes); // Include authRoutes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

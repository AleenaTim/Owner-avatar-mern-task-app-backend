const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./connectDB');
const taskRoutes = require('./taskRoute');

const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

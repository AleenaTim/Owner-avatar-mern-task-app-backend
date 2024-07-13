require('dotenv').config(); // Load environment variables at the top
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./connectDB');
const taskRoutes = require('./taskRoute');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const connectDB = require('../config/db');

const app = express();

// Connect Database: MongoDB
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
require('./routes')

module.exports = app
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/donation-management', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Routes
app.post('/api/donations', (req, res) => {
    const { name, amount } = req.body;

    // Simulate saving to DB
    res.status(201).json({ message: 'Donation received successfully!', data: { name, amount } });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

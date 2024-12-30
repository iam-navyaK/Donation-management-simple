const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');  // Import the Donation model

// @route   POST /api/donations
// @desc    Create a new donation
router.post('/', async (req, res) => {
  const { name, amount } = req.body;

  try {
    const newDonation = new Donation({ name, amount });
    await newDonation.save();  // Save donation to the database
    res.status(201).json({ message: 'Donation saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

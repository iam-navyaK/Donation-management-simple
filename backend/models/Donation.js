const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  name: { type: String, required: true },   // Name of the donor
  amount: { type: Number, required: true },  // Donation amount
});

module.exports = mongoose.model('Donation', DonationSchema);

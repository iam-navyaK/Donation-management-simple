import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/donations', {
        name,
        amount,
      });
      alert(`Donation Successful: ${response.data.message}`);
      setName('');
      setAmount('');
    } catch (error) {
      alert('Error in donation submission');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;

// OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/orders', { customerId, amount });
      console.log(response.data);
      // Reset form fields after successful submission
      setCustomerId('');
      setAmount('');
    } catch (error) {
      console.error('Error adding order:', error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;

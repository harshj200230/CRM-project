// CustomerForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [totalSpends, setTotalSpends] = useState(0);
  const [visits, setVisits] = useState(0);
  const [lastVisit, setLastVisit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/customers', { 
        name, 
        email, 
        totalSpends, 
        visits, 
        lastVisit 
      });
      console.log(response.data);
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setTotalSpends(0);
      setVisits(0);
      setLastVisit('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Error adding customer:', error.response.data.error);
      } else {
        console.error('Error adding customer:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="number" placeholder="Total Spends" value={totalSpends} onChange={(e) => setTotalSpends(e.target.value)} required />
      <input type="number" placeholder="Visits" value={visits} onChange={(e) => setVisits(e.target.value)} required />
      <input type="date" placeholder="Last Visit" value={lastVisit} onChange={(e) => setLastVisit(e.target.value)} required />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;

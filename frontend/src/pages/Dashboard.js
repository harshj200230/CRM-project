// Dashboard.js
import React from 'react';
import CustomerForm from '../components/dataIngestion/CustomerForm';
import OrderForm from '../components/dataIngestion/OrderForm';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Add Customer</h2>
      <CustomerForm />
      <h2>Add Order</h2>
      <OrderForm />
    </div>
  );
};

export default Dashboard;

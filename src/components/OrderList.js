// src/components/OrderList.js
import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../apiService'; // Import the API service function

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getAllOrders();
        setOrders(ordersData);
      } catch (error) {
        setError('Error fetching orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>Order ID:</strong> {order.id} | 
            <strong>Status:</strong> {order.status} | 
            <strong>Date Placed:</strong> {new Date(order.datePlaced).toLocaleDateString()}
            {/* Add more order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;

// src/components/PaymentList.js
import React, { useState, useEffect } from 'react';
import { getAllPayments } from '../apiService'; // Import the API service function

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const paymentsData = await getAllPayments();
        setPayments(paymentsData);
      } catch (error) {
        setError('Error fetching payments');
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h1>Payment List</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            <strong>Payment ID:</strong> {payment.id} | 
            <strong>Amount:</strong> ${payment.amount} | 
            <strong>Method:</strong> {payment.paymentMethod} | 
            <strong>Status:</strong> {payment.paymentStatus}
            {/* Add more payment details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;

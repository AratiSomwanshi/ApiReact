// src/components/ReviewList.js
import React, { useState, useEffect } from 'react';
import { getAllReviews } from '../apiService'; // Import the API service function

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getAllReviews();
        setReviews(reviewsData);
      } catch (error) {
        setError('Error fetching reviews');
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Review List</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>Review ID:</strong> {review.id} | 
            <strong>Product ID:</strong> {review.product.id} | 
            <strong>User:</strong> {review.username} | 
            <strong>Rating:</strong> {review.rating} | 
            <strong>Comment:</strong> {review.comment}
            {/* Add more review details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;

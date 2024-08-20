// src/components/UpdateCategoryForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the category ID from the URL
import { updateCategory, getCategoryById } from '../apiService'; // Import the API service functions

const UpdateCategoryForm = () => {
  const { id } = useParams(); // Get the category ID from the URL parameters
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await getCategoryById(id);
        setName(category.name);
      } catch (error) {
        setError('Error fetching category details');
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCategory = { name };

    try {
      await updateCategory(id, updatedCategory);
      setSuccessMessage('Category updated successfully!');
    } catch (error) {
      setError('Error updating category');
    }
  };

  return (
    <div>
      <h1>Update Category</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default UpdateCategoryForm;

// src/components/UpdateProductForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the product ID from the URL
import { updateProduct, getProductById } from '../apiService'; // Import the API service functions

const UpdateProductForm = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(''); // Adjust if needed
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch the product details when the component mounts
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category); // Adjust if needed
      } catch (error) {
        setError('Error fetching product details');
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      description,
      price: parseFloat(price),
      category // Adjust if your API expects a different format
    };

    try {
      await updateProduct(id, updatedProduct);
      setSuccessMessage('Product updated successfully!');
    } catch (error) {
      setError('Error updating product');
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;

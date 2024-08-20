// src/components/AddCategoryForm.js
import React, { useState } from 'react';
import { addCategory } from '../apiService'; // Import the API service function
import { Card, Form, Button, Alert } from 'react-bootstrap'; // Import Bootstrap components

const AddCategoryForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCategory = { name };

    try {
      await addCategory(newCategory);
      setSuccessMessage('Category added successfully!');
      setName(''); // Clear the form field
    } catch (error) {
      setError('Error adding category');
    }
  };

  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>Add Category</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter category name"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Category
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddCategoryForm;

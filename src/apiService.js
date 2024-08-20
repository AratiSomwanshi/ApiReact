// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/admin'; // Update with your API base URL

// Function to get user by username
export const getUserByUsername = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by username", error);
    throw error;
  }
};

// Functions for Product
export const addProduct = async (product) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/products`, product);
      return response.data;
    } catch (error) {
      console.error("Error adding product", error);
      throw error;
    }
  };
export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error updating product", error);
    throw error;
  }
};

export const removeProduct = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
  } catch (error) {
    console.error("Error removing product", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

// Functions for Category
export const addCategory = async (category) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/categories`, category);
    return response.data;
  } catch (error) {
    console.error("Error adding category", error);
    throw error;
  }
};

export const updateCategory = async (id, category) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/categories/${id}`, category);
    return response.data;
  } catch (error) {
    console.error("Error updating category", error);
    throw error;
  }
};

export const removeCategory = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/categories/${id}`);
  } catch (error) {
    console.error("Error removing category", error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

// Functions for Orders, Payments, and Reviews
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders", error);
    throw error;
  }
};

export const getAllPayments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/payments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching payments", error);
    throw error;
  }
};

export const getAllReviews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews", error);
    throw error;
  }
};
export const getProductById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product", error);
      throw error;
    }
  };
  export const getCategoryById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching category by ID:', error);
      throw error;
    }
  };
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/auth';

export const registerUser = async (user) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/register`, user);
    return { isRegistered: true, error: null };
  } catch (error) {
    return { isRegistered: false, error: error.response?.data || 'Registration failed' };
  }
};

export const loginuser = async (username, password, role) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password, role });
    localStorage.setItem('jwtToken', response.data); // Assuming response.data is the token
    return { type: 'USER_LOGIN_SUCCESS', payload: response.data };
  } catch (error) {
    return { type: 'USER_LOGIN_FAILURE', payload: error.response?.data || 'Login failed' };
  }
};

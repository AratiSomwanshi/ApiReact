import axios from 'axios';

// Base URLs for API requests
const BASE_URL = 'http://localhost:8080/api/users';


export function getUserByname(username) {
    return axios.get(`${BASE_URL}/${username}`);
}

export function updateUser(userId, user) {
    return axios.put(`${BASE_URL}/${userId}`, user);
}

export function deleteUser(userId) {
    return axios.delete(`${BASE_URL}/${userId}`);
}

export function getCart(userId) {
    return axios.get(`${BASE_URL}/${userId}/cart`);
}

export function addToCart(userId, productId, quantity) {
    return axios.post(`${BASE_URL}/${userId}/cart`, null, {
        params: { productId, quantity }
    });
}

export function updateCartItem(userId, productId, quantity) {
    return axios.put(`${BASE_URL}/${userId}/cart/${productId}`, null, {
        params: { quantity }
    });
}

export function removeFromCart(userId, productId) {
    return axios.delete(`${BASE_URL}/${userId}/cart/${productId}`);
}

export function placeOrder(order) {
    return axios.post(`${BASE_URL}/orders`, order);
}

export function makePayment(payment) {
    return axios.post(`${BASE_URL}/payments`, payment);
}

export function submitReview(review) {
    return axios.post(`${BASE_URL}/reviews`, review);
}


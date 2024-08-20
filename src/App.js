// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Home from "./pages/Home";
// import {AboutUs} from "./pages/AboutUs";
// import {ContactUs} from "./pages/ContactUs";
// import Cricket from "./pages/Cricket";
// import Badminton from "./pages/Badminton";
// import Hockey from "./pages/Hockey";
// import Boxing from "./pages/Boxing";
// import Football from "./pages/Football";
// import ProductPage from "./pages/ProductPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import UserDashboard from "./components/UserDashboard";
// import AdminDashboard from "./components/AdminDashboard";
// import ProductForm from './components/ProductForm';
// import UpdateProductForm from './components/UpdateProductForm';
// import Logout from "./components/Logout";
// import OrderList from './components/OrderList';
// import PaymentList from './components/PaymentList';
// import ReviewList from './components/ReviewList';
// import AddCategoryForm from './components/AddCategoryForm';
// import UpdateCategoryForm from './components/UpdateCategoryForm';
// import CategoryList from './components/CategoryList';

// // Create an axios instance if needed
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080/',
// });

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem('jwtToken'));

//   // Set the default Authorization header for axios
//   axiosInstance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

//   // Function to update the token
//   const handleSetToken = (token) => {
//     setToken(token);
//     localStorage.setItem('jwtToken', token);
//     axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   };

//   return (
    
//     <Router>
     
        
//         <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/cricket" element={<Cricket />} />
//           <Route path="/badminton" element={<Badminton />} />
//           <Route path="/hockey" element={<Hockey />} />
//           <Route path="/boxing" element={<Boxing />} />
//           <Route path="/football" element={<Football />} />
//           <Route path="/product/:productId" element={<ProductPage />} />
//           <Route path="/login" element={<Login setToken={handleSetToken} />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/user-dashboard" element={<UserDashboard />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/add-product" element={<ProductForm />} />
//           <Route path="/update-product/:id" element={<UpdateProductForm />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/add-category" element={<AddCategoryForm />} />
//           <Route path="/update-category/:id" element={<UpdateCategoryForm />} />
//           <Route path="/categories" element={<CategoryList />} />
//        <Route path="/add-category" element={<AddCategoryForm />} />
//           <Route path="/update-category/:id" element={<UpdateCategoryForm />} />
//           <Route path="/categories" element={<CategoryList />} />
//           <Route path="/orders" element={<OrderList />} />
//           <Route path="/payments" element={<PaymentList />} />
//           <Route path="/reviews" element={<ReviewList />} />
//         </Routes>
      
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Import Pages
import Home from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

import Cricket from './pages/Cricket';
import Badminton from './pages/Badminton';
import Hockey from './pages/Hockey';
import Boxing from './pages/Boxing';
import Football from './pages/Football';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './components/Logout';

// Import Admin Components
import AdminDashboard from './components/AdminDashboard';
import OrderList from './components/OrderList';
import PaymentList from './components/PaymentList';
import ReviewList from './components/ReviewList';
import AddCategoryForm from './components/AddCategoryForm';
import UpdateCategoryForm from './components/UpdateCategoryForm';
import CategoryList from './components/CategoriesList';
import ProductForm from './components/ProductForm';
import UpdateProductForm from './components/UpdateProductForm';
import ProductList from './components/ProductList';
// Import User Components
import UserDashboard from './components/UserDashboard';
import AddProduct from './components/AddProduct';

// Create an axios instance if needed
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
});

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken'));

  // Set the default Authorization header for axios
  axiosInstance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

  // Function to update the token
  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem('jwtToken', token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/badminton" element={<Badminton />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/football" element={<Football />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/login" element={<Login setToken={handleSetToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/update-product/:id" element={<UpdateProductForm />} />
        <Route path="/add-category" element={<AddCategoryForm />} />
        <Route path="/update-category/:id" element={<UpdateCategoryForm />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/payments" element={<PaymentList />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />
       
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import '../styles/Cricket.css';
import { useNavigate, Link } from 'react-router-dom';

import cricketBat from '../images/Explore/Cricket/bat1.jpeg';
import cricketBall from '../images/Explore/Cricket/ball.jpg';
import cricketHelmet from '../images/Explore/Cricket/helmet1.jpg';
import cricketKit from '../images/Explore/Cricket/kit1.jpeg';
import cricketShoe from '../images/Explore/Cricket/shoe1.jpg';

export const products = [
    { id: 1, name: 'Cricket Bat', image: cricketBat, price: '$29.99' },
    { id: 2, name: 'Cricket Ball', image: cricketBall, price: '$9.99' },
    { id: 3, name: 'Cricket Helmet', image: cricketHelmet, price: '$49.99' },
    { id: 4, name: 'Cricket Kit', image: cricketKit, price: '$99.99' },
    { id: 5, name: 'Cricket Shoes', image: cricketShoe, price: '$79.99' },
];

const Cricket = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const navigate = useNavigate();

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleSortChange = (e) => setSortBy(e.target.value);

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'price') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
            return a.name.localeCompare(b.name);
        });

    const buyNow = (product) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate(`/product/${product.id}`); 
        } else {
            navigate('/ProductDetails'); 
        }
    };

    return (
        <div className="cricket">
            <header className="navbar">
                <div className="logo">Sports Accessories</div>
                <nav className="nav-container">
                    <ul className="nav-links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="nav-right">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </header>

            <section className="search-sort">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <select value={sortBy} onChange={handleSortChange} className="sort-select">
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                </select>
            </section>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                            <button className="buy-button" onClick={() => buyNow(product)}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cricket;

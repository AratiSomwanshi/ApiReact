import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Boxing.css'; 
import boxingGloves from '../images/Explore/Boxing/gloves.png';
import boxingHeadguard from '../images/Explore/Boxing/headguard.png';
import boxingKit from '../images/Explore/Boxing/boxkit.png';
import boxingKit1 from '../images/Explore/Boxing/boxkit1.png';

const products = [
    { id: 1, name: 'Boxing Gloves', image: boxingGloves, price: 39.99 },
    { id: 2, name: 'Boxing Headguard', image: boxingHeadguard, price: 29.99 },
    { id: 3, name: 'Boxing Kit', image: boxingKit, price: 89.99 },
    { id: 4, name: 'Boxing Kit (Alternative)', image: boxingKit1, price: 99.99 },
];

const Boxing = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleSortChange = (e) => setSortBy(e.target.value);

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            return a.name.localeCompare(b.name);
        });

    const buyNow = (product) => {
        alert(`Buying ${product.name}`);
    };

    return (
        <div className="boxing">
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
                            <p className="product-price">${product.price.toFixed(2)}</p>
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

export default Boxing;

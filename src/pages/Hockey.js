import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Hockey.css'; 
import hockeyBag from '../images/Explore/Hockey/bag2.jpg';
import hockeyBall from '../images/Explore/Hockey/ball1.png';
import hockeyShoe from '../images/Explore/Hockey/shoe3.png';
import hockeyStick from '../images/Explore/Hockey/stick.png';

const products = [
    { id: 1, name: 'Hockey Bag', image: hockeyBag, price: 39.99 },
    { id: 2, name: 'Hockey Ball', image: hockeyBall, price: 12.99 },
    { id: 3, name: 'Hockey Shoes', image: hockeyShoe, price: 89.99 },
    { id: 4, name: 'Hockey Stick', image: hockeyStick, price: 149.99 },
];

const Hockey = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [cart, setCart] = useState([]);

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
        <div className="hockey">
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

export default Hockey;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Badminton.css'; 
import badmintonBag from '../images/Explore/Badminton/bag1.jpg';
import badmintonCork from '../images/Explore/Badminton/cork.jpeg';
import badmintonKit from '../images/Explore/Badminton/kit2.jpeg';
import badmintonRacket from '../images/Explore/Badminton/racket.jpg';
import badmintonShoe from '../images/Explore/Badminton/shoe2.jpg';

const products = [
    { id: 1, name: 'Badminton Bag', image: badmintonBag, price: 29.99 },
    { id: 2, name: 'Badminton Cork', image: badmintonCork, price: 9.99 },
    { id: 3, name: 'Badminton Kit', image: badmintonKit, price: 49.99 },
    { id: 4, name: 'Badminton Racket', image: badmintonRacket, price: 99.99 },
    { id: 5, name: 'Badminton Shoes', image: badmintonShoe, price: 79.99 },
];

const Badminton = () => {
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
        <div className="badminton">
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

export default Badminton;

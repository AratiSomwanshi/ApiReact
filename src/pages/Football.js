import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Football.css'; 
import footballBag from '../images/Explore/FootBall/bag3.png';
import footballBall from '../images/Explore/FootBall/football1.png';
import footballGlove from '../images/Explore/FootBall/glove.png';
import footballNet from '../images/Explore/FootBall/net.png';
import footballShoe from '../images/Explore/FootBall/shoe4.png';

const products = [
    { id: 1, name: 'Football Bag', image: footballBag, price: '$39.99' },
    { id: 2, name: 'Football', image: footballBall, price: '$24.99' },
    { id: 3, name: 'Football Gloves', image: footballGlove, price: '$19.99' },
    { id: 4, name: 'Football Net', image: footballNet, price: '$59.99' },
    { id: 5, name: 'Football Shoes', image: footballShoe, price: '$79.99' },
];

const Football = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleSortChange = (e) => setSortBy(e.target.value);

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'price') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
            return a.name.localeCompare(b.name);
        });

    const buyNow = (product) => {
       
        alert(`Buying ${product.name}`);
    };

    return (
        <div className="football">
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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
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
                    ))
                ) : (
                    <div className="no-results">No products found.</div>
                )}
            </div>
        </div>
    );
};

export default Football;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 
import Footer from '../components/Footer'; 

import cricketBat from '../images/Featured/bat.jpg';
import tennisRacket from '../images/Featured/tenrack.jpg';
import runningShoes from '../images/Featured/shoe.jpeg';
import basketball from '../images/Featured/basketball.jpg';
import carrom from '../images/Featured/carrom.jpg';

import cricketCategory from '../images/Categories/cricket.jpg';
import badmintonCategory from '../images/Categories/badminton.jpeg';
import hockeyCategory from '../images/Categories/hockey.jpg';
import boxingCategory from '../images/Categories/boxing.jpeg';
import footballCategory from '../images/Categories/football.jpg';

const Home = () => {
    const products = [
        {
            id: 1,
            name: "Cricket Bat",
            price: "$29.99",
            image: cricketBat,
        },
        {
            id: 2,
            name: "Tennis Racket",
            price: "$89.99",
            image: tennisRacket,
        },
        {
            id: 3,
            name: "Running Shoes",
            price: "$119.99",
            image: runningShoes,
        },
        {
            id: 4,
            name: "Basketball",
            price: "$49.99",
            image: basketball,
        },
        {
            id: 5,
            name: "Carrom",
            price: "$45.99",
            image: carrom,
        },
    ];

    const categories = [
        { name: 'Cricket', image: cricketCategory, link: '/cricket' },
        { name: 'Badminton', image: badmintonCategory, link: '/badminton' },
        { name: 'Hockey', image: hockeyCategory, link: '/hockey' },
        { name: 'Boxing', image: boxingCategory, link: '/boxing' },
        { name: 'Football', image: footballCategory, link: '/football' },
    ];

    return (
        <div className="home">
            <header className="navbar">
                <div className="logo">Sports Accessories</div>
                <nav className="nav-container">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="nav-right">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </header>

            <section className="hero-section">
                <h1>Welcome to Sports Accessories</h1>
                <p>Your one-stop shop for all your sports gear needs</p>
            </section>

            <div className="featured-products" id="products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                            <button className="product-button">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <section className="explore-more">
                <h2>Explore More Accessories</h2>
                <div className="category-list">
                    {categories.map((category, index) => (
                        <Link to={category.link} className="category-card" key={index}>
                            <img src={category.image} alt={category.name} className="category-image" />
                            <div className="category-info">
                                <h3 className="category-name">{category.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;

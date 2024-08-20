import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/ProductService'; // Ensure this method exists
import { addToCart } from '../services/CartService'; // Ensure this method exists

export function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await getProductById(id);
                if (response.status === 200) {
                    setProduct(response.data.product);
                }
            } catch (error) {
                setErrorMessage("Product not found.");
            }
        }

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                // Assuming you have a way to get the user_id, e.g., from context or localStorage
                const user_id = localStorage.getItem('userId'); // Replace this with actual user ID retrieval
                if (user_id) {
                    await addToCart(user_id, product_id, quantity);
                    navigate('/cart'); // Navigate to cart page after adding
                } else {
                    setErrorMessage("User ID not found.");
                }
            } catch (error) {
                setErrorMessage("Error adding to cart.");
            }
        } else {
            navigate('/register');
        }
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Price: Rs. {product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

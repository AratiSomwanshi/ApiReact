import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Cricket'; // Import the products array from Cricket.js

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = products.find(p => p.id === parseInt(productId));
        setProduct(selectedProduct);
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Price: {product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductPage;

import { useEffect, useState } from "react";
import { getAllProducts, removeProduct } from "../services/ProductService";
import { Link } from "react-router-dom";

export function ProductsList() {
    const [productsList, setProductsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    async function fetchProducts() {
        try {
            const response = await getAllProducts();
            if (response.status === 200) {
                setProductsList(response.data.products);
            }
        } catch (error) {
            if (error.response.status === 404) {
                setProductsList([]);
                setErrorMessage(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>List of Products</h1>
            {productsList.length !== 0 ? (
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>Rs. {product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link to={`/product/${product.id}`}>View Details</Link>
                                    <input
                                        type="button"
                                        value="Delete"
                                        onClick={async () => {
                                            await removeProduct(product.id);
                                            fetchProducts();
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h5>{errorMessage}</h5>
            )}
        </>
    );
}

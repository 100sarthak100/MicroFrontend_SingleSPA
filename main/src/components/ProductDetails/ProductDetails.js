import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getProducts } from '../../actions/products';
import { addProductsToCart } from '../../actions/cart';
import { Alert } from 'react-bootstrap';

const ProductDetails = (props) => {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);
    let product = products.find(p => p.productId == props.match.params.id);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    // console.log(props.match.params.id);

    const addToCart = (productId) => {
        console.log(productId);
        dispatch(addProductsToCart(productId));
        setMsg(`Product with ID ${productId} added to cart`);
    }

    return (
        <>
            <div style={{ margin: "1em", padding: "1rem", paddingLeft: "0" }}>
                <Link to="/" >Back to products</Link>
            </div>
            { msg && <Alert variant="success">{msg}</Alert>}
            {
                !product ? (
                    <h2 style={{ margin: "1em", padding: "1rem" }}>Loading...</h2>
                ) : (
                        <div style={{ margin: "1em", padding: "1em", display: "flex", justifyContent: "space-around", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "11%" }}>
                            <div style={{ flex: "1 1 15rem", width: "25em", height: "15em" }}>
                                <img src={product.productImgFile} alt="product" style={{ width: "25em", height: "15em" }} />
                            </div>
                            <div style={{ flex: "3 2 30rem", padding: "2em", paddingTop: "0" }}>
                                <ul style={{ listStyleType: "none", padding: "0" }}>
                                    <li style={{ marginBottom: "1rem" }}>
                                        <h3>{product.productName}</h3>
                                    </li>
                                    <li style={{ marginBottom: "1rem" }}>
                                        <h4>Rating: <b>4.5 / 5</b></h4>
                                    </li>
                                    <li style={{ marginBottom: "1rem" }}>
                                        <h4>Price: <b>${product.productPrice}</b></h4>
                                    </li>
                                    <li style={{ marginBottom: "1rem" }}>
                                        <h3>Description:</h3>
                                        <div>
                                            {product.productDescription}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ flex: "1 1 20rem", padding: "2em", border: "0.1rem #808080 solid", borderRadius: "0.5rem", backgroundColor: "#f0f0f0" }}>
                                <ul style={{ listStyleType: "none", padding: "0" }}>
                                    <li style={{ marginBottom: "1rem" }}>
                                        Price: {product.productPrice}
                                    </li>
                                    <li style={{ marginBottom: "1rem" }}>
                                        Status: Available in stock
                                    </li>
                                    <li style={{ marginBottom: "1rem" }}>
                                        Qty: 1
                                    </li>
                                    <li style={{ marginBottom: "1rem" }}>
                                        <Button variant="warning" size="sm"
                                            onClick={() => addToCart(product.productId)}
                                        >
                                            Add to cart
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    )
            }
        </>
    )
}

export default ProductDetails

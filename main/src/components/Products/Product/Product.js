import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { addProductsToCart } from '../../../actions/cart';

const Product = ({ p }) => {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    const addToCart = (productId) => {
        dispatch(addProductsToCart(productId));
        setMsg('Product added to cart');
    }

    return (
        <>
            <Card style={{ width: '18rem', height: "20em", margin: "0em" }}>
                <div style={{ textAlign: "center", height: "160px" }}>
                    {msg && <svg style={{ zIndex: "10", position: "absolute", margin: "10", height: "40", width: "40", left: "230px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>}
                    <Card.Img variant="top" src={p.productImgFile} style={{ padding: "1em", maxHeight: "160px", height: "160px", maxWidth: "230px" }} />
                </div>
                <Card.Body style={{ height: "80px", paddingBottom: "0.5em" }}>
                    <Card.Title style={{ height: "48px" }}>{p.productName}</Card.Title>
                </Card.Body>

                <div style={{ padding: "1em", paddingBottom: "0px", paddingTop: "0.5em" }}>
                    Price : {p.productPrice}
                </div>

                <div style={{ padding: "1em", paddingTop: "0.5em" }}>
                    <Button variant="warning" size="sm"
                        onClick={() => addToCart(p.productId)}
                    >
                        Add to cart
                    </Button>
                    <Link to={`/products/${p.productId}`} style={{ marginLeft: "4em" }}>
                        view details
                    </Link>
                </div>
            </Card>
        </>
    )
}

export default Product

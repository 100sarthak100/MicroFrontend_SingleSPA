import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import productImg from '../../../../static/images/product_1.PNG';

const Product = ({ p }) => {
    return (
        <>
            <Card style={{ width: '18rem', height: "20em", margin: "0em" }}>
                <div style={{ textAlign: "center", height: "160px" }}>
                    <Card.Img variant="top" src={p.productImgFile} style={{ padding: "1em", maxHeight: "160px", height: "160px", maxWidth: "230px" }} />
                </div>
                <Card.Body style={{ height: "80px", paddingBottom: "0.5em" }}>
                    <Card.Title style={{ height: "48px" }}>{p.productName}</Card.Title>
                </Card.Body>

                <div style={{ padding: "1em", paddingBottom: "0px", paddingTop: "0.5em" }}>
                    Price : {p.productPrice}
                </div>

                <div style={{ padding: "1em", paddingTop: "0.5em" }}>
                    <Link to={`/products/${p.productId}`}>
                        view details
                    </Link>
                </div>
            </Card>
        </>
    )
}

export default Product

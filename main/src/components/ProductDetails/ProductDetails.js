import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { getProducts } from '../../actions/products';

const ProductDetails = (props) => {
    const dispatch = useDispatch();

    const url = window.location.pathname;
    var res = url.split("/")[2];
    res = parseInt(res);
    console.log(res);

    const products = useSelector((state) => state.products);
    let product = products.find(p => p.productId == res);

    useEffect(() => {
        console.log("inside useeffect");
        dispatch(getProducts());
    }, [dispatch]);
    console.log(product);
    return (
        <>
            {
                !product ? (
                    <h2>Loading...</h2>
                ) : (
                        <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}>
                            <Card style={{ width: '100%', height: "100%", alignItems: "center", display: "flex" }}>
                                <Card.Img variant="top" style={{ maxWidth: "20em", maxHeight: "55em" }} src={product.productImgFile} />
                                <Card.Body >
                                    <Card.Title style={{ fontSize: "50px" }}>{product.productName}</Card.Title>
                                    <Card.Text>
                                        <h3>Price : INR {product.productPrice}</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        <h4>Product Description</h4>
                                        {product.productDescription}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    )
            }
        </>
    )
}

export default ProductDetails

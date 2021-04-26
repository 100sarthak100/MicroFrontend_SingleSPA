import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import { getCartProducts, deleteProductsFromCart } from '../../actions/cart';

const Cart = (props) => {
    const [msg, setMsg] = useState('');
    const [c, setC] = useState([]);
    const dispatch = useDispatch();

    var cart = {};
    cart = useSelector(state => state.cart) ? useSelector(state => state.cart) : {};

    useEffect(() => {
        dispatch(getCartProducts());
    }, [dispatch, cart.length]);

    useEffect(() => {
        setC(cart);
    }, [dispatch, cart, cart.length])

    // console.log("cart", typeof (cart), cart.length);

    const removeFromCartHandler = (productId) => {
        dispatch(deleteProductsFromCart(productId));
        setMsg(`Product with ID ${productId} removed from cart`);
    }

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping")
    }

    return (
        <>
            { msg && <Alert variant="danger">{msg}</Alert>}
            <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem", alignItems: "flex-start" }}>
                <div style={{ flex: "3 1 30rem" }}>
                    <ul style={{ paddingLeft: "0", listStyleType: "none", padding: "1rem" }}>
                        <li style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <h3>Product Cart</h3>
                        </li>
                        <li style={{ marginBottom: "1rem" }}>
                            {
                                !c.length ? (
                                    <div style={{ borderBottom: "0.1rem #808080 solid" }}>
                                        <h2>Cart is empty</h2>
                                    </div>
                                ) : (
                                        c.map((object) =>
                                            <li style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem", borderBottom: "0.1rem #808080 solid" }}>
                                                <div key={object.productId} style={{ flex: "1 1" }}>
                                                    <img src={object.productImgFile} alt="product" style={{ width: "15rem", height: "10rem", margin: "1em" }} />
                                                </div>
                                                <div style={{ flex: "8 1", margin: "1em" }}>
                                                    <div style={{ marginBottom: "0.5em" }}>
                                                        <Link to={"/products/" + object.productId}>{object.productName}</Link>
                                                    </div>
                                                    <div style={{ marginBottom: "0.5em" }}>Qty: 1</div>
                                                    <Button type="button" variant="warning" onClick={() => removeFromCartHandler(object.productId)} size="sm">
                                                        Remove
                                                    </Button>
                                                </div>
                                                <div style={{ flex: "2 1", fontSize: "2.0rem", textAlign: "right" }}>
                                                    $ {object.productPrice}
                                                </div>
                                            </li>
                                        )
                                    )
                            }
                        </li>
                    </ul>
                </div>
                <div style={{ flex: "1 1 20rem", backgroundColor: "#f8f8f8", borderRadius: "0.5rem", padding: "1rem" }}>
                    {
                        !c.length ? (
                            <div>
                                <h2>Subtotal (0 items) : $ 0</h2>
                            </div>
                        ) : (
                                <h3>
                                    Subtotal ({c.reduce((acc, cur) => acc + 1, 0)} items)
                        : $ {c.reduce((acc, cur) => acc + cur.productPrice * 1, 0)}</h3>
                            )

                    }
                    <Button variant="warning" size="sm"
                        onClick={checkoutHandler}
                        disabled={c.length === 0}
                    >
                        Procced to checkout
                </Button>
                </div>
            </div >
        </>
    )
}

export default Cart

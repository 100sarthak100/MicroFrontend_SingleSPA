import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product/Product';
import { getProducts, getProductByName } from '../../actions/products';
import { Alert } from 'react-bootstrap';

const Products = () => {
    const [msg, setMsg] = useState('');
    const [productSearch, setProductSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setProductSearch(localStorage.getItem('productSearch'))
        console.log(productSearch);
        if ((productSearch == "" || productSearch === 'null')) {
            console.log("all")
            dispatch(getProducts());
        } else if ((productSearch !== 'null' || productSearch !== "")) {
            console.log("One", productSearch);
            dispatch(getProductByName(productSearch));
            // setProductSearch('');
        }
    })

    const products = useSelector(state => state.products);
    console.log(products);

    return (
        <>{msg && <Alert variant="danger">{msg}</Alert>}
            {
                !products ? (
                    <h2>Loading...</h2>
                ) : (
                        <div style={{ margin: "1em", padding: "1em", display: "grid", gridTemplateColumns: "auto auto auto auto auto", gridRowGap: "0.7em", gridColumnGap: "0.6em", justifyContent: "space-around" }}>
                            {
                                products.map((p) =>
                                    <Product p={p} key={p.productId} />
                                )
                            }
                        </div>
                    )
            }
        </>
    )
}

export default Products;

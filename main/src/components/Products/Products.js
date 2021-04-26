import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product/Product';
import { getProducts } from '../../actions/products';
import { Alert } from 'react-bootstrap';

const Products = () => {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const products = useSelector(state => state.products);

    return (
        <>{msg && <Alert variant="danger">{msg}</Alert>}
            {
                !products ? (
                    <h2>Loading...</h2>
                ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto", gridRowGap: "0.7em", gridColumnGap: "0.6em", justifyContent: "space-around" }}>
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

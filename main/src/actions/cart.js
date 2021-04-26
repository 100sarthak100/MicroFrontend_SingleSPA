import { FETCH_CART_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART } from '../constants/actionTypes';
import * as api from '../api';
import Cookie from "js-cookie";

// action creators
export const getCartProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCartProducts();
        console.log("fetch cart prod", data);
        const action = {
            type: FETCH_CART_PRODUCTS,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

export const addProductsToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await api.fetchProducts();
        let product = await data.filter(p => p.productId === productId);
        console.log(product[0]);
        const { d } = await api.addCartProduct(product[0]);
        // console.log(d);
        const action = {
            type: ADD_TO_CART,
            payload: product[0]
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const deleteProductsFromCart = (productId) => async (dispatch) => {
    try {
        await api.deleteCartProduct(productId);
        const action = {
            type: DELETE_FROM_CART,
            payload: productId
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};
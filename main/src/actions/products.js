import { FETCH_ALL, FETCH_BY_ID } from '../constants/actionTypes';
import * as api from '../api';

// action creators
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        const action = {
            type: FETCH_ALL,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

export const getProductByName = (productName) => async (dispatch) => {
    try {
        const { data } = await api.fetchProductByName(productName);
        const action = {
            type: FETCH_ALL,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

export const getProductById = (productId) => async (dispatch) => {
    try {
        console.log("before data", productId, data);
        const { data } = await api.fetchProductById(productId);
        // const { d } = await api.fetchProductByIdAlt();
        console.log("after data", data);
        const action = {
            type: FETCH_BY_ID,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

import axios from 'axios';

const PRODUCT_API = axios.create({ baseURL: 'http://localhost:8002/product' });
const CART_API = axios.create({ baseURL: 'http://localhost:8002/cart' });

export const fetchProducts = () => PRODUCT_API.get('/');
export const fetchProductById = (productId) => PRODUCT_API.get(`/${productId}`);
export const fetchProductByName = (productName) => PRODUCT_API.get(`/name/${productName}`);

export const fetchCartProducts = () => CART_API.get('/');
export const addCartProduct = (product) => CART_API.post(`/`, product);
export const deleteCartProduct = (productId) => CART_API.delete(`/${productId}`);

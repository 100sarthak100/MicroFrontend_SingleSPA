import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8002/product' });
const API1 = axios.create({ baseURL: 'http://localhost:9000/products' });

export const fetchProducts = () => API.get('/');
export const fetchProductById = (productId) => API.get(`/${productId}`);
// export const fetchProductByIdAlt = () => API1.get(`/`);

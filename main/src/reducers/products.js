import { FETCH_ALL, FETCH_BY_ID } from '../constants/actionTypes';

const reducer = (products = [], action) => { // state is products and is empty array initially
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_ID:
            return products.map((products) => (products.productId === action.payload.productId ? action.payload : products));
        default:
            return products;
    }
}

export default reducer;
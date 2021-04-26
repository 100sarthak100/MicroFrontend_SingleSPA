import { FETCH_CART_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART } from '../constants/actionTypes';

const reducer = (state = { cartItems: [] }, action) => { // state is products and is empty array initially
    switch (action.type) {
        case FETCH_CART_PRODUCTS:
            return action.payload;
        case ADD_TO_CART:
            state.cartItems.push(action.payload)
            console.log(state.cartItems);
            return state.cartItems;
        case DELETE_FROM_CART:
            console.log(state.cartItems);
            return { cartItems: state.cartItems.filter(x => x.productId !== action.payload) };
        default:
            return state;
    }
}

export default reducer;
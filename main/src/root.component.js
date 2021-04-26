import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Cookie from "js-cookie";

const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = { cart: { cartItems } };
const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

const Root = () => {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider >
  )
};

export default Root
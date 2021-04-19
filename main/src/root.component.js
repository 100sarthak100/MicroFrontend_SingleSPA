import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Root = () => {
  return (
    <Provider store={store} >
      <Router>
        {/* <Products /> */}
        {/* <ProductDetails /> */}
        {/* <Route exact path="/" component={Products} /> */}
        {/* <Route exact path="/:id" component={ProductDetails} /> */}
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </Provider >
  )
};

export default Root
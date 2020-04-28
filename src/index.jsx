import React from "react";
import ReactDOM from "react-dom";
import CartProvider from "./components/cart/context";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/products";
import ViewCartPage from "./pages/view-cart";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/cart" component={ViewCartPage} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Inventory from "./components/Inventory";
import OrderHistory from "./components/OrderHistory";
import Order from "./components/Order";
import Product from "./components/Product";
import Stock from "./components/Stock";
import Cart from "./components/Cart";

function RouteConfig() {
  const isCustomer = useSelector((state) => state.isCustomer);

  return (
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/products/:productId">
        <Product />
      </Route>
      <Route path="/orders/:orderId">
        <Order />
      </Route>
      <Route path="/orders">
        <OrderHistory />
      </Route>
      {isCustomer ? null : (
        <Route path="/addStock">
          <Stock />
        </Route>
      )}
      <Route path="/products">
        <Inventory />
      </Route>
      <Route path="*">
        <Inventory />
      </Route>
    </Switch>
  );
}

export default RouteConfig;

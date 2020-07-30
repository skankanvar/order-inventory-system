import React from "react";
import { Switch, Route } from "react-router-dom";
import Inventory from "./components/Inventory";
import OrderHistory from "./components/OrderHistory";
import Order from "./components/Order";
import Product from "./components/Product";
import Stock from "./components/Stock";

function RouteConfig() {
  return (
    <Switch>
      <Route path="/products/:productId">
        <Product />
      </Route>
      <Route path="/orders/:orderId">
        <Order />
      </Route>
      <Route path="/orders">
        <OrderHistory />
      </Route>
      <Route path="/addStock">
        <Stock />
      </Route>
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

import React, { useEffect } from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from "./RouteConfig";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post("/login", { userName: "rtakkal", password: "22Chintu" })
      .then((response) => {
        response.data.isCustomer = !!response.data.type;
        dispatch({ type: "SET_USER", user: { ...response.data } });
      });
  }, [dispatch]);
  return (
    <Router>
      <Layout>
        <RouteConfig />
      </Layout>
    </Router>
  );
}

export default App;

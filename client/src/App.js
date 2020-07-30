import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from "./RouteConfig";

function App() {
  return (
    <Router>
      <Layout>
        <RouteConfig />
      </Layout>
    </Router>
  );
}

export default App;

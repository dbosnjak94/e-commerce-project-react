import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  About,
  PrivateRoute,
} from "./pages/index";

function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;

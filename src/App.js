import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Electronics from "./Component/Electronics/Electronics";
import Jewelery from "./Component/Jewelery/Jewelery";
import Men from "./Component/Men/Men";
import Women from "./Component/Women/Women";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/women">
            <Header />
            <Women />
          </Route>
          <Route path="/men">
            <Header />
            <Men />
          </Route>
          <Route path="/jewelery">
            <Header />
            <Jewelery />
          </Route>
          <Route path="/electronics">
            <Header />
            <Electronics />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

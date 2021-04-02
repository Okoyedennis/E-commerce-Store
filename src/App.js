import React, { useEffect } from "react";
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
import { useStateValue } from "./Component/StateProvider";
import { auth } from "./Component/Firebase";
import Footer from "./Component/Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
            <Footer />
          </Route>
          <Route path="/women">
            <Header />
            <Women />
            <Footer />
          </Route>
          <Route path="/men">
            <Header />
            <Men />
            <Footer />
          </Route>
          <Route path="/jewelery">
            <Header />
            <Jewelery />
            <Footer />
          </Route>
          <Route path="/electronics">
            <Header />
            <Electronics />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

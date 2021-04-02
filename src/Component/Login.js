import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/" className="link">
        <h2 className="login__logo">
          De<span>nn</span>is
        </h2>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="login__signInButton" onClick={singIn}>
            Sign In
          </button>
          <p>
            By signing-in you are agree to our Condition of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

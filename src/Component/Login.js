import React, { useState } from "react";
import "../Style/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
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
          <input type="email" value={email} />
          <h5>Password</h5>
          <input type="password" value={password} />
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

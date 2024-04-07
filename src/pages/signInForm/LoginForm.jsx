import React from "react";
import "../../pages/signInForm/LogInForm.modules.css";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className="main">
        <div className="leftSide">
          <div className="nav">
            <Link to="/">Home</Link>
          </div>
          <div className="img">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={StyleSheet.rightSide}>
          <div className="text">
            <h1>Hello!</h1>
            <h1>Welcome Back!!</h1>
            <p>Log In with your email address and password.</p>
          </div>
          <div className="form">
            <form action="">
              <label htmlFor="Email">Email Address</label>
              <br />
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Johndoe@gmail.com"
              />
              <br />
              <br />
              <label htmlFor="Password">Password</label>
              <br />
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="password"
              />
              <br />
              <br />
              <button type="submit">LogIn</button>
              <br />
            </form>

            <p>
              Don't have an account yet? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

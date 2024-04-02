import React from "react";
import "./signUpForm.css";
import logo from "../../assets/LOGO.png";
import google from "../../assets/Google.png";

const SignUpForm = () => {
  return (
    <div className="main">
      <div className="leftSide">
        <div className="nav">
          <a href="#">Home</a>
        </div>
        <div className="img">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="rightSide">
        <div className="text">
          <h1>Hello!</h1>
          <h1>Welcome to Mim's Home</h1>
          <p>
            You need to create an account to use our features. Kindly fill in
            your details below.
          </p>
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
            <button type="submit">SignUp</button>
          </form>
          <p>OR</p>
          <button id="google">
            Sign Up with Google <img src={google} alt="" />
          </button>

          <p>
            Already have an account? <a href="#">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

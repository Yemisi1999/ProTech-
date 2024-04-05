import React from "react";
import "./signUpForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import logo from "../../assets/LOGO.png";
import google from "../../assets/Google.png";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { userInfo, setUserInfo } = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div className="main">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <div className="leftSide">
        <div className="nav">
          <Link to="/">Home</Link>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              id="Email"
              placeholder="username"
              ref={register({ required: "username is required" })}
            />
            <br />
            <br />
            <label htmlFor="Email">Email Address</label>
            <br />
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Johndoe@gmail.com"
              ref={register({ required: "email is required" })}
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
              ref={...register(""{ required: true })}
            />
            <br />
            <br />
            <button type="submit">Sign Up</button>
          </form>
          <p>OR</p>
          <button id="google">
            Sign Up with Google <img src={google} alt="" />
          </button>

          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

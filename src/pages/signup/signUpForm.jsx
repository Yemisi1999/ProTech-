import React from "react";
import "./signUpForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import logo from "../../assets/LOGO.png";
import google from "../../assets/Google.png";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data, e) => {
    setUserInfo(data);
    e.target.reset();
    alert("Account created successfully, proceed to Login");
    console.log(data);
  };

  return (
    <div className="main">
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
              id="username"
              placeholder="username"
              {...register("username", {
                required: "Username is a required field",
              })}
            />
            <p id="error">{errors.username?.message}</p>
            <br />
            <label htmlFor="Email">Email Address</label>
            <br />
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Johndoe@gmail.com"
              {...register("email", {
                required: "Email address is a required field",
              })}
            />
            <p id="error">{errors.email?.message}</p>

            <br />
            <label htmlFor="Password">Password</label>
            <br />
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder="password"
              {...register("password", {
                required: "Password is a required field",
              })}
            />
            <p id="error">{errors.password?.message}</p>
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

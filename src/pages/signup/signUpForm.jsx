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
    <div className="w-full lg:flex">
      <div className="leftSide hidden lg:flex lg:w-[50%]  ">
        <div className="flex flex-col w-full p-[25px]">
          <Link to="/">
            <p className="underline font-semibold text-center w-full">Home</p>
          </Link>
          <div className="w-full flex flex-col items-center justify-center p-[25px] h-screen">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[385px] h-[197px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="rightSide p-4 flex flex-col justify-center lg:w-[50%] h-screen md:w-[400px] md:mx-auto lg:mx-0 lg:px-4">
        <div className="">
          <h1
            className="text-[20px] lg:text-[48px] font-bold leading-[50px]"
            style={{ fontFamily: "Noto Serif" }}
          >
            {" "}
            Hello! <br />
            Welcome to Mim’s Home
          </h1>

          <p className="mt-4 lg:text-[20px]">
            You need to create an account to use our features. Kindly fill in
            your details below.
          </p>
        </div>
        <div className="form">
          <form action="" className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-[14px] lg:text-[16px]">
                Username
              </label>

              <input
                type="text"
                name="username"
                id="username"
                placeholder="Johndoe"
                className="lg:w-[390px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Email" className="text-[14px] lg:text-[16px]">
                Email Address
              </label>

              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Johndoe@gmail.com"
                className="lg:w-[390px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Password" className="text-[14px] lg:text-[16px]">
                Password
              </label>

              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="**********"
                className="lg:w-[390px]"
              />
            </div>
            <button type="submit" className="mt-4 lg:w-[150px]">
              Sign Up
            </button>
          </form>

          <p className="text-[14px] lg:text-[16px] text-center lg:text-left mt-4">
            Already have an account yet?{" "}
            <Link to="/login" className="text-[#cc0069] font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

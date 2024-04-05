import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "../pages/signup/signUpForm";
import Home from "../pages/home/Home";
import HealthAndWellness from "../pages/healthandwellness/HealthAndWellness";
import MarketPlace from "../pages/marketplace/MarketPlace";
import Community from "../pages/community/Community";
import LoginForm from "../pages/signInForm/LoginForm";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Health and Wellness Page */}
      <Route path="/health-and-wellness" element={<HealthAndWellness />} />

      {/* Market Place Page */}
      <Route path="/market-place" element={<MarketPlace />} />

      {/* Community Page */}
      <Route path="/community" element={<Community />} />

      {/* Auth Screens */}
      <Route path="/sign-up" element={<SignUpForm />} />

      {/* Login*/}
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default AppRoutes;

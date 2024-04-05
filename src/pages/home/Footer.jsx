import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer  flex flex-col  px-[10px] md:px-[130px] py-[30px] lg:py-[60px]">
      <div className="flex flex-col gap-[40px] lg:gap-0 lg:flex-row lg:items-center">
        <div className="lg:w-[50%] flex flex-col gap-[32px]">
          <ul className="grid grid-cols-2 gap-[20px]  lg:w-[200px]">
            <li className="text-center lg:text-left">Home</li>
            <li className="text-center lg:text-left">Contact Us</li>
            <li className="text-center lg:text-left">About Us</li>
            <li className="text-center lg:text-left">Community</li>
          </ul>
          <div className="flex flex-col lg:flex-row gap-[24px] items-center">
            <p>Follow us on socials</p>
            <div className="flex gap-[16px]">
              <IoLogoFacebook size={20} className="cursor-pointer" />
              <FaYoutube size={20} className="cursor-pointer" />
              <FaInstagram size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col lg:flex-row gap-[20px]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="py-[8px] px-[8px] w-full rounded-[4px] "
          />
          <button className="bg-pink text-white py-[8px] px-[16px] rounded-[4px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

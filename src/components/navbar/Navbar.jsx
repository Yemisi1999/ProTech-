import React from "react";
import Logo from "../../assets/LOGO.png";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/data";

const Navbar = ({ open, ToggleMenu }) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="px-[10px] lg:px-[80px] flex justify-between items-center h-[75px] shadow-md">
        <div className="flex gap-[8px] lg:gap-[20px] items-center">
          <div className="lg:hidden">
            {open ? (
              <MdClose
                onClick={ToggleMenu}
                size={20}
                className="cursor-pointer"
              />
            ) : (
              <FiMenu
                onClick={ToggleMenu}
                size={20}
                className="cursor-pointer"
              />
            )}
          </div>

          <IoSearchOutline
            size={20}
            className="cursor-pointer flex lg:hidden"
          />
          <IoSearchOutline
            size={25}
            className="cursor-pointer hidden lg:flex"
          />
        </div>
        <div className="w-[50px] lg:w-[68px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <Link to="/sign-up">
            <button className="font-[400] text-[16px] lg:text-[18px]">
              Sign-up/Log-in
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open
            ? "max-h-[200px] opacity-100 transition-all duration-500 ease-in-out "
            : "max-h-0 opacity-0 transition-all duration-500 ease-in-out"
        } overflow-hidden flex flex-col lg:hidden bg-white gap-4 absolute top-[75px] z-[999] w-full p-6 left-0 shadow-md`}
      >
        <ul className="flex flex-col gap-[10px] font-[500]">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={pathname === item.path ? "text-primary" : ""}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

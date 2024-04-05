import React from "react";
import { useLocation } from "react-router-dom";
import { navItems } from "../data/data";

const NavItems = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-full hidden lg:flex justify-center h-[72px] border border-primary items-center">
        <ul className="flex gap-[40px] font-[500]">
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

export default NavItems;

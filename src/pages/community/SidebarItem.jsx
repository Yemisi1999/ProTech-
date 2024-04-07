import React from "react";

const SidebarItem = ({ text, onClick, icon, isActive }) => {
  return (
    <li
      className={`flex items-center mb-2 cursor-pointer  ${
        isActive
          ? "bg-white text-primary lg:p-2 rounded-[4px]"
          : "lg:p-2 hover:text-primary hover:bg-white rounded-[4px] duration-500"
      }  mr-8 lg:mr-0 `}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </li>
  );
};

export default SidebarItem;

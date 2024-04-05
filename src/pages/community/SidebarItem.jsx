import React from "react";

const SidebarItem = ({ text, onClick, icon, isActive }) => {
  return (
    <li
      className={`flex items-center mb-2 cursor-pointer  ${
        isActive
          ? "bg-white p-2 rounded-[4px]"
          : "p-2 hover:bg-white rounded-[4px] duration-500"
      }`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </li>
  );
};

export default SidebarItem;

import React, { useState } from "react";
import ProfileComponent from "./ProfileComponent";
import NotificationsComponent from "./NotificationsComponent";
import PasswordComponent from "./PasswordComponent";
import SidebarItem from "./SidebarItem";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbUser } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoUnlock } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import Topbar from "../../components/navbar/Topbar";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(<ProfileComponent />);

  const handleItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <Topbar />
      <div className="flex mt-[75px] lg:mt-[145px]">
        {/* Mobile Screen */}
        <div className="flex flex-col items-center lg:hidden my-[40px] w-full px-2 ">
          <Link to="/community" className="cursor-pointer">
            <button className="underline cursor-pointer">GO BACK</button>
          </Link>
          <ul className="flex flex-wrap lg:gap-[16px] mt-[10px]">
            <SidebarItem
              icon={<TbUser size={20} />}
              text="Profile"
              isActive={activeComponent.type === ProfileComponent}
              onClick={() => handleItemClick(<ProfileComponent />)}
            />
            <SidebarItem
              icon={<IoMdNotificationsOutline size={20} />}
              text="Notifications"
              isActive={activeComponent.type === NotificationsComponent}
              onClick={() => handleItemClick(<NotificationsComponent />)}
            />
            <SidebarItem
              icon={<GoUnlock size={18} />}
              text="Password"
              isActive={activeComponent.type === PasswordComponent}
              onClick={() => handleItemClick(<PasswordComponent />)}
            />
            <SidebarItem icon={<MdLogout size={18} />} text="Logout" />
          </ul>
        </div>

        {/* Big Screen */}
        <div className="hidden bg-primary200 lg:w-[15%] p-4  h-screen lg:flex flex-col gap-[20px] py-[50px] fixed top[145px]">
          <Link to="/community">
            <IoIosArrowBack size={20} />
          </Link>
          <h3 className="lg:text-[24px]">Settings</h3>
          <ul className="flex flex-col gap-[16px] mt-[24px]">
            <SidebarItem
              icon={<TbUser size={20} />}
              text="Profile"
              isActive={activeComponent.type === ProfileComponent}
              onClick={() => handleItemClick(<ProfileComponent />)}
            />
            <SidebarItem
              icon={<IoMdNotificationsOutline size={20} />}
              text="Notifications"
              isActive={activeComponent.type === NotificationsComponent}
              onClick={() => handleItemClick(<NotificationsComponent />)}
            />
            <SidebarItem
              icon={<GoUnlock size={18} />}
              text="Password"
              isActive={activeComponent.type === PasswordComponent}
              onClick={() => handleItemClick(<PasswordComponent />)}
            />
            <SidebarItem icon={<MdLogout size={18} />} text="Logout" />
          </ul>
        </div>

        {/* Main content area */}
        <div
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="flex-1 fixed p-[10px] lg:p-[50px] top-[220px] lg:top-[145px] w-full lg:w-[85%] lg:left-[15%] h-[80vh] "
        >
          {activeComponent}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

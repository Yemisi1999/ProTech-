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
        <div className="hidden bg-primary200 lg:w-[198px] p-4  h-screen lg:flex flex-col gap-[20px] py-[50px] fixed top[145px]">
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
        <div className="flex-1 p-[10px] lg:p-[50px] fixed top-[75px] lg:top-[145px] lg:left-[198px]">
          {activeComponent}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

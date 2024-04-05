import React from "react";
import Logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
// import Topbar from "../../components/navbar/Topbar";

const Community = () => {
  return (
    <>
      {/* <Topbar /> */}
      <div className="px-[10px] lg:px-[80px] lg:py-[80px] flex items-center justify-center h-[90vh] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[10px] items-center justify-center lg:w-[70%] ">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[140px]" />
          </Link>
          <h1
            style={{ fontFamily: "Noto Serif" }}
            className="text-[24px] lg:text-[48px] font-[600] text-center"
          >
            Join our Community
          </h1>
          <p className="text-[18px] lg:text-[24px] font-[500]  lg:mt-10">
            As a/an
          </p>

          <div className="flex flex-col mt-4 lg:flex-row justify-between w-full lg:mt-10">
            <button className="bg-pink py-[10px] lg:w-[300px] mb-[32px] rounded-[4px] text-white hover:bg-primary200 hover:text-black duration-500">
              Nursing Mom
            </button>
            <button className="bg-pink py-[10px] lg:w-[300px] mb-[32px] rounded-[4px] text-white hover:bg-primary200 hover:text-black duration-500">
              Expecting Mom
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;

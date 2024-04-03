import React from "react";
import heroimg from "../../assets/wtfheroimg.svg";

const Herosection = () => {
  return (
    <div className="hero h-[500px] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center w-[1000px]">
        <div className="flex flex-col gap-[10px] w-[50%]">
          <h1 className="lg:text-[32px] font-[600]">
            Don’t wait till the last minute, create your Baby Registry with this
            easy tool!
          </h1>
          <p className="lg:text-[20px] font-[400]">
            In just a few steps, create a list of all your baby essentials.{" "}
          </p>
          <button className="text-primary text-left mt-[20px] font-[400]">Learn more</button>
        </div>
        <div className="w-[50%] h-[280px]">
          <img src={heroimg} alt="hero-pics" className="w-full h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;

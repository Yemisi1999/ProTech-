import React from "react";
import baby1 from "../../assets/toolbaby1.svg";
import baby2 from "../../assets/toolbaby2.svg";
import baby3 from "../../assets/toolbaby3.svg";
import H1Heading from "../../components/headings/H1Heading";
import H3Heading from "../../components/headings/H3Heading";

const ToolsAndFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10px] lg:px-[130px] py-[30px] lg:py-[60px]">
      <div className="bg-secondary w-[650px] py-[24px] flex flex-col gap-[40px] items-center justify-center">
        <H1Heading className="text-center text-[#000]">
          Tools & Features
        </H1Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-[20px] items-center">
            <img
              src={baby3}
              alt="baby-img"
              className="w-[145px] h-[145px] rounded-full"
            />
            <H3Heading className=" text-[#000] text-center">
              Baby registry builder
            </H3Heading>
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <img
              src={baby1}
              alt="baby-img"
              className="w-[145px] h-[145px] rounded-full"
            />
            <H3Heading className=" text-[#000] text-center">
              Baby feeding guide
            </H3Heading>
          </div>
          <div className="flex flex-col gap-[20px] items-center ">
            <img
              src={baby2}
              alt="baby-img"
              className="w-[145px] h-[145px] rounded-full"
            />
            <H3Heading className=" text-[#000] text-center">
              Baby vaccination tracker
            </H3Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndFeatures;

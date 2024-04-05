import React from "react";
import H1Heading from "../../components/headings/H1Heading";
import nursing from "../../assets/nursingmothers.svg";
import expectant from "../../assets/expectantmothers.svg";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div
      id="community"
      className="flex flex-col items-center justify-center px-[10px] lg:px-[130px] py-[10px] lg:py-[40px]"
    >
      <div className="bg-white lg:w-[730px] py-[24px] flex flex-col gap-[40px] items-center justify-center">
        <H1Heading className="text-center text-[#000]">
          Join our Community
        </H1Heading>
      </div>
      <div className="my-[10px] lg:my-[28px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <Link to="/community">
            <div className="rounded-[20px] bg-secondary cursor-pointer">
              <img
                src={nursing}
                alt=" nursing-mothers-imgs"
                className="rounded-t-[20px]"
              />
              <p className="text-center py-[27px] lg:text-[20px]">
                Nursing Mothers
              </p>
            </div>
          </Link>
          <Link to="/community">
            <div className="rounded-[20px] bg-lightpink cursor-pointer">
              <img
                src={expectant}
                alt="expectant-mothers-imgs"
                className="rounded-t-[20px]"
              />
              <p className="text-center py-[27px] lg:text-[20px]">
                Expecting Mothers
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;

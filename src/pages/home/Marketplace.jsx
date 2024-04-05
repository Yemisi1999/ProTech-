import React, { useState } from "react";
import H1Heading from "../../components/headings/H1Heading";
import H3Heading from "../../components/headings/H3Heading";
import clothe from "../../assets/marketimg.svg";
import casual from "../../assets/casual.svg";
import stroller from "../../assets/stroller.svg";
import { FaStar } from "react-icons/fa";

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allItems = [
    {
      image: clothe,
      name: "Newborn Baby Girl’s casual romper",
      price: "$20.00",
    },
    {
      image: casual,
      name: "Baby Boy’s casual two piece",
      price: "$20.00",
    },
    {
      image: stroller,
      name: "Baby Stroller",
      price: "$20.00",
    },
  ];

  const babyItems = [
    {
      image: casual,
      name: "Baby Boy’s casual two piece",
      price: "$20.00",
    },
    {
      image: clothe,
      name: "Newborn Baby Girl’s casual romper",
      price: "$20.00",
    },
  ];

  const motherItems = [
    {
      image: stroller,
      name: "Baby Stroller",
      price: "$20.00",
    },
  ];

  const getCategoryItems = () => {
    switch (selectedCategory) {
      case "All":
        return allItems;
      case "Babies":
        return babyItems;
      case "Mothers":
        return motherItems;
      default:
        return allItems;
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      id="market"
      className="marketplace  flex flex-col  px-[10px] md:px-[130px] pb-10 lg:pb-16 "
    >
      <div className="flex flex-col gap-[8px]">
        <H1Heading className="text-center text-[#000]">Marketplace</H1Heading>
        <H3Heading className=" text-[#000] text-center">
          Shop the best products for babies & mothers
        </H3Heading>
      </div>
      <div className="mt-[40px]">
        <div className="flex items-center gap-[10px] w-full md:w-[225px] bg-white p-2 rounded-[4px]">
          <button
            className={`rounded-[4px] w-full md:w-[70px] p-1 ${
              selectedCategory === "All" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </button>
          <button
            className={`rounded-[4px] w-full md:w-[100px] p-1 ${
              selectedCategory === "Babies" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCategoryClick("Babies")}
          >
            Babies
          </button>
          <button
            className={`rounded-[4px] w-full md:w-[70px] p-1 ${
              selectedCategory === "Mothers" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCategoryClick("Mothers")}
          >
            Mothers
          </button>
        </div>
      </div>
      <div className="my-[10px] lg:my-[20px] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[40px]">
          {getCategoryItems().map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[10px] justify-center  bg-white p-[15px] rounded-[20px] shadow-xl"
            >
              <img src={item.image} alt={item.name} />
              <p className="lg:text-[16px]">{item.name}</p>
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    style={{ color: index < 4 ? "#9B8600" : "#D3D3D3" }}
                  />
                ))}
              </div>
              <p className="lg:text-[16px]">{item.price}</p>
              <button className="bg-pink p-[10px] lg:w-[90px] mb-[32px] rounded-[4px] text-white hover:bg-primary200 hover:text-black duration-500">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

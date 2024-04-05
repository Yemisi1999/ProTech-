import React, { useState, useEffect } from "react";
import heroimg from "../../assets/wtfheroimg.svg";
import H1Heading from "../../components/headings/H1Heading";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Herosection = () => {
  const slides = [
    {
      id: 1,
      heading:
        "Don’t wait till the last minute, create your Baby Registry with this easy tool!",
      text: "In just a few steps, create a list of all your baby essentials.",
      image: heroimg,
    },

    {
      id: 2,
      heading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit alias molestias!. ",
      text: "In just a few steps, create a list of all your baby essentials.",
      image: heroimg,
    },
    {
      id: 3,
      heading:
        "Magnam delectus nulla aliquam deleniti voluptas porro alias molestias maxime!",
      text: "In just a few steps, create a list of all your baby essentials.",
      image: heroimg,
    },
    {
      id: 4,
      heading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit alias molestias!. ",
      text: "In just a few steps, create a list of all your baby essentials.",
      image: heroimg,
    },
    {
      id: 5,
      heading:
        "Magnam delectus nulla aliquam deleniti voluptas porro alias molestias maxime!",
      text: "In just a few steps, create a list of all your baby essentials.",
      image: heroimg,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    goToNextSlide();
    // }, 5000);

    // return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="hero h-[350px] lg:h-[500px] relative py-[30px] flex flex-col items-center justify-center mt-[75px] lg:mt-[145px]">
      <div className="lg:absolute inset-0 flex items-center justify-center md:px-[50px]">
        <button
          className="mx-1 text-gray-600 focus:outline-none"
          onClick={goToPrevSlide}
        >
          <SlArrowLeft size={30} className="lg:flex hidden" />
          <SlArrowLeft size={15} className="flex lg:hidden" />
        </button>
        <div className="flex items-center justify-center lg:px-[100px]">
          <div className="flex flex-col gap-[10px] lg:w-[50%]">
            <H1Heading className="text-center lg:text-left text-[#000]">
              {slides[currentSlide].heading}
            </H1Heading>
            <p className="lg:text-[20px] font-[400] px-6 lg:px-0 text-center lg:text-left">
              {slides[currentSlide].text}
            </p>
            <button className="text-primary text-center lg:text-left mt-[10px] lg:mt-[20px] font-[400]">
              Learn more
            </button>
          </div>
          <div className="w-[50%] h-[280px] hidden lg:flex">
            <img
              src={slides[currentSlide].image}
              alt="hero-pics"
              className="w-full h-[200px] lg:h-[300px]"
            />
          </div>
        </div>
        <button
          className="mx-1 text-gray-600 focus:outline-none"
          onClick={goToNextSlide}
        >
          <SlArrowRight size={30} className="lg:flex hidden" />
          <SlArrowRight size={15} className="flex lg:hidden" />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex lg:gap-[40px] justify-center py-[15px] lg:py-[30px] ">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`mx-1 h-[8px] w-[8px] lg:h-[10px] lg:w-[10px]  rounded-full ${
              index === currentSlide ? "bg-black" : "bg-white"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Herosection;

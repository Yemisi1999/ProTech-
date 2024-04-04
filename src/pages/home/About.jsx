import React from "react";
import H1Heading from "../../components/headings/H1Heading";

const About = () => {
  return (
    <div className="flex items-center justify-center px-[10px] lg:px-[130px] py-[30px] lg:py-[60px]">
      <div className="flex flex-col  gap-[10px] lg:gap-[28px] ">
        <H1Heading className="text-center text-primary">
          {" "}
          About Mim’s Home
        </H1Heading>
        <p className="lg:text-[18px] font-[400] text-center">
          Welcome to Mim’s Home, your trusted companion on the journey of
          motherhood. We understand the joys and challenges that come with
          pregnancy, childbirth, and nursing, which is why we're here to provide
          you with valuable resources, support, and community every step of the
          way. 
        </p>
        <p className="lg:text-[18px] font-[400] text-center">
           At Mim’s Home we believe in empowering mothers with knowledge,
          comfort, and confidence as they navigate the beautiful yet sometimes
          overwhelming experience of motherhood. Whether you're an expecting
          mother eagerly anticipating the arrival of your little one or a
          nursing mother seeking guidance and encouragement, our platform is
          designed to meet your unique needs. 
        </p>
        <p className="lg:text-[18px] font-[400] text-center">
            From expert articles and tips on pregnancy and breastfeeding to
          personalized support and a vibrant community of fellow mothers, Mim’s
          Home is your go-to destination for all things related to motherhood.
          Our mission is to create a nurturing and inclusive space where mothers
          can connect, learn, and grow together. Join us on this incredible
          journey and let's embrace the magic of motherhood together. 
        </p>
      </div>
    </div>
  );
};

export default About;

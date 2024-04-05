import React from "react";
import baby from "../../assets/healthbaby.svg";
import baby1 from "../../assets/baby1.svg";
import baby2 from "../../assets/baby2.svg";
import baby3 from "../../assets/baby3.svg";
import baby4 from "../../assets/baby4.svg";
import baby5 from "../../assets/baby5.svg";
import H1Heading from "../../components/headings/H1Heading";
import H3Heading from "../../components/headings/H3Heading";

const HealthAndWellness = () => {
  const articles = [
    {
      id: 1,
      title: "How to care for your baby",
      description:
        "Caring for babies is a delicate and rewarding responsibility...",
      author: "Dr. Raheed Paul",
      image: baby,
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "How to care for your baby",
      description:
        "Caring for babies is a delicate and rewarding responsibility...",
      author: "Dr. Raheed Paul",
      image: baby1,
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Postpartum recovery tips",
      description:
        "Postpartum recovery is a vital phase in the journey of mother...",
      author: "Dr. Raheed Paul",
      image: baby2,
      readMoreLink: "#",
    },
    {
      id: 4,
      title: "Postpartum recovery tips",
      description:
        "Postpartum recovery is a vital phase in the journey of mother...",
      author: "Dr. Raheed Paul",
      image: baby3,
      readMoreLink: "#",
    },
    {
      id: 5,
      title: "How to care for your baby",
      description:
        "Caring for babies is a delicate and rewarding responsibility...",
      author: "Dr. Raheed Paul",
      image: baby4,
      readMoreLink: "#",
    },
    {
      id: 6,
      title: "How to care for your baby",
      description:
        "Caring for babies is a delicate and rewarding responsibility...",
      author: "Dr. Raheed Paul",
      image: baby5,
      readMoreLink: "#",
    },
  ];

  return (
    <div className="health  flex flex-col items-center justify-center px-[10px] md:px-[130px] py-[30px] lg:py-[60px]">
      <div className="flex flex-col gap-[8px] mb-6 lg:mb-0">
        <H1Heading className="text-center text-[#000]">
          Health & Wellness
        </H1Heading>
        <H3Heading className=" text-[#000] text-center">
          Trending Articles
        </H3Heading>
      </div>

      <div className="my-[10px] lg:my-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[28px]">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col lg:flex-row gap-[20px] items-center bg-white p-[14px] cursor-pointer shadow-xl"
            >
              <div className="w-[250px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <H3Heading className=" text-[#000] text-center lg:text-left">
                  {article.title}
                </H3Heading>
                <h6 className="text-[14px] lg:text-[16px] text-center lg:text-left">
                  {article.description}{" "}
                  <span className="text-primary text-[14px] lg:text-[16px] cursor-pointer">Read more</span>
                </h6>
                <p className="text-[12px] lg:text-[14px] text-center lg:text-left">
                  Contributed by {article.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthAndWellness;

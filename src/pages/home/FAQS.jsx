import React, { useState } from "react";
import H1Heading from "../../components/headings/H1Heading";

const FAQS = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Are the products doctor recommended?",
      answer:
        " Some of them are recommended by health professionals while some of them are not. Kindly read through the description of each item for further details.",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "Are there..................................................................................................................?",
      answer:
        " Some of them are recommended by health professionals while some of them are not. Kindly read through the description of each item for further details.",
      isOpen: false,
    },
    {
      id: 3,
      question:
        "Is IT there.............................................................................................................................................................................?",
      answer:
        " Some of them are recommended by health professionals while some of them are not. Kindly read through the description of each item for further details.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div className="bg-[#FFF5FA]  flex flex-col  px-[10px] lg:px-[130px] py-[30px] lg:py-[60px]">
      <H1Heading className="text-center text-[#000]">
        Frequently Asked Questions
      </H1Heading>
      <div className="mt-[20px] lg:mt-[56px] flex flex-col gap-[32px]">
        {faqs.map((faq, index) => (
          <div key={faq.id}>
            <div
              onClick={() => toggleFAQ(index)}
              className={`py-[20px] px-[32px] bg-lightpink rounded-[20px] cursor-pointer 
              ${
                faq.id === 1
                  ? "w-[400px]"
                  : faq.id === 2
                  ? "w-[600px]"
                  : "w-full"
              }
              `}
            >
              <p className="font-[500]">{faq.question}</p>
            </div>
            {faq.isOpen && (
              <div className="py-[20px] px-[32px] bg-white border border-pink rounded-[20px] cursor-pointer">
                <p className="font-[500]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;

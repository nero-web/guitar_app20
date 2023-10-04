import React from "react";
import Accordion from "./Accordion";
import { useState } from "react";
import alpha from "../assets/Box.jpeg";

const FAQs = () => {
    const [list, setList] = useState([
        {
          question: "why did you put marmalade on the guitar?",
          answer: "Yes",
        },
        {
          question: "Is it true chris was on the Alphabits cereal box?",
          answer:
            <img src={alpha} alt=""></img>
        },
        {
          question: "Does Guitarmalade have the sauce?",
          answer: "Yes, Guitarmalade indeed has the sauce",
        },
        {
          question: "Is it true that the guitar is the best instrument?",
          answer: "Yes, that is correct",
        },
        {
          question: "If buy a custom course, will I get better",
          answer: "Yes, If you have a custom course designed and you folow each example it is impossible to not improve!",
        },
      ]);
    return (
        <div className='bg-[#f2f2f2] h-auto flex flex-col justify-center items-center lg:mt-20 md:mt-10 sm:mt-10 relative px-1 md:px-10'>
        <h1 className="text-center mt-20 mb-16 text-5xl">FAQs</h1>
        <div className='list lg:w-[1000px] mx-5 md:w-full sm:w-full sm:mx-6 mb-32 sx:mb-6'>
          {list.map((item, key) => (
            <Accordion key={key} datas={item} />
          ))}
        </div>
      </div>
    );
};

export default FAQs;
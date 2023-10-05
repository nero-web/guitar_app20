/** @format */

import React from "react";
import pic1 from "../assets/lessonspics/pic1.png";
import pic2 from "../assets/lessonspics/pic2.jpeg";
import pic3 from "../assets/lessonspics/pic3.jpg";
import pic4 from "../assets/lessonspics/pic4.jpeg";
import pic5 from "../assets/lessonspics/pic5.jpg";
import logoprice from "../assets/lessonspics/pricelogo.svg";


const Lessons = () => {
  const CardsData = [
    {
      title: "Guitare Cookbook Vol. 1",
      price: "$34.95",
      src: pic1,
    },
    {
      title: "CHARLIE-Major/relative Minor Warmup",
      price: "$0.00",
      src: pic2,
    },
    {
      title: "JUST DO THIS Guitaremalade Warmup/Review",
      price: "$0.00",
      src: pic3,
    },
    {
      title: "Modes MEGA Packet by GIOTARMALADE",
      price: "$7.00",
      src: pic4,
    },
    {
      title: "Blues Pentatonic CHEAT CODE",
      price: "$49.99",
      src: pic5,
    },
  ];

  return (
    <div className='bg-[#f2f2f2] h-auto w-full flex flex-col items-center md:py-32 xsm:py-16'>
      <div className='px-5 w-full flex flex-col max-w-[1400px]'>
        <h1 className='mt-4 md:mt-0 lg:text-5xl sm:text-3xl font-semibold leading-6 text-center'>
          Ultimate Lessons by
          <br />
          <br />
          Guitarmalade
        </h1>
        <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 grid-rows-auto'>
          {CardsData.map((card, index) => (
            <div key={index} className='card w-full h-[480px] bg-white rounded'>
              <img
                className='w-full h-[70%] bg-cover bg-center'
                src={card.src}
                alt=""></img>
              <div className='ml-5 mt-5 px-4 py-1.5 bg-white font-semibold leading-6 tracking-wide max-w-[150px] text-center shadow-2xl flex flex-row cursor-pointer text-red-600 text-xl'>
                <img className="w-[24px] h-[24px] me-4" alt="" src={logoprice}/>
                {card.price}
              </div>
              <p className='ml-5 mt-3 font-semibold text-2xl'>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lessons;

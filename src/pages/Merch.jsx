import React from "react";
import mersh1 from "../assets/mershpics/mersh1.png"
import mersh2 from "../assets/mershpics/mersh2.png"
import mersh3 from "../assets/mershpics/mersh3.png"
import mersh4 from "../assets/mershpics/mersh4.png"
import mersh5 from "../assets/mershpics/mersh5.png"
import mersh6 from "../assets/mershpics/mersh6.png"
import sticker from "../assets/mershpics/sticker.jpg"
import logoprice from "../assets/lessonspics/pricelogo.svg"

const Merch = () => {

    const CardsData = [
        {
          title: "New Guitarmalade logo T-Shit",
          price: "$25.50",
          src: mersh1,
        },
        {
          title: "Guitaremalade Sauce logo (no guitar) T-Shit",
          price: "$25.50",
          src: mersh2,
        },
        {
          title: "GUITAREMALADE T-Shirt",
          price: "$20.28",
          src: mersh3,
        },
        {
          title: "Guitarmalade Hoodie",
          price: "$37.11",
          src: mersh4,
        },
        {
          title: "Meme Lord T-Shirt",
          price: "$26.19",
          src: mersh5,
        },
        {
          title: "Got Sauce? T-Shirt",
          price: "$18.02",
          src: mersh6,
        },
        {
          title: "Guitaremalade Sticker",
          price: "$5.00",
          src: sticker,
        },
      ];


      return (
        <div className='bg-[#f2f2f2] h-auto w-full flex flex-col items-center pt-32 pb-32'>
          <div className='px-5 w-full flex flex-col max-w-[1400px]'>
            <h1 className='mt-4 md:mt-0 lg:text-5xl sm:text-3xl font-semibold leading-6 text-center'>
            Explore Merch by
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

export default Merch;
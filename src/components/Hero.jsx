import React from "react";
import guitar_image from "../assets/images.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1400px] relative z-0 h-100vh md:py-32 xsm:py-16">
      <div className='lg:px-20 md:flex px-5'>
        <div className='lg:w-[500px] lg:min-w-[460px] xsm:w-auto'>
          <img className="w-full h-auto" src={guitar_image} alt="/" />
        </div>
        <div className='md:w-[60%] md:pl-8 flex justify-between'>
          <div className="max-w-[480px]">
            <h1 className='font-semibold mt-4 md:mt-0 lg:text-5xl md:text-5xl sm:text-2xl'>We Are
            <br/>
             Guitarmalade</h1>
            <p className='mt-4 text-lg'>
              Guitarmalade offers private lessons, workshops, and downloads for
              guitarists of all levels. Just like marmalade elevates white
              bread, Guitarmalade lessons empower intermediate guitarists who
              have hit a plateau-helping them reach the next level!
            </p>
            <p className='mt-4 text-lg'>Spread it, and SHRED IT!</p>
            <button
              type='button'
              className='lg:mt-32 md:mt-12 bg-primary text-black px-8 py-3 rounded hover:bg-primary-600 focus:outline-none focus:bg-primary-600 hover:bg-black hover:text-white w-max-min h-[50px] border-black transition duration-500 xsm:mt-5'>
              Subscribe
            </button>
          </div>
          <div className='px-2 flex flex-col mt-4 relative xsm:left-2 top-10 '>
            <FaFacebook className='icon text-black m-2  w-8 h-8' style={{ color: "black" }}/>
            <FaInstagram className='icon text-black m-2 w-8 h-8' style={{ color: "black" }}/>
            <FaYoutube className='icon text-black m-2 w-8 h-8' style={{ color: "black" }}/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;

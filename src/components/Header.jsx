import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { Head } from '../assets';

const Header = () => {
  return (
    <div id='home' className="h-full flex flex-col lg:flex-row md:justify-between lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10">
      <div className="flex flex-col">
        <h3 className='uppercase font-dmsans font-bold text-text-orange lg:text-lg md:text-base text-sm'>
          Cargo and Logistics
        </h3>
        <h1 className='capitalize font-manrope font-extrabold text-black lg:text-[3rem] md:text-[3rem] text-[1.8rem] md:pr-20 lg:pr-1'>
          smart working style for smart people
        </h1>
        <h2 className="font-manrope sm:leading-5 text-text-black md:text-sm pr-1 md:pr-20 lg:pr-10 sm:text-xs text-[0.6rem] leading-3 tracking-[0.01rem]">
          We are a community of bold minds who have decided to work under the same roof. By saying that our SmartSpace is sustainable and comfy we confirm that you will get 100% satisfaction from working here and making the best out of this experience
        </h2>
      </div>

      <div className="flex mr-4 lg:-mt-10 md:-mt-6 mt-0 justify-center">
        <img src={Head} alt="House" className='lg:w-max lg:h-max md:w-[50rem] md:h-[50rem] -ml-8 lg:-ml-0 md:-ml-24 mt-4 md:mt-10' />

        <div className="flex flex-col justify-center">
          <AiFillFacebook className='md:w-8 w-6 md:h-8 h-6 mb-3 shadow p-1' />
          <AiFillInstagram className='md:w-8 w-6 md:h-8 h-6 mb-3 shadow p-1' />
          <AiFillTwitterSquare className='md:w-8 w-6 md:h-8 h-6 mb-3 shadow p-1' />
          <AiFillLinkedin className='md:w-8 w-6 md:h-8 h-6 mb-3 shadow p-1' />
        </div>
      </div>
    </div>
  );
};

export default Header;

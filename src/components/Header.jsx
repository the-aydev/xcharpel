import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { Head } from '../assets';

import { FACEBOOK_URL, TWITTER_URL, EMAIL_URL } from '../constants';

const Header = () => {
  return (
    <motion.div
      id='home' className="h-full flex flex-col lg:flex-row md:justify-between lg:mt-20 md:mt-10 mt-6 px-4 md:px-8 lg:px-10 md:mb-10">
      <div
        className="flex flex-col">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='uppercase font-dmsans font-semibold text-text-orange lg:text-lg md:text-base text-sm text-[#FFA217]'>
          Cargo and Logistics
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='capitalize font-manrope font-extrabold text-black lg:text-[3rem] md:text-[3rem] text-[1.8rem] lg:pr-1'>
          Making shippins fast and safe
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="font-manrope sm:leading-5 text-text-black md:text-sm lg:pr-10 sm:text-xs text-[0.6rem] leading-3 tracking-[0.01rem]">
          We are a community of bold minds who have decided to work under the same roof. By saying that our SmartSpace is sustainable and comfy we confirm that you will get 100% satisfaction from working here and making the best out of this experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="flex flex-row mt-6 md:mt-10">
          <FaFacebookF className='md:w-9 w-7 md:h-9 h-7 shadow p-2 cursor-pointer' onClick={() => { window.open(FACEBOOK_URL, '_blank'); }} />
          <AiOutlineTwitter className='md:w-9 w-7 md:h-9 h-7 ml-5 shadow p-1 cursor-pointer' onClick={() => { window.open(TWITTER_URL, '_blank'); }} />
          <AiOutlineMail className='md:w-9 w-7 md:h-9 h-7 ml-5 shadow p-1 cursor-pointer' onClick={() => { window.open(EMAIL_URL, '_blank'); }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="flex lg:mr-4 lg:-mt-10 md:-mt-6 mt-0 justify-center">
        <img src={Head} alt="House" className='lg:w-[70rem] lg:h-96 md:w-[50rem] w-full md:h-[30rem] lg:-ml-0 mt-4 md:mt-10' />
      </motion.div>
    </motion.div>
  );
};

export default Header;

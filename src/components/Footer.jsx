import React from 'react';

import { navigation } from '../constants';

const Footer = () => {
  return (
    <div id='contact' className='flex flex-col mt-10'>
      <div className='divider md:my-5 md:mt-0 mt-4 mx-8 md:mx-20 lg:mx-32' />
      <div className="flex flex-col md:flex-row justify-between items-center h-16 bg-white text-black md:text-xs text-[0.5rem] w-11/12 font-bold">
        <a href='/' className='lg:pl-40 md:pl-20 pl-0 mt-4 md:mt-0'>
          <span className="font-manrope text-text-black md:text-lg text-[0.6rem] font-extrabold cursor-pointer">XCharpel</span>
        </a>
        <div className="lg:pr-10 pr-0">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='md:p-4 p-1 hover:underline'
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:mb-8 mb-3 md:mt-0 mt-5">
        <h3 className="font-dmsans font-bold text-text-black md:text-xs text-[0.5rem]">Copyright ©2021 Xcharpel Logistics Limited.</h3>
      </div>
    </div>
  );
};

export default Footer;

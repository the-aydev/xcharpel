import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

import { navigation } from '../constants';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);
  const closeMobileMenu = () => setToggleMenu(false);

  return (
    <nav className='flex justify-between items-center h-16 md:h-20 bg-white text-black relative rounded-full shadow-md text-base font-bold mt-3 md:mt-1'>
      <a href='/' className='lg:pl-10 md:pl-8 pl-5'>
        <span className="font-manrope text-text-black md:text-2xl text-xl font-extrabold cursor-pointer">XCharpel</span>
      </a>
      <div className="mr-2 cursor-pointer lg:hidden sm:pr-0 md:pr-16 absolute top-5 right-4 z-20" onClick={handleClick}>
        {toggleMenu ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
      </div>
      {toggleMenu ? <div className="lg:hidden flex flex-col absolute bg-gray-200 z-10 w-full
      h-screen top-0 left-0 duration-500 ease-linear slide-bottom justify-center">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={closeMobileMenu}
            className='text-center p-6'
          >
            {item.name}
          </a>
        ))}
      </div> : <div className="md:pr-10 sm:pr-4 pr-0 lg:block hidden">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className='p-4 hover:underline'
          >
            {item.name}
          </a>
        ))}
      </div>}
    </nav>
  );
};

export default Navbar;
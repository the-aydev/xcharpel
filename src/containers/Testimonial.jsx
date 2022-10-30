import React from 'react';
import { testimony } from '../constants';

import { Testimonies } from '../components';

const Testimonial = () => {
  return (
    <div className='flex flex-col my-10 md:mt-20 md:mx-10 mx-3'>
      <div className="flex md:mr-40">
        <h1 className="font-manrope text-sm md:text-3xl lg:w-1/2 font-semibold md:pb-3 pb-1">
          Loved by businesses, and individuals across the globe.
        </h1>
      </div>

      <div className="md:grid md:grid-cols-3 lg:gap-10 mb-10 mt-4 md:gap-5 flex flex-col">
        {testimony.map((item, index) => (
          <Testimonies key={item.name + index} review={item.review}
            text={item.text} dp={item.dp} name={item.name} city={item.city}
          />
        ))}
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center pb-5">
        <span className='text-[#333333] font-inter md:text-sm text-[0.65rem] md:px-5 px-1'>
          Give us a Call 1-888-111-2222 and we can set you up, or <a className='text-blue-400 underline' href="/">check our pricing plans</a>
        </span>
      </div>
    </div>
  );
};

export default Testimonial;

import React from 'react';
import { motion } from 'framer-motion';
import { testimony } from '../constants';

import { Testimonies } from '../components';

const Testimonial = () => {
  return (
    <div className='flex flex-col my-10 md:mt-20 md:mx-10 mx-5'>
      <div className="flex md:mr-40">
        <h1 className="font-manrope text-xl md:text-3xl w-5/6 lg:w-1/2 font-semibold md:pb-3 pb-1">
          Loved by businesses, and individuals across the globe.
        </h1>
      </div>

      <div className="md:grid md:grid-cols-3 lg:gap-10 mb-10 mt-4 md:gap-5 flex flex-col px-5 md:px-0">
        {testimony.map((item, index) => (
          <Testimonies key={item.name + index} review={item.review}
            text={item.text} dp={item.dp} name={item.name} city={item.city}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

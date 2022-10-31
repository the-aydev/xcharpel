import React from 'react';
import { motion } from 'framer-motion';
import { Works } from '../components';

import { worksData } from '../constants';

const About = () => {
  return (
    <motion.div id='about' className='flex flex-col'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.6, 0.01, -0.05, 0.9] }}
        whileInView='animate'
        viewport={{ once: true }}
        className="flex justify-center md:mb-14 sm:mb-10 mb-0">
        <h1 className="font-manrope font-semibold md:text-5xl sm:text-3xl text-2xl mt-20">About Us</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
        whileInView='animate'
        viewport={{ once: true }}
        className="flex flex-col mt-5 md:mt-0 md:grid md:grid-cols-3 md:gap-0 px-0 lg:px-20">
        {worksData.map((item, index) => (
          <Works img={item.img} title={item.title} text={item.text} key={item.title + index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;

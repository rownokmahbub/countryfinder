import React from 'react'
import { motion } from "framer-motion";
import { upAnimation,downAnimation } from '../styles/Animation';
import { useScroll } from './UseScroll';
const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <div className='px-20 bg-gradient-to-r from-[#03033b] via-[#230929] to-[#03033b] py-20 rounded-t-[60px]' ref={element}>
        {/* <p className='text-5xl font-semibold text-center max-w-xl flex justify-center items-center mx-auto text-white'>See if Designjoy is right for you. (It totally is.)</p>
        <p className='text-xl text-center max-w-xl flex justify-center items-center mx-auto mt-6 text-white'>Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.</p> */}
        <motion.div className="lg:flex lg:flex-row flex-wrap justify-between lg:gap-20 items-center flex flex-col"  variants={downAnimation}
            animate={controls}
            transition={{ delay: 0.05, type: "tween" }}>
        <div className="flex-shrink-0">
            <p className="font-bold text-2xl text-white animate__animated animate__fadeInDown animate__delay-1s"> RM <span className="text-purple-500
            ">.</span></p>
            </div>
            <div className="flex flex-col gap-3 mt-4 lg:mt-0">
              <p className='font-medium text-xl cursor-pointer text-white'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className='font-medium text-xl cursor-pointer text-white'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className='font-medium text-xl cursor-pointer text-white'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Footer
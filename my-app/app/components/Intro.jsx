import React from 'react';
import { motion } from 'framer-motion';
import time from '../assets/time.svg';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className="relative mt-10 h-[100vh] lg:h-[200vh] bg-paper-image bg-cover bg-center bg-no-repeat">
      <div className="absolute top-72 left-4 md:left-10 lg:left-12 flex flex-col justify-center items-center">
        <h2 className=" text-black text-4xl md:text-5xl lg:text-6xl ">Hello there!</h2>
        <h3 className="text-center text-black w-2/3 text-2xl md:text-3xl lg:text-4xl">If you are someone whose goal is to create meaningful products, <span className="font-bold text-black bg-tape-image bg-cover bg-center bg-no-repeat">scroll down</span></h3>
      </div>
      <div className="absolute top-[32rem] left-10 md:left-20 lg:left-20 w-5/6 text-center flex flex-col justify-center items-center ">
        <h3 className="text-black font-regular font-cursive  text-xl md:text-3xl lg:text-4xl">As a child, I always approached daily problems with creativity, which has evolved into a passion for <span className="italic text-indigo-700">blending technology and creativity</span> to find innovative solutions.I now look forward to bringing a <span className="italic text-indigo-700">Designer's perspective</span> and a <span className = "italic text-indigo-700">Developer's expertise</span> to every project I take on.</h3>
      </div>
      <div className="hidden md:block lg:block absolute top-[48rem] left-28 rounded-3xl w-4/5 h-80 bg-white flex justify-evenly items-center">
        <div className="m-10 bg-black h-[70%] w-[40%] rounded-2xl"></div>
      </div>
    </div>
  )
}

export default Intro

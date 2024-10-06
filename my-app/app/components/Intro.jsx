import React from 'react';
import { motion } from 'framer-motion';
import git from '../assets/gitProfile.jpeg';
import Image from 'next/image';
import redirect from '../assets/redirect.svg';

const Intro = () => {
  return (
    <div className="relative mt-10 h-[100vh] lg:h-[200vh] bg-paper-image bg-cover bg-center bg-no-repeat">
      <div className="absolute top-72 left-4 md:left-10 lg:left-12 flex flex-col justify-center items-center">
        <h2 className=" text-black text-4xl md:text-5xl lg:text-6xl ">Hello there!</h2>
        <h3 className="text-center text-black w-2/3 text-2xl md:text-3xl lg:text-4xl">If you are someone whose goal is to create meaningful products, <span className="font-bold text-black bg-tape-image bg-cover bg-center bg-no-repeat">scroll down</span></h3>
      </div>
      <div className="absolute top-[32rem] left-10 md:left-20 lg:left-20 w-5/6 text-center flex flex-col justify-center items-center ">
        <h3 className="text-black/80 font-regular   text-xl md:text-3xl lg:text-4xl">As a child, I always approached daily problems with creativity, which has evolved into a passion for <span className="italic text-purple-700">blending technology and creativity</span> to find innovative solutions.I now look forward to bringing a <span className="italic text-purple-700">Designer's perspective</span> and a <span className = "italic text-purple-700">Developer's expertise</span> to every project I take on.</h3>
      </div>
      <div className="transition ease-in-out delay-150 hidden md:block lg:block absolute top-[48rem] left-28 rounded-3xl w-4/5 h-80 bg-white flex flex-row justify-center items-center gap-x-20 hover:shadow-custom-black">
        <div className="m-10 bg-transparent h-[70%] w-[40%]">
          <Image src={git} className="rounded-2xl h-full w-full object-contain mr-10 "/>
        </div>
        <div className="absolute flex flex-col justify-center items-start top-4 right-2 h-[70%] w-[60%] m-10 ">
          <h2 className="text-4xl text-black font-bold">Check out my Github</h2>
          <p className="text-xl text-[#2e2e2e]">Have a look on my recent projects and my development journey.</p>
          <Image src={redirect} className="p-2 h-10 w-10 transition ease-in-out delay-150 hover:translate-x-4"/>
        </div>
      </div>
    </div>
  )
}

export default Intro

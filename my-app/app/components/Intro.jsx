import React from 'react';
import { motion } from 'framer-motion';
import git from '../assets/gitProfile.jpeg';
import checkGit from '../assets/checkGit.gif';
import checkDes from '../assets/checkDes.gif';
import Image from 'next/image';
import redirect from '../assets/redirect.svg';
import Link from 'next/link';

const Intro = () => {
  return (
    <>
      <div className='overflow-hidden'>
      <div className='mb-32 pt-64 pb-32 flex flex-col justify-center items-center mt-10 lg:pt-64 lg:pb-52 pb-20 bg-paper-image bg-cover w-screen bg-center bg-no-repeat '>
        <div className='pt-36 flex flex-col justify-center items-center'>
          <h2 className="pt-20 text-black text-4xl md:text-5xl lg:text-6xl ">Hello there!</h2>
          <h3 className="pt-3 text-center text-black/70 w-2/3 text-2xl md:text-3xl lg:text-4xl">If you are someone whose goal is to create meaningful products, <span className="font-bold text-black bg-tape-image bg-cover bg-center bg-no-repeat">scroll down</span></h3>
          <h3 className="text-black/80 text-lg w-2/3 pt-7 text-center  text-regular md:text-lg lg:text-xl">As a child, I always approached daily problems with creativity, which has evolved into a passion for <span className="italic text-purple-700">blending technology and creativity</span> to find innovative solutions.I now look forward to bringing a <span className="italic text-purple-700">Designers perspective</span> and a <span className = "italic text-purple-700">Developers expertise</span> to every project I take on.</h3>
        </div>
        <div>
          <div className='mt-7 flex flex-col md:flex-row lg:flex-row gap-y-7 md:gap-x-20 lg:gap-x-20 justify-center items-center'>
          <Link href='https://github.com/shivani-tripurari'>
          <div className='flex flex-col justify-start items-center mt-3 transition ease-in-out delay-150 hover:shadow-custom-black pt-3 h-80 w-64 rounded-3xl border-2 border-black bg-white'>
            <div className='mt-7 h-40 w-40 bg-white rounded-2xl'>
              <Image src={checkGit} alt='gitProfile' className='h-full w-full object-cover rounded-2xl border-2 border-black'/>
              <h3 className='pt-3 text-black text-lg font-bold'>Check my Github</h3>
              <button className='w-32 ml-3 mt-1 p-3 bg-black text-white font-bold text-sm rounded-2xl uppercase'>Explore</button>
            </div>
          </div>
          </Link>
          <Link href='/design'>
          <div className='flex flex-col justify-start items-center mt-3 transition ease-in-out delay-150 hover:shadow-custom-black pt-3 h-80 w-64 rounded-3xl border-2 border-black bg-white'>
            <div className='mt-7 h-40 w-40 bg-white rounded-2xl'>
              <Image src={checkDes} alt='gitProfile' className='h-full w-full object-cover rounded-2xl border-2 border-black'/>
              <h3 className='pt-3 text-black text-lg font-bold'>Check my Designs</h3>
              <button className='w-32 ml-3 mt-1 p-3 bg-black text-white font-bold text-sm rounded-2xl uppercase'>Explore</button>
            </div>
          </div>
          </Link>
        </div>
        </div>
      </div>
      </div>
    </>
      )
}

export default Intro

{/* 
  <div className="relative flex justify-center items-center mt-10 h-[100vh] lg:h-[200vh] bg-paper-image bg-cover bg-center bg-no-repeat">
      <div className="absolute top-72  flex flex-col justify-center items-center">
        <h2 className=" text-black text-4xl md:text-5xl lg:text-6xl ">Hello there!</h2>
        <h3 className="text-center text-black w-2/3 text-2xl md:text-3xl lg:text-4xl">If you are someone whose goal is to create meaningful products, <span className="font-bold text-black bg-tape-image bg-cover bg-center bg-no-repeat">scroll down</span></h3>
      </div>
      <div className="absolute top-[32rem]  w-5/6 text-center flex flex-col justify-center items-center ">
        <h3 className="text-black/80 font-regular   text-xl md:text-3xl lg:text-4xl">As a child, I always approached daily problems with creativity, which has evolved into a passion for <span className="italic text-purple-700">blending technology and creativity</span> to find innovative solutions.I now look forward to bringing a <span className="italic text-purple-700">Designers perspective</span> and a <span className = "italic text-purple-700">Developers expertise</span> to every project I take on.</h3>
      </div>
      <div className="transition ease-in-out delay-150 hidden md:hidden lg:block absolute top-[48rem]  rounded-3xl w-4/5 h-80 bg-white flex flex-row justify-center items-center gap-x-20 hover:shadow-custom-black">
        <div className="m-10 bg-transparent h-[70%] w-[40%]">
          <Image src={git} alt='gitProfile' className="rounded-2xl h-full w-full object-contain mr-10 "/>
        </div>
        <div className="absolute flex flex-col justify-center items-start top-4 right-2 h-[70%] w-[60%] m-10 ">
          <h2 className="text-4xl text-black font-bold">Check out my Github</h2>
          <p className="text-xl text-[#2e2e2e]">Have a look on my recent projects and my development journey.</p>
          <Image src={redirect} alt='redirect' className="p-2 h-10 w-10 transition ease-in-out delay-150 hover:translate-x-4"/>
        </div>
      </div>
    </div>

  */}
import React from 'react'
import Image from 'next/image'

import star2 from '../assets/star2.svg';
import redirect from '../assets/redirectW.svg';

const Work = ({ workText = "",full="", items = [] }) => {
  return (
    <>
    <div className="flex justify-center items-center relative top-10 left-0">
      <div className="mt-2 mb-2 overflow-hidden group h-64 w-[84rem] bg-[#171717] border-2 border-transparent flex flex-row justify-evenly gap-x-2 md:gap-x-64 lg:gap-x-64 items-center">
        <div className="absolute h-full w-full">
          <Image src={star2} className="hidden h-4 w-4 absolute top-16 left-[20] md:left-[30rem] lg:left-[30rem] group-hover:block"/>
          <Image src={star2} className="hidden h-8 w-8 absolute bottom-16 left-40 group-hover:block" />
          <Image src={redirect} className="hidden h-6 w-6 absolute top-4 right-4 md:right-16 lg:right-20 group-hover:block"/>
        </div>
        <div className="text-transparent transition duration-500 ease-in-out font-outline-2 font-semibold text-[8rem] md:text-[16rem] lg:text-[16rem] mx-7 group-hover:scale-[1.7] group-hover:font-bold group-hover:-translate-x-8 md:group-hover:-translate-x-28 lg:group-hover:-translate-x-28 group-hover:font-outline-1">{workText}</div>
        <div className="flex flex-col justify-between  items-left">
          <h1 class="transition duration-500 ease-in-out text-2xl md:text-4xl lg:text-4xl text-[#fefefe] font-bold group-hover:scale-75  group-hover:bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]   inline-block group-hover:text-transparent group-hover:bg-clip-text">{full}</h1>
          <ul className="hidden md:block lg:block transition duration-500 ease-in-out text-base md:text-lg lg:text-lg text-slate-200 ml-7 pt-7 group-hover:scale-75 group-hover:text-slate-300">
            {items.map((item,index)=>(
                <p className="w-3/4" key={index}>{item}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>  
  )
}

export default Work
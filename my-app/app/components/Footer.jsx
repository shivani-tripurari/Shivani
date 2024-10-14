import React from 'react'
import Image from 'next/image'
import avatar from '../assets/newAvatar.svg'
import dribble from '../assets/dLogo.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import medium from '../assets/medium.svg';
import mail from '../assets/mail.svg';
import { motion } from 'framer-motion'
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="relative mt-40">
      
        
          <Image src={avatar} alt='avatar' className="transition ease-in-out duration-300 delay-150 h-80 w-80 absolute bottom-72 md:bottom-40 lg:bottom-44 z-40 hover:-translate-y-[7rem] md:hover:-translate-y-[7rem] lg:hover:-translate-y-[7rem] " />
        
    
      <div className = "relative pt-10 pb-20 bg-[#0E100F] border-t-2 border-white z-50">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="ml-0 md:ml-7 lg:ml-7 text-5xl md:text-6xl mt-10 mb-10 lg:mt-10 lg:text-7xl font-bold">
            <h2>Shivani </h2>
            <h2>Tripurari</h2>
        </div>
        <div className="pr-2 mr-1 md:mr-40 lg:mr-40 h-40 w-10 flex flex-row justify-center gap-x-7 items-center">
            <Image src={github} alt='git' className="h-10 w-10"/>
            <Image src={dribble} alt='drib' className="h-7 w-7"/>
            <Image src={medium} alt='med' className='h-7 w-7'/>
            <Image src={linkedin} alt='link' className="h-7 w-7"/>
            <Image src={mail} alt='mail' className='h-10 w-10'/>
        </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white/30 font-semibold text-lg">Made using Next.js from scratch</p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer

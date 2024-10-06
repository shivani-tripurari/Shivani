"use client";
import Image from 'next/image';
import React from 'react'
import AnimatedTextCharacter from './AnimatedTextCharacter.js'
import Navbar from './Navbar.jsx';
import lines from '../assets/lines.svg';
import music from '../assets/music.svg';
import dribble from '../assets/dLogo.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import pixHeart from '../assets/heartsLogo.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
    <div>
        <Navbar/>
        
        <div >
        <motion.div
         className="absolute h:4 w:4 md:h-20 md:w-20 lg:h-40 lg:w-40 left-[28vh] top-[24vh] 
      md:left-[25vh] md:top-[8vh]   
      lg:left-[68vh] lg:top-[20vh]"
        initial={{ opacity: 0, scale:0 }} // Starts 100px below its final position with 0 opacity
        animate={{ opacity: 1, scale:1, rotate:-5 }} // Animates to its final position with full opacity
        transition={{ease: "easeOut",type:"spring",stiffness:"70",damping:"40",  duration: 1.7 }} // Adjust the duration for a smooth effect
         >
            <Image src={lines} className="h-full w-full"/>
        </motion.div>
        <div className="ml-10 lg:ml-24 text-7xl md:text-8xl mt-40 lg:mt-10 lg:text-9xl font-bold">
            <AnimatedTextCharacter text="Shivani" />
            <AnimatedTextCharacter text="Tripurari" />
        </div>
        <motion.div className="ml-20 lg:ml-0 mt-0 h-80 w-80"
        initial={{ opacity: 0, y: "100vh" }} // Starts 100px below its final position with 0 opacity
        animate={{ opacity: 1, y: "-10vh" }} // Animates to its final position with full opacity
        transition={{ease: "easeOut",type:"spring", duration: 2.1 }} // Adjust the duration for a smooth effect
        whileHover={{ rotate: -45 }} >
            <Image src={music}/>
        </motion.div>
        </div>

        <div className="absolute bottom-20 right-0 m-7 h-40 w-10 flex flex-col justify-evenly items-center">
            <Image src={github} className="h-10 w-10"/>
            <Image src={dribble} className="h-7 w-7"/>
            <Image src={linkedin} className="h-7 w-7"/>
        </div>

        <div className="absolute bottom-44 md:bottom-20 lg:bottom-20 left-0 h-[2px] bg-[#B89091]/20 w-[70%] flex flex-col md:flex-row lg:flex-row items-center justify-evenly">
            <h3 className="pt-4 md:mt-7 text-lg md:pt-12 lg:pt-12 color-gray-700">front-end developer</h3>
            <h3 className="pt-4 md:mt-7 text-lg md:pt-12 lg:pt-12 color-gray-700">ux designer</h3>
            <h3 className="pt-4 md:mt-7 text-lg md:pt-12 lg:pt-12 color-gray-700">finance enthusiast</h3>
        </div>
        
    </div>
    </>
  )
}

export default Hero

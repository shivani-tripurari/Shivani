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
import Infinite from './Infinite.jsx';
import Skills from './Skills.jsx';
import Services from './Services.jsx';
import Intro from './Intro.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
    <div className="overflow-hidden">
        <Navbar/>
        
        <div >
        <motion.div
         className="hidden md:hidden lg:block absolute h:2 w:2 md:h-8 md:w-8 lg:h-40 lg:w-40 left-[28vh] top-[24vh] 
      md:left-[25vh] md:top-[8vh]   
      lg:left-[68vh] lg:top-[20vh]"
        initial={{ opacity: 0, scale:0 }} // Starts 100px below its final position with 0 opacity
        animate={{ opacity: 1, scale:1, rotate:-5 }} // Animates to its final position with full opacity
        transition={{ease: "easeOut",type:"spring",stiffness:"70",damping:"40",  duration: 1.7 }} // Adjust the duration for a smooth effect
         >
            <Image src={lines} alt='lines' className="h-full w-full"/>
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
            <Image src={music} alt='music'/>
        </motion.div>
        </div>

        <div className="absolute bottom-20 right-0 m-7 h-40 w-10 flex flex-col justify-evenly items-center">
            <Link href="https://github.com/shivani-tripurari">
                <Image src={github} alt='git' className="h-10 w-10"/>
            </Link>
            <Link href="https://dribbble.com/shivtrip07">
                <Image src={dribble} alt='drib' className="h-7 w-7"/>
            </Link>
            <Link href="https://www.linkedin.com/in/shivani-tripurari-a7962621b/">
                <Image src={linkedin} alt='link' className="h-7 w-7"/>
            </Link>
        </div>

        <div className="absolute bottom-56 md:bottom-52 lg:bottom-20 left-0 h-[2px] bg-[#B89091]/20 w-[70%] flex flex-col md:flex-row lg:flex-row items-center justify-evenly">
            <h3 className="pt-4 md:mt-7 text-lg md:pt-12 lg:pt-12 color-gray-700">front-end developer</h3>
            <h3 className="pt-4 md:mt-7 text-lg md:pt-12 lg:pt-12 color-gray-700">ux designer</h3>
            <h3 className="pt-4 md:mt-7 text-lg md:pt-12 lg:pt-12 color-gray-700">finance enthusiast</h3>
            <button className="p-2 transition ease-in-out duration-300 delay-150 mt-4 md:mt-7 lg:mt-16 h-10 w-40  text-black font-bold bg-white rounded-sm mg:rounded-lg lg:rounded-lg hover:shadow-btn-sha hover:bg-[#0E100F] hover:border-2 hover:border-[#b89091] hover:text-white">Resume</button>
        </div>
          
    </div>
    <Intro/>
    <Infinite/>  
    <Skills/>
    <Services/>
    <Footer/>
    </>
  )
}

export default Hero

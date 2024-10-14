"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import me from '../assets/me.svg'
import Navbar from '../components/Navbar'
import dribble from '../assets/dLogo.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-3xl lg:text-5xl text-white font-bold mt-20 md:mt-12 lg:mt-4">Hey there !</h1>
                <Image className=" h-80 md:h-[28rem] lg:h-[32rem] w-[28rem] md:w-[36rem] lg:w-[42rem]" src={me} alt='me' />
                <div className="w-[20rem] md:w-[36rem] lg:w-[40rem]">
                    <h3 className="text-center text-white/60 text-lg md:text-xl lg:text-2xl font-regular">I am <span className="text-white">Shivani Tripurari</span> , a Developer and Designer. As someone with knowledge over <span className="text-white">Development</span>, <span className="text-white">Designing</span>, <span className="text-white">Finances</span> and <span className="text-white">Management skills</span>, I aspire to become a Product Manager someday. I might not be perfect in doing things but, I thrive to learn continuously. </h3>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default About

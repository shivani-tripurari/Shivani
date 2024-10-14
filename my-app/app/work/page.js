"use client";
import React from 'react'
import Image from 'next/image'
// import img1 from '../assets/laptop.jpeg'
import web from '../assets/webGif.gif'
import des from '../assets/desGif.gif'
import ux from '../assets/uxGif.gif'
import medbot from '../assets/MedBot.png'
import amani from '../assets/amani.png'
import level from '../assets/level.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const WorkPAge = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="pb-3 text-3xl md:text-3xl lg:text-5xl text-white font-bold mt-20 md:mt-12 lg:mt-4">What do I do?</h1>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'>I develop websites using the <span className="text-white">MERN stack</span> and craft <span className="text-white">beautiful and functional frontend experiences</span> using <span className="text-white">React Js, Next Js, TailwindCSS.</span> I am also a proficient <span className='text-white'>JavaScript</span> developer.</h3>
            <Image src={web} alt='web' className='object-cover mt-4 h-80 w-96 md:h-96 md:w-[24rem] lg:h-96 lg:w-[44rem]'/>
          </div>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'>I design and protoype websites, mobile apps using <span className="text-white">Figma,</span> I have used some design tools like <span className="text-white">Adobe Illustrator, Canva, Flutter Flow</span>, etc. With an eye for <span className="text-white">designing</span> I am dedicated to create <span className='text-white'>smooth and intutive User-experiences</span>.</h3>
            <Image src={des} alt='des' className='object-cover mt-4 h-80 w-96 md:h-[40rem] md:w-[24rem] lg:h-96 lg:w-[44rem]'/>
          </div>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'>The <span className='text-white'>user experience</span> of a product can make or break a <span className='text-white'>business</span>. I am passionate about <span className='text-white'>writing case studies</span> and analyzing companies and their products to identify areas for improvement, refining those insights into actionable solutions that <span className='text-white'>elevate both user satisfaction and business success</span>. </h3>
            <Image src={ux} alt='ux' className='object-cover mt-4 h-80 w-80 md:h-96 md:w-[24rem] lg:h-96 lg:w-[44rem]'/>
          </div>
      </div>
      <div className='mt-20 flex flex-col md:flex-col lg:flex-row justify-evenly items-center'>
        <h1 className="pb-3 text-3xl md:text-3xl lg:text-5xl text-white font-bold mt-20 md:mt-12 lg:mt-4">Work Experience</h1>
        <h3 className='w-[20rem] md:w-[24rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'>I have had an opportunity to work with <span className='text-white'>DCPR-AI</span> and <span className='text-white'>ElitCeler Technologies</span> as a Frontend developer and UX designer. I also do <span className='text-white'>freelancing</span> occassionaly and, participate in <span className='text-white'>Hackathons</span>. I actively contribute to <span className='text-white'>open-source</span> development and I was a part of <span className='text-white'>Girl Script Summer of Code</span>.</h3>
      </div>
      <div className='mt-20 md:mt-36 lg:mt-64 flex flex-col justify-center items-center'>
        <h1 className="pb-3 text-3xl md:text-3xl lg:text-5xl text-white font-bold mt-20 md:mt-12 lg:mt-4">Projects I am happy about</h1>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'><span className='text-white font-bold'>MedBot.AI</span> an application that helps urban working class and, old people as their Medical Assistant powered by AI 🧑‍⚕️💻</h3>
            <Image src={medbot} alt='med' className='object-contain md:object-cover lg:object-cover mt-4 h-96 w-80 md:w-[42rem] lg:w-[52rem]'/>
          </div>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'><span className='text-white font-bold'>Amani</span> a web application that aims to help the underprivileged in Africa throug the digital reforms so they can bridge the gap and transform their lives💻🎯</h3>
            <Image src={amani} alt='ama' className='object-contain md:object-cover lg:object-cover mt-4 h-96 w-80 md:w-[42rem] lg:w-[52rem]'/>
          </div>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'><span className='text-white font-bold'>Level Super Mind - Case study </span>this case study explores the issues encountered while using Level supermind and proposes solutions to enhance the user experience 📑👩‍💻</h3>
            <Image src={level} alt='lev' className='object-contain md:object-cover lg:object-cover mt-4 h-96 w-80 md:w-[42rem] lg:w-[52rem]'/>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default WorkPAge

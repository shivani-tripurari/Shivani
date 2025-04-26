"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import web from '../assets/webGif.gif'
import des from '../assets/desGif.gif'
import ux from '../assets/uxGif.gif'
import cleanup from '../assets/cleanup.png'
import liv from '../assets/liv.png'
import level from '../assets/level.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const WorkPAge = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="pb-3 text-3xl md:text-3xl lg:text-5xl text-white font-bold mt-20 md:mt-12 lg:mt-4">My work as a UI/UX designer</h1>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center'>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'><span className='text-white font-bold'>CleanUp</span>✨☘️ a volunteering apps case study. While working on this project, I learned how useful surveys or short interviews can be, they helped me understand what users really needed.
            <br/><Link href="https://drive.google.com/file/d/1Ief1WSJ6xegqMct8SAKzZqvX1r4bi_A5/view?usp=drivesdk"><span className='text-white font-bold underline'>Link to my case study</span></Link> || {" "}
            <Link href="https://www.figma.com/community/file/1497635338896022722"><span className='text-white font-bold underline'>Link to Figma</span></Link>
            </h3>
            <Link href="https://drive.google.com/file/d/1Ief1WSJ6xegqMct8SAKzZqvX1r4bi_A5/view?usp=drivesdk">
              <Image src={cleanup} alt='cleanup' className='object-contain md:object-cover lg:object-cover mt-1 md:mt-4 lg:mt-4 h-40 md:h-96 lg:h-96 w-80 md:w-[42rem] lg:w-[52rem]'/>
            </Link>
          </div>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
          <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'><span className='text-white font-bold'>LIV</span> - an app designed to respond when time matters most. <br/>🧠Design Thinking Behind LIV - Speed & Simplicity, Minimal UI, Maximum Clarity <br/> 🛠️Tools Used Figma – From wireframes to polished UI
           <br/> <Link href="https://www.figma.com/community/file/1497634262074714304"><span className='text-white font-bold underline'>Link to Figma</span></Link>
            </h3>
            <Link href="https://dribbble.com/shots/25943568-CleanUp-A-volunteering-app?utm_source=Clipboard_Shot&utm_campaign=shivani_tr&utm_content=CleanUp%20-%20A%20volunteering%20app&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=shivani_tr&utm_content=CleanUp%20-%20A%20volunteering%20app&utm_medium=Social_Share">
              <Image src={liv} alt='liv' className='object-contain md:object-cover lg:object-cover mt-4 h-40 md:h-96 lg:h-96 w-80 md:w-[42rem] lg:w-[52rem]'/>
            </Link>
          </div>
          <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
            <h3 className='w-[20rem] md:w-[36rem] lg:w-[43rem] p-3 text-justify text-white/60 text-lg md:text-xl lg:text-2xl font-regular'><span className='text-white font-bold'>Level Super Mind - Case study </span>this case study explores the issues encountered while using Level supermind and proposes solutions to enhance the user experience 📑👩‍💻<br/>
            <Link href="https://drive.google.com/file/d/19Qclfc3R0LR4mmTP0yTKhHJmeq_8slRG/view"><span className='text-white font-bold underline'>Link to my case study</span></Link>
            </h3>
            <Link href="https://drive.google.com/file/d/19Qclfc3R0LR4mmTP0yTKhHJmeq_8slRG/view">
              <Image src={level} alt='lev' className='object-contain md:object-cover lg:object-cover mt-4 h-40 md:h-96 lg:h-96 w-80 md:w-[42rem] lg:w-[52rem]'/>
            </Link>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default WorkPAge

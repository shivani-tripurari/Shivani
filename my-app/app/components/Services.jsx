import React from 'react'
import Work from './Work.jsx';
import Image from 'next/image';
import redirect2 from '../assets/redirect.svg'
const Services = () => {
  return (
    <div className='mt-40 h-[210vh] md:h-[160vh] fold:h-[200vh] ipad-air:h-[100vh] xl:h-[230vh] bg-custom-image bg-cover bg-center bg-no-repeat'>
        <div className='pt-10 p-7 flex flex-col justify-center items-center'>
            <h1 className='pt-10 text-white/90 font-bold text-5xl p-3'>So, What do I do?</h1>
            <h3 className='text-white/70 font-regular text-xl p-3'>showcasing the unique skills and insights that enhance every collaboration..</h3>
        </div>
        <Work 
            workText='DEV'
            full='Aspiring Full Stack Developer'
            items={[
                "T-shirts & Hoodies",
                "Welcome kits",
                "Keychains",
                "Sipper bottles",
                "Festival kits"
            ]}      
        />
        <Work 
            workText='PS'
            full='Avid Problem Solver'
            items={[
                "Boards",
                "Flexs",
                "Welcome archs",
            ]}      
        />
        <Work 
            workText='DES'
            full='Someone with a knack of Designing'
            items={[
                "Logos",
                "Id cards",
                "Certificates",
                "All types of designing"
            ]}      
        />
        <Work 
            workText='CW'
            full='I Draw, Write and, Cook'
            items={[
                "As an aspiring Full Stack Developer, I bring a unique blend of skills and creativity to the table. Specializing in frontend development and UX design, I am passionate about crafting seamless user experiences that resonate with users. "
            ]}      
        />
       <div className='flex justify-center items-center'>
       <div className='group flex flex-row justify-center items-center gap-x-3 mt-20  mb-1 h-12 w-[90%] md:w-[90%] fold:w-[90%] ipad-air:w-[90%] xl:w-[93%]  border-2 border-[#fefefe] bg-[#fefefe]'>
            <h3 className='transition duration-500 ease-in-out text-[#171717] text-base font-bold group-hover:scale-125'>Know more</h3>
            <Image src={redirect2} className='transition duration-500 ease-in-out group-hover:scale-125 group-hover:translate-x-2' />
        </div>
       </div>
    </div>
  )
}

export default Services

"use client";
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import img1 from '../assets/s1.svg';
import img2 from '../assets/s2.svg';
import img3 from '../assets/s3.svg';
const Infinite = () => {
  return (
    <div className="p-7 border-t-2 border-b-2 border-white mt-40 mb-10 md:mt-12 lg:mt-7">
      <Marquee pauseOnHover={true}>
        <Image src={img1} className="h-7 w-7 object-cover px-10"/>
        <h3 className="text-base text-white px-10">skill-set</h3>
        <Image src={img2} className="h-7 w-7 object-cover px-10"/>
        <h3 className="text-base text-white px-10">skill-set</h3>
        <Image src={img3} className="h-7 w-7 object-cover px-10"/>
        <h3 className="text-base text-white px-10">skill-set</h3>
        <Image src={img1} className="h-7 w-7 object-cover px-10"/>
        <h3 className="text-base text-white px-10">skill-set</h3>
        <Image src={img2} className="h-7 w-7 object-cover px-10"/>
        <h3 className="text-base text-white px-10">skill-set</h3>
        <Image src={img3} className="h-7 w-7 object-cover px-10"/>
        <h3 className="text-base text-white px-10">skill-set</h3>
      </Marquee>
    </div>
  )
}

export default Infinite

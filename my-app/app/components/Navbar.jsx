"use client";
import Hamburger from 'hamburger-react';
import './nav.css';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/shLogo.svg'
import { useState } from 'react';


const Navbar = () => {

  const[open, setOpen]=useState(false);

  return (
    <div className='relative z-50 p-7 flex justify-between items-center'>
        <Link href='/'><Image src={logo} className='h-20 w-24'/></Link>
        <Hamburger
          color="white"
          size={28}
          toggled={open}
          toggle={setOpen}
        />
        {open && 
          <div className='text-xl text-[#0E100F] fixed absolute top-0 right-0 w-screen h-screen p-4 bg-[#ededed]'>
            <header className='flex justify-end items-center p-7 '>
                <Hamburger
                  color="black"
                  size={28}
                  toggled={open}
                  toggle={setOpen}
                />
            </header>
            <main className='flex items-start justify-center h-screen text-2xl font-bold text-black'>
              <ul className='p-7'>
                <Link href='/'><li className='p-7 hover:scale-125'>Home</li></Link>
                <Link href='about'><li className='p-7 hover:scale-125'>About</li></Link>
                <Link href='work'><li className='p-7 hover:scale-125'>Work</li></Link>
                <Link href='/'><li className='p-7 hover:scale-125'>Let's Collaborate</li></Link>
              </ul>
            </main>
          </div>
        }
    </div>
  )
}

export default Navbar



import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import Products from './Component/Products';
import Service from './Component/Service';
import About from './Component/About';
import Contact from './Component/Contact';
import whatsapp from './assets/whatsapp logo.png'
import { X } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import QR from "./assets/qr.jpg";

export default function App() {
  const [modal, setModal] = useState(false)
  return (

    <div className='relative'>
      <Navbar />
      <HeroSection />
      <Products />
      <Service />
      <About />
      <Contact />
      <div>
        <img src={whatsapp} className=' h-15 fixed bottom-10 md:right-10 right-5 cursor-pointer' onClick={() => setModal(true)} />
      </div>
      <div className={`fixed bg-black/60 inset-0 z-10 ${modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-500`}>
        <div className={`h-90  md:w-120 w-[90%] ml-[5%] mt-65 bg-white rounded md:ml-120 md:mt-45 ${modal ? 'scale-100' : 'scale-0'} transition-all duration-500`}>
          <div className='flex items-center justify-between px-5 py-3 border-b'>
            <p className='text-xl text-gray-500 font-semibold'>Continue Us On Whatsapp</p>
            <X size={30} color='black' onClick={() => setModal(false)} className='cursor-pointer' />
          </div>
          <div className='md:ml-42 ml-25 pt-10'>
            <img src={QR} className='h-35' />
          </div>
          <div className='flex gap-3 items-center mt-7 md:ml-37 ml-21'>
            <Phone size={25} color='black' />
            <p className='text-lg text-gray-500'>+91 7304992774</p>
          </div>
          <div className='flex items-center gap-3 md:ml-37 ml-19 mt-3'>
            <Mail size={25} color='black' />
            <p className='text-lg text-gray-500'>sales@purepops.co</p>
          </div>
        </div>
      </div>
    </div>
  )
}

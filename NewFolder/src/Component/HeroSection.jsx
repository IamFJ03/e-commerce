import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/bnner2.jpg";
import banner3 from "../assets/banner3.jpg"
import bg from "../assets/bg.webp";

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  const img = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % img.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-auto md:h-[650px] flex flex-col justify-center overflow-hidden border-b-[0.5px]"
      style={{ backgroundImage: 'linear-gradient(to bottom, #FFFDEA, white)' }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 lg:px-32 py-20">

        <div className="text-center md:text-left max-w-3xl">
        <h1  className="font-bold text-3xl  md:text-6xl text-green-900  mb-4 drop-shadow-lg"  style={{ fontFamily:" 'Times New Roman', Times, Georgia, serif ",lineHeight: '1.2'}} >
            “Premium Makhana Crafted for the World — From India's Farms to Global Markets.”
          </h1>
          <p className="text-gray-800 text-base sm:text-lg">
            
          </p>
        </div>

        <div className='w-160 h-120 md:mt-10 overflow-hidden md:ml-0 ml-40'>
          <div className='flex transition-transformation duration-500 ease-in-out ' style={{ transform: `translateX(-${idx * 100}%)` }} >
            <div className='flex'> {img.map(i => (
              <div className='w-full shrink-0 p-2'>
                <img src={i} className='md:w-140 w-80 object-cover ml-20 md:ml-0 md:h-110 h-80 rounded-2xl' />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

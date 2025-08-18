// import React from 'react'
// import { assets } from '../assets/frontend_assets/assets'
// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400 '>
//         {/* Hero Left side */}
//         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//         <div className='text-[#414141]'>
//         <div className='flex items-center gap-2'>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//             <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//         </div>
//         <h1 className='  prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed '>Latest Arrivals</h1>
//         <div className='flex items-center gap-2'>
//             <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>

//             </div>
//           </div>
//         </div>
//         {/* Hero Right side */}
//         <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero
import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full mt-20 min-h-[70vh] overflow-hidden">
      {/* 🔹 Background Video Layer */}
      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={assets.video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional dark overlay (no blur) */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 🔹 Hero Content Wrapper */}
      <div className="relative z-[1] flex flex-col sm:flex-row items-center border border-gray-400 bg-white/30">
        {/* 🔸 Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141] p-4 sm:p-0">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2 group cursor-pointer transition">
              <p className="font-semibold text-sm md:text-base group-hover:text-blue-600 transition duration-300">
                SHOP NOW
              </p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141] group-hover:bg-blue-600 transition duration-300"></p>
            </div>
          </div>
        </div>

        {/* 🔸 Right Side Image */}
        {/* <div className="w-full sm:w-1/2 flex justify-center items-center"></div> */}
      </div>
    </div>
  );
};

export default Hero;

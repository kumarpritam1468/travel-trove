import React, { useRef } from 'react'
import { TfiArrowRight } from "react-icons/tfi";
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <section className='hero h-[100svh] flex flex-col gap-10 items-center justify-center pt-12 bg-black/20 overflow-hidden' ref={ref}>
      <motion.img src="/hero-bg.jpg" alt="" className=' w-screen h-[100svh] object-cover absolute top-0 -z-10' style={{scale:scaleMotion}} />
      <div>
        <h1 className=' text-9xl font-extrabold text-white text-center '>
          TRAVEL
        </h1>
        <h2 className=' text-8xl font-bold outline text-transparent text-center'>
          GIVES YOU PEACE
        </h2>
      </div>

      <div>
        <button className=' w-60 py-2 border border-white backdrop-blur rounded-full flex gap-3 items-center justify-center hover:gap-16 transition-all duration-300 ease-in-out' >
          <h3 className=' text-white font-medium text-lg'>Discover All</h3>
          <div className=' text-xl text-black bg-white rounded-full p-2'>
            <TfiArrowRight />
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero
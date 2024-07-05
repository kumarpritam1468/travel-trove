import React, { useRef } from 'react'
import { placesDummy } from '../data/dummy';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoMdHeart } from "react-icons/io";
import Tilt from "react-parallax-tilt"

const Discover = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
        <section className='discover h-[100svh] w-screen max-lg:h-fit max-lg:pb-12 flex flex-col gap-10 pt-28 px-16 relative bg-black/30' ref={ref}>
            <motion.img src='/ocean.jpg' alt='Ocean' className=' w-screen max-w-screen  h-[100svh] max-lg:h-full object-cover absolute top-0 left-0 -z-10 overflow-hidden' style={{ scale: scaleMotion }} />
            <h1 className='outline2 text-5xl font-bold text-white'>Our Top Picks</h1>

            <div className=' flex flex-wrap max-md:flex-col gap-6'>
                {placesDummy.map((place, index) => (
                    <Tilt key={index} className=' flex-1 h-fit text-white p-3 backdrop-blur rounded-2xl bg-white/15 flex flex-col gap-4'>
                        <div className=' h-48 w-full rounded-2xl overflow-hidden relative'>
                            <img src={place.imgUrl} alt={place.name} className=' object-cover hover:scale-110 transition-all duration-300 ease-in-out ' />
                            <div className={` text-white text-[1.7rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`}><IoMdHeart/></div>
                        </div>

                        <div>
                            <h2 className=' text-2xl font-bold outline2'>
                                {place.name}
                            </h2>
                            <p className=' text-sm leading-4 mt-1 font-normal'>
                                {place.desc}
                            </p>
                        </div>
                        <div className=' flex items-center justify-center gap-4 px-6 mb-2'>
                            <button className=' font-semibold px-6 py-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out'>Book Now</button>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}

export default Discover
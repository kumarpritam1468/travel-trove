import React, { useRef } from 'react'
import { placesDummy } from '../data/dummy'
import { IoMdHeart } from "react-icons/io";
import Tilt from 'react-parallax-tilt';
import { useScroll, useTransform, motion } from 'framer-motion';

const TopPlaces = () => {
    // const ref = useRef();

    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start start", "end start"]
    // });

    // const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
        <section className=' h-[300svh] w-screen overflow-x-hidden'>
            {placesDummy.map((place, index) => {
                const ref = useRef();

                const { scrollYProgress } = useScroll({
                    target: ref,
                    offset: ["start start", "end start"]
                });

                const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 2]);

                return (

                    <section className=' h-[100svh] overflow-hidden relative bg-black/40 flex items-center justify-center' key={index} ref={ref}>
                        <motion.img src={`/sea${index}.jpg`} alt="Sea" className='absolute h-[100svh] w-screen object-cover -z-10' style={{ scale: scaleMotion }} />

                        <div className={` w-full px-20 flex ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col gap-8 items-center max-lg:justify-center backdrop-blur-sm h-full`}>
                            <Tilt className='flex-1 max-lg:flex-none overflow-hidden h-[22rem] w-[40rem] max-md:w-[30rem] max-md:h-[18rem] rounded-3xl'>
                                <img src={place.imgUrl} alt={place.name} />
                                <div className={` text-white text-[2rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`}><IoMdHeart /></div>
                            </Tilt>

                            <div className='flex-1 max-lg:flex-none text-white flex flex-col gap-8'>
                                <div>
                                    <h2 className=' text-5xl font-bold outline2 text-center'>
                                        {place.name}
                                    </h2>
                                    <p className=' text-lg leading-4 mt-6 font-normal'>
                                        {place.desc}
                                    </p>
                                </div>
                                <div className=' flex items-center justify-center gap-4 px-6 mb-2'>
                                    <button className=' font-semibold px-6 py-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </section>
    )
}

export default TopPlaces
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
                                    <button className=' font-semibold px-6 py-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out' onClick={()=>document.getElementById('my_modal').showModal()}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
            <dialog id="my_modal" className="modal">
                <div className="modal-box flex flex-col gap-6 items-center justify-center bg-white/10 backdrop-blur-3xl">
                    <h2 className="font-bold text-lg text-white">Confirm Booking</h2>
                    <form className='flex flex-col gap-2'>
                        <input type="date" name="date" placeholder='From?' className=' input input-bordered w-full' />
                        <input type="text" placeholder='Number of Days' className=' input input-bordered w-full' />
                        <input type="number" placeholder='Number of Persons' className=' input input-bordered w-full' />
                        <h3 className=' text-center text-white text-lg font-semibold'>Total Cost : $6,000</h3>
                        <p className=' text-center text-gray-300'>Note : The price written is for per person/day and all types of costs starting from travel from Mumbai is included, you will be contacted on your registered phone number to plan your trip further</p>
                        <button className=' btn btn-primary text-white'>Confirm</button>
                        <div className="modal-action w-full mt-0">
                            <form method="dialog" className=' w-full'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-warning w-full">Cancel</button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    )
}

export default TopPlaces
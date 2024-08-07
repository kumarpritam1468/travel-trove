import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoMdHeart } from "react-icons/io";
import Tilt from "react-parallax-tilt"
import { useQuery } from '@tanstack/react-query';
import likePost from '../hooks/useLikePost';
import useBook from '../hooks/useBook';

const Discover = () => {
    const ref = useRef();

    const { data: places } = useQuery({ queryKey: ['places'] });
    const { data: authUser } = useQuery({ queryKey: ['authUser'] });
    const { like, isLiking } = likePost();
    const { book, isBooking } = useBook();

    const filteredPlaces = places?.slice(0, Math.min(3, places.length));

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 2]);

    const [input, setInput] = useState({
        from: '',
        totalDays: '',
        totalPeople: '',
        price: ''
    });

    return (
        <section className='discover h-fit w-screen max-lg:h-fit max-lg:pb-12 flex flex-col gap-10 pt-24 pb-6 px-16 relative bg-black/30' ref={ref}>
            <motion.img src='/ocean.jpg' alt='Ocean' className=' w-screen max-w-screen  h-[100svh] max-lg:h-full object-cover absolute top-0 left-0 -z-10 overflow-hidden' style={{ scale: scaleMotion }} />
            <h1 className='outline2 text-5xl font-bold text-white'>Our Top Picks</h1>

            <div className=' flex flex-wrap max-md:flex-col gap-6'>
                {filteredPlaces?.map((place, index) => {
                    const placeId = place._id;
                    const alreadyLiked = place.likedBy.includes(authUser?._id);
                    return (
                        <>
                            <Tilt key={index} className=' flex-1 h-fit text-white p-3 backdrop-blur rounded-2xl bg-white/15 flex flex-col gap-4'>
                                <div className=' h-48 w-full rounded-2xl overflow-hidden relative'>
                                    <img src={place?.imgUrl} alt={place?.name} className=' object-cover hover:scale-110 transition-all duration-300 ease-in-out ' />
                                    <div className={`${alreadyLiked ? 'text-red-600' : 'text-white'} text-[1.7rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`} onClick={() => like(place._id)}>
                                        {isLiking ? <div className=' loading loading-spinner'></div> : <IoMdHeart />}
                                    </div>
                                </div>

                                <div>
                                    <div className=' flex items-center gap-2'>
                                        <h2 className=' text-2xl font-bold outline2'>
                                            {place?.name}
                                        </h2>
                                        <span>({place.city})</span>
                                    </div>
                                    <span>${place.budget}/day per person</span>
                                    <p className=' text-sm leading-4 mt-1 font-normal text-gray-300'>
                                        {place?.desc}
                                    </p>
                                </div>
                                <div className=' flex items-center justify-center gap-4 px-6 mb-2'>
                                    <button className=' font-semibold px-6 py-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out' onClick={() => document.getElementById(`my_modal${index}`).showModal()}>Book Now</button>
                                </div>
                            </Tilt>
                            <dialog id={`my_modal${index}`} className="modal">
                                <div className="modal-box flex flex-col gap-6 items-center justify-center bg-white/10 backdrop-blur-3xl">
                                    <h2 className="font-bold text-lg text-white">Confirm Booking</h2>
                                    <form className='flex flex-col gap-2' >
                                        <div className=' w-full'>
                                            <label htmlFor="date" className=' ml-2'>From?</label>
                                            <input type="date" name="date" placeholder='DD-MM-YYYY' id='date' className=' input input-bordered w-full' value={input.from} onChange={(e) => setInput({ ...input, from: e.target.value })} />
                                        </div>
                                        <input type="number" placeholder='Number of Days' className=' input input-bordered w-full' value={input.totalDays} onChange={(e) => setInput({ ...input, totalDays: e.target.value, price: place.budget * input.totalPeople * input.totalDays })} />
                                        <input type="number" placeholder='Number of Persons' className=' input input-bordered w-full' value={input.totalPeople} onChange={(e) => setInput({ ...input, totalPeople: e.target.value, price: place.budget * input.totalPeople * input.totalDays })} />
                                        <h3 className=' text-center text-white text-lg font-semibold'>Total Cost : ${place.budget * input.totalPeople * input.totalDays}</h3>
                                        <p className=' text-center text-gray-300'>Note : The price is calculated as per persons, days and all types of costs starting from travel from Mumbai is included, you will be contacted on your registered phone number to plan your trip further</p>
                                        <button
                                            className=' btn btn-primary text-white'
                                            type='submit'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                input.price = place.budget * input.totalPeople * input.totalDays;
                                                book({ placeId, input });
                                                setInput({
                                                    from: '',
                                                    totalDays: '',
                                                    totalPeople: '',
                                                    price: ''
                                                })
                                                document.getElementById(`my_modal${index}`).close()
                                            }}
                                        >
                                            {isBooking ? <div className=' loading loading-spinner'></div> : 'Confirm'}
                                        </button>
                                        <div className="modal-action w-full mt-0">
                                            <form method="dialog" className=' w-full'>
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-warning w-full">Cancel</button>
                                            </form>
                                        </div>
                                    </form>
                                </div>
                            </dialog>
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Discover
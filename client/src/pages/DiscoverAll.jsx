import React, { useState } from 'react'
// import { placesDummy } from '../data/dummy'
import Tilt from 'react-parallax-tilt';
import { IoMdHeart } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';

const DiscoverAll = () => {
    const { data: places, isLoading } = useQuery({queryKey: ['places']});

    const [input, setInput] = useState({
        from: '',
        totalDays: '',
        totalPeople: '',
        price: ''
    });

    const handleInput = (e) => {
        e.preventDefault();
    }
    return (
        <section className='allplaces min-h-screen pt-24 pb-6'>
            <div className=" px-20 flex flex-col min-h-full h-fit gap-6 ">
                <h1 className=' text-white text-5xl font-semibold'>All Our Packages</h1>
                {isLoading ? <div className=' loading loading-spinner'></div> :
                    <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 gap-y-12 py-6 h-fit'>
                        {places?.map((place, index) => (
                            <Tilt key={index} className=' h-fit text-white p-3 backdrop-blur rounded-2xl bg-white/15 flex flex-col gap-4'>
                                <div className=' h-48 w-full rounded-2xl overflow-hidden relative'>
                                    <img src={place?.imgUrl} alt={place?.name} className=' object-cover hover:scale-110 transition-all duration-300 ease-in-out ' />
                                    <div className={` text-white text-[1.7rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`}><IoMdHeart /></div>
                                </div>

                                <div>
                                    <h2 className=' text-2xl font-bold outline2'>
                                        {place?.name}
                                    </h2>
                                    <p className=' text-sm leading-4 mt-1 font-normal'>
                                        {place?.desc}
                                    </p>
                                </div>
                                <div className=' flex items-center justify-center gap-4 px-6 mb-2'>
                                    <button className=' font-semibold px-6 py-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out' onClick={() => document.getElementById('my_modal').showModal()}>Book Now</button>
                                </div>
                            </Tilt>
                        ))}
                        
                        <dialog id="my_modal" className="modal">
                            <div className="modal-box flex flex-col gap-6 items-center justify-center bg-white/10 backdrop-blur-3xl">
                                <h2 className="font-bold text-lg text-white">Confirm Booking</h2>
                                <form className='flex flex-col gap-2' onSubmit={handleInput}>
                                    <div className=' w-full'>
                                        <label htmlFor="date" className=' ml-2'>From?</label>
                                        <input type="date" name="date" placeholder='DD-MM-YYYY' id='date' className=' input input-bordered w-full' />
                                    </div>
                                    <input type="number" placeholder='Number of Days' className=' input input-bordered w-full' />
                                    <input type="number" placeholder='Number of Persons' className=' input input-bordered w-full' />
                                    <h3 className=' text-center text-white text-lg font-semibold'>Total Cost : $6,000</h3>
                                    <p className=' text-center text-gray-300'>Note : The price written is for per person/day and all types of costs starting from travel from Mumbai is included, you will be contacted on your registered phone number to plan your trip further</p>
                                    <button className=' btn btn-primary text-white' type='submit'>Confirm</button>
                                    <div className="modal-action w-full mt-0">
                                        <form method="dialog" className=' w-full'>
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-warning w-full">Cancel</button>
                                        </form>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                }
            </div>
        </section>
    )
}

export default DiscoverAll
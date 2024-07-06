import React from 'react'
import { placesDummy } from '../data/dummy'
import Tilt from 'react-parallax-tilt';
import { IoMdHeart } from "react-icons/io";

const DiscoverAll = () => {
    return (
        <section className='allplaces pt-24 pb-6'>
            <div className=" px-20 flex flex-col min-h-full h-fit gap-6 ">
                <h1 className=' text-white text-5xl font-semibold'>All Our Packages</h1>
                <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 gap-y-12 py-6 h-fit'>
                    {placesDummy.map((place, index) => (
                        <Tilt key={index} className=' h-fit text-white p-3 backdrop-blur rounded-2xl bg-white/15 flex flex-col gap-4'>
                            <div className=' h-48 w-full rounded-2xl overflow-hidden relative'>
                                <img src={place.imgUrl} alt={place.name} className=' object-cover hover:scale-110 transition-all duration-300 ease-in-out ' />
                                <div className={` text-white text-[1.7rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`}><IoMdHeart /></div>
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
                    {placesDummy.map((place, index) => (
                        <Tilt key={index} className=' h-fit text-white p-3 backdrop-blur rounded-2xl bg-white/15 flex flex-col gap-4'>
                            <div className=' h-48 w-full rounded-2xl overflow-hidden relative'>
                                <img src={place.imgUrl} alt={place.name} className=' object-cover hover:scale-110 transition-all duration-300 ease-in-out ' />
                                <div className={` text-white text-[1.7rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`}><IoMdHeart /></div>
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
                    {placesDummy.map((place, index) => (
                        <Tilt key={index} className=' h-fit text-white p-3 backdrop-blur rounded-2xl bg-white/15 flex flex-col gap-4'>
                            <div className=' h-48 w-full rounded-2xl overflow-hidden relative'>
                                <img src={place.imgUrl} alt={place.name} className=' object-cover hover:scale-110 transition-all duration-300 ease-in-out ' />
                                <div className={` text-white text-[1.7rem] absolute left-5 top-5 cursor-pointer hover:text-red-200 transition-all duration-300 ease-in-out`}><IoMdHeart /></div>
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
            </div>
        </section>
    )
}

export default DiscoverAll
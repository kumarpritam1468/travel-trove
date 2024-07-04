import React from 'react'
import {placesDummy} from '../data/dummy';

const Discover = () => {
  return (
    <section className='discover h-[100svh] flex flex-col gap-10 pt-28 px-16'>
        <h1 className=' text-5xl font-medium text-white'>Our Top Picks</h1>

        <div className=' flex gap-6'>
            {placesDummy.map((place, index) => (
                <div key={index} className=' flex-1 h-fit text-white p-4 backdrop-blur rounded-2xl bg-white/15'>
                    <div className=' h-48 w-full rounded-2xl overflow-hidden'>
                        <img src={place.imgUrl} alt={place.name} className=' object-cover' />
                    </div>

                    <h2>
                        {place.name}
                    </h2>
                    <p className=' text-xs'>
                        {place.desc}
                    </p>
                    <div>
                        <div>Like</div>
                        <div>Book Now</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Discover
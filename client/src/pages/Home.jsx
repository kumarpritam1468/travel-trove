import React from 'react'
import Navbar from '../components/Navbar'
import { TfiArrowRight } from "react-icons/tfi";

const Home = () => {
  return (
    <main className='hero h-screen flex flex-col'>
      <Navbar />

      <section className=' h-[100svh] flex flex-col gap-10 items-center justify-center pt-12'>
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
    </main>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import Discover from '../components/Discover'
import TopPlaces from '../components/TopPlaces'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Discover />
      <TopPlaces/>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
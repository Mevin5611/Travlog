import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Explore/>
    </>
  )
}

export default Home

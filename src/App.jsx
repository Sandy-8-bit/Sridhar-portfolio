import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'

import Recent from './Components/Recent'
import Hero from './Components/Hero'
import { InfiniteMovingCards } from './Components/ui/infinite-moving-cards'
import { InfiniteMovingCardsDemo } from './Components/InfiniteMovingCardsDemo'
import { WorldMapDemo } from './Components/ui/WorldMapDemo'
import { ThreeDCardDemo } from './Components/ui/ThreeDCardDemo'
import { Footer } from './Components/Footer'



function App() {


  return (
    <>

       
    <Hero/>
    <div className='flex  flex-col w-full px-20 gap-10 md:px-10 '>
      

      <About/>
      <ThreeDCardDemo/>
     <Recent/>
     <WorldMapDemo/>
      <InfiniteMovingCardsDemo/>
      <Footer/>
      
    </div>
    </>
  )
}

export default App

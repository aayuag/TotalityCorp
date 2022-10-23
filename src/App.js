import React from 'react'
import FirstCard from './Components/FirstCard'
import Footer from './Components/Footer'
import FourthCard from './Components/FourthCard'

import Navbar from './Components/Navbar'
import SecondCard from './Components/SecondCard'
import ThirdCard from './Components/ThirdCard'

const App = () => {
  return (
    <>
    <Navbar/>
    
    <FirstCard/>
    <SecondCard/>
    <ThirdCard/>
    <FourthCard/>
    <Footer/>
    </>
  )
}

export default App
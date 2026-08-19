import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
const Section1 = ({ cardData }) => {
  return (
    <div className='bg-blue-100 h-full  ' >
        <Navbar/>
        <Hero cardData={cardData} />
    </div>
  )
}

export default Section1
import React from 'react'
import Left from './Left'
import Right from './Right'
const Hero = ({cardData}) => {
  return (
    <div className='flex gap-20 px-16'>
      <Left/>
      <Right cardData={cardData} />
    </div>
  )
}

export default Hero
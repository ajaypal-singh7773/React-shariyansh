import React from 'react'
import { useState } from 'react';

const App = () => {
   const [name, setName] = useState('')
  const solve=(e)=>{
    e.preventDefault();
   
    console.log(name);
  }
  return (
    <div>
      <form onSubmit={(e)=>{
           solve(e)
      }} >
        <input value ={name}
               onChange={(e)=>{
                  setName(e.target.value)
               }}
         type="text" placeholder='Enter your Bodycount' />

         <button type='submit'>sumit</button>
      </form>

    </div>
  )
}

export default App
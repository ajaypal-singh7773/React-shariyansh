import React from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState([10,20])
  const change =()=>{
    
  }
  return (
    <div >
      <h1>{first}</h1>
      <button onClick={change}>Clime me </button>
    </div>

  )
}

export default App
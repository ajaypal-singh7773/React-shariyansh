import React, { useState } from 'react'

const App = () => {
 const [num, setnum] = useState(0)
 function incre(){
  setnum (num+1);
 }
 function decre(){
  setnum (num-1);
 }
  return (
    <div >
      <div >{num}</div>
      <button onClick={incre} className='gap-10 px10px'>Increse</button>
       <button onClick={decre} >
        Decrese
       </button>
    </div>
  )
}

export default App

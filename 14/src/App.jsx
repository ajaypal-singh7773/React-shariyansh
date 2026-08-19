import React, { useEffect, useState } from 'react'

const App = () => {
    const [a, seta] = useState(0)
    const [b, setb] = useState(0)
    useEffect(() => {
      console.log("useEffect is runnnig...")
       
    },[a])
    function incA(){
      console.log("A ki value badh rhi hai delh lavde");
      
    }
    function incB(){
      console.log("B ki value badh rhi hai delh lavde");
      
    }
  return (

    <div>
          <div>THe vale of a is {a}</div>
          <div>THe vale of b is {b}</div>
         <div className='div1'>
          <button onClick={()=>{
            seta(a+1)
            incA();
          }}>Increse the value of A</button>
      <button onClick={()=>{
             setb(b+1)
            incB();
          }}> Increse the value of B</button>
      </div>
      
    </div>
  )
}

export default App
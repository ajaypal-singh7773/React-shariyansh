import React from 'react'

const App = () => {
  const solve=(elem)=>{
   console.log("speed is", elem.deltaY);
  }
  return (
    <div onWheel={(elem)=>{
       solve(elem)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'>hi</div>
    </div>
  )
}

export default App
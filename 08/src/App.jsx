import React from 'react'

const App = () => {
  const solve=(e)=>{
    //e.preventDefault();
    console.log("Form is sumitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
           solve(e)
      }} >
        <input type="text" placeholder='Enter your Bodycount' />
         <button type='submit'>sumit</button>
      </form>

    </div>
  )
}

export default App
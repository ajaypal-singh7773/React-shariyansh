import React, { useState } from 'react'

const App = () => {
  const [head, sethead] = useState('')
  const [text, settext] = useState('')
  const Submitstop=(e)=>{
    e.preventDefault()
    console.log("form Sumiited")
  }
  return (
    <div className='lg-flex justify-around'  >
      <form className='flex flex-col items-start p-4 m-4 gap-5'>

        {/* Head */}
        <h1>Add Notes</h1>
        <input value={head} className='border border-black'
         type="text"
          placeholder='Enter Notes heading' />

          {/* Detail */}
        <textarea value={text} onChange={} className='border border-l-black h-full' placeholder='Write detail'></textarea>
      <button onClick={(e)=>{
        Submitstop(e)
      }} className='bg-amber-100 rounded-2xl'>Click</button>
      </form>

      {/* saved Entity */}

      <div className='p-4 m-4 relative'>
        <h1 >Recent Notes</h1>
          <div lg-flex>
            <div className='h-full w-80 bg-amber-300 text-white'>

            </div>
          </div>
      </div>
    </div>
  )
}

export default App

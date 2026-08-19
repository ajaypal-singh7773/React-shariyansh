import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)

  async function dataReq() {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=3`)
    console.log(responce)
    setuserData(responce.data);
  }

  useEffect(() => {
    dataReq()
  }, [index])

  let printUserData = 'LOADING......... '

  if (userData.length > 0) {
    printUserData = userData.map(function (e, key) {
      return (
        <div className='w-[300px] h-[300px] border rounded-xl p-1'>
          <a href={e.url}>
            <img
              src={e.download_url}
              alt=""
              className='w-full h-full object-contain rounded-lg'
            />
          </a>

          <h2>{e.author}</h2>
        </div>
      )
    })
  }

  return (
    <div>
      <h1 className='fixed text-7xl'>{index}</h1>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex gap-10 px-5 justify-center items-center'>
        <button
          onClick={() => {
            if(index>1){
              setuserData([])
              setindex(index - 1)
            }
          }}
          className='bg-amber-300 text-black py-2 px-5 gap-6 active:scale-95 rounded'
        >
          Prev
        </button>

        <button
          onClick={() => {
            setuserData([])
            setindex(index + 1)
          }}
          className='bg-amber-300 text-black py-2 px-5 gap-6 active:scale-95 rounded'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
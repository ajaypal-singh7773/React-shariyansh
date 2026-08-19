import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [Data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )

    setData(response.data)
    console.log(response.data)
  }

  return (
    <div>
      App

      <button onClick={getData}>
        Get The data from api
      </button>

      <div>
        {Data.map(function (item) {
          return <p>key={item.id} {item.title}</p>
        })}
      </div>
    </div>
  )
}

export default App
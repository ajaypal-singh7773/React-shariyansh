import React from 'react'

const card = (props) => {
  return (
     <div>
      <h2 id>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Sex: {props.sex}</p>
     </div>
  )
}

export default card
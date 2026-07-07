import React from 'react'
import { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  const increaseNum =() =>{
    setNum(Num+1);
  }

   const decreaseNum =() =>{
    setNum(Num-1);
  }
   const jum5Num =() =>{
    setNum(Num+5);
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jum5Num}>Increase by 5</button>
    </div>
  )
}

export default App
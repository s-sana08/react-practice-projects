import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Cards } from './Component/Cards';

const App = () => {

  const [userData, setUserData] = useState([])

   const [index, setIndex] = useState(1)

  let printUaserData = <h3 className='text-gray-300 font-bold text-xs -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2'>Loading...</h3>
  
  if (userData.length > 0) {

    printUaserData = userData.map(function (elem, idx) {

      return <div key={idx}>
       <Cards elem={elem}/>
      </div>
    })
  }

  const getData = async () => {

   

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)
    console.log(response.data);
  }

useEffect(function(){
    getData()
},[index])


  return (
    <div className='h-screen bg-black text-white p-4 overflow-auto'>
      {/* <button onClick={getData} className='mb-4 outline-0 active:scale-95 bg-green-600 py-2 px-5 rounded '> Get Data</button> */}

      <div className='flex h-[82%] flex-wrap gap-4 p-4'>
        {/* <h1 className='fixed'>{index}</h1> */}
        {printUaserData}
      </div>

      <div className='flex justify-center  gap-6 items-center p-4'>
        <button style={{opacity:index == 1?0.5 : 1}} className='bg-amber-400 text-sm cursor-pointer  active:scale-95 text-black rounded px-4 py-2 font-bold'
         onClick={()=>{
           
            if (index>1) {
              setIndex(index-1)
              setUserData([])
            }
            
          }}
        >Prev</button>
        <h2>Page {index}</h2>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold'
         onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }}
        >Next</button>
      </div>
    </div>
  )
}

export default App
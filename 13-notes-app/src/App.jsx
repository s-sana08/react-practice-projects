import React, { useState } from 'react'
import { X } from "lucide-react";
const App = () => {


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])




  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote=(idx)=>{
    const dNote=[...task]
    dNote.splice(idx,1)
    setTask(dNote)
    
  }

  return (
    <div className='bg-black h-screen lg:flex text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start p-10 gap-4 flex-col'>

        <h1 className='font-bold text-4xl'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium py-2 w-full border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder='Write Details here'
          className='px-5 w-full font-medium py-2 h-32 outline-none border-2 rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='px-5 w-full font-medium active:scale-95 py-2 outline-none border-2 bg-amber-50 text-black'>
          Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='font-bold text-4xl'>Recent Notes</h1>

        <div className='flex gap-5 h-[90%] items-start justify-start flex-wrap mt-5 overflow-auto'>
          {/* <div className='h-52 w-40 rounded-2xl bg-white'></div> */}
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl py-9 px-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              
             <div >
               <h3 className=' leading-tight font-bold text-xl'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-xs font-semi text-gray-400'>{elem.details}</p>
             </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full p-3 cursor-pointer active:scale-95 bg-red-500 text-xs rounded font-bold text-white'>delete</button>
            </div>
          })}
         
        </div>
      </div>

    </div>
  )
}

export default App
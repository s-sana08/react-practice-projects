import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <>
      <div className='parent'>

        <Cards user='Sana' age={19} img='https://images.unsplash.com/photo-1776389554587-4594c9f5aacd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Cards user='Kat' age={27} img='https://images.unsplash.com/photo-1778330520628-c52751f86b0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Cards user='Munny' age={7} img='https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

      </div>
    </>
  )
}

export default App
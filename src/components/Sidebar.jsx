import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div className='flex-none w-1/4 h-screen bg-black'>
        <Navbar />
        <Chats/>
    </div>
  )
}

export default Sidebar
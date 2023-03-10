import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'
const Sidebar = () => {
  return (
    <div className='flex-none w-1/4 h-screen bg-black'>
        <Navbar />
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar
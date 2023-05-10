import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'
const Sidebar = (props) => {
  
  console.log("TEST - " + JSON.stringify(props))

  return (
    <div className='flex-none w-1/4 h-screen bg-black'>
        <Navbar />  
        <Search onToggleSearch={props.onToggleSearch}/>
        <Chats/>
    </div>
  )
}

export default Sidebar
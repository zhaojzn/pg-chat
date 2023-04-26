import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import SearchBox from '../components/SearchBox'
const Home = () => {
  return (
    <div className="h-screen bg-bg flex ">
        <Sidebar/>
        <Chat/>
    </div>
  )
}

export default Home
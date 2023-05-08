import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import SearchBox from '../components/SearchBox'
import { useState } from 'react'
const Home = () => {


  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  console.log("PROPS FROM HOME - " + JSON.stringify(isSearchActive))


  if(!isSearchActive)
  {
    return (
      <div className="h-screen bg-bg flex opacity-100">
            <Sidebar onToggleSearch={handleSearchToggle}/>  
            <Chat/>
      </div>
    )
  }
  else{
    return (
      <div className="h-screen bg-bg flex opacity-25">
            <Sidebar onToggleSearch={handleSearchToggle}/>  
            <Chat/>
      </div>
    )
  }
}

export default Home
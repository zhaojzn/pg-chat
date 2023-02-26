import React from 'react'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='flex-2 w-screen h-screen flex-col flex'>
        <div className="h-28 bg-gray-400 w-100 items-center flex justify-between p-10">
          <span> Jason Zhao </span>
          <div className="flex">
            <img src={Add} alt="profile" className="w-12 h-12 rounded-full"></img>
            <img src={More} alt="profile" className="w-12 h-12 rounded-full"></img>
          </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat
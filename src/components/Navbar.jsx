import React from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
const Navbar = () => {
  return (
    <div className='h-28 bg-white flex justify-between items-center'>
        <span className='pl-5 text-bg font-bold text-3xl'>Test Chat</span>
        <div className='flex gap-5 pr-5 items-center'>
            <span className='text-gray-500 font-medium'>Jason Zhao</span>
            <button onClick={()=>signOut(auth)} className='bg-bg p-3 text-white rounded-md hover:scale-110 duration-300'>Logout</button>
        </div>

    </div>
  )
}

export default Navbar 
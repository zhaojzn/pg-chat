import React, { useContext, useState, useEffect } from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='h-28 bg-[#FDF9F8] flex justify-between items-center'>
        <span className='pl-5 text-bg font-bold text-3xl'>PGSS Chat</span>
        <div className='flex gap-5 pr-5 items-center'>
            <span className='text-gray-500 font-medium'>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)} className='bg-bg p-3 text-white rounded-md hover:scale-110 duration-300'>Logout</button>
        </div>

    </div>
  )
}

export default Navbar 
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-28 bg-white flex justify-between items-center'>
        <span className='pl-5 text-bg font-bold text-3xl'>Alpha Chat</span>
        <div className='flex gap-10 pr-5'>
            <span>Jason Zhao</span>
            <button className='bg-bg'>Logout</button>
        </div>

    </div>
  )
}

export default Navbar
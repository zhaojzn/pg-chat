import React from 'react'


const Chats = () => {
  return (
    <div>
        <div className='p-10 flex items-center gap-10 bg-gray-500 cursor-pointer hover:bg-gray-400'>
            <img src='https://cdn-icons-png.flaticon.com/512/3884/3884851.png' className='w-12 h-12 rounded-full'></img>
            <div>
                <span className='text-lg font-medium text-white '>Jason Zhao</span>
                <p className='text-base text-gray-200'>Test</p>
            </div>
        </div>

    </div>
  )
}

export default Chats
import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="">
            <input type="text" placeholder="Search" className="p-10 bg-transparent text-white outline-0 w-100" />
        </div>
        <div className='p-10 flex items-center gap-10 bg-gray-500 cursor-pointer border-b-8 border-b-bg'>
            <img src='https://cdn-icons-png.flaticon.com/512/3884/3884851.png' className='w-12 h-12 rounded-full'></img>
            <div>
                <span className='text-lg font-medium text-white '>Jason Zhao</span>
            </div>
        </div>
    </div>
  )
}

export default Search
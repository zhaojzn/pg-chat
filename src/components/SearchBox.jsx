import React from 'react'

const SearchBox = () => {
  return (
    <div className='bg-black items-center justify-center w-1/2 h-3/4 absolute top-[10%] right-1/4 opacity-100'>
        <div className='w-full h-[10%] bg-bg items-center flex justify-center'>
            <input type="text" 
            placeholder="Search username" 
            className="bg-transparent 
            text-white outline-0 w-100 text-center" 
            />
        </div>
    </div>
  )
}

export default SearchBox
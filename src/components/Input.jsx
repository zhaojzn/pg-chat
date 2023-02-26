import React from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'
const Input = () => {
  return (
    <div className='flex grow bg-gray-400 p-10 items-center text-center justify-between'>
        <input type="text" className="w-3/4 h-12 rounded-full bg-gray-300 p-5"></input>
        <div className='flex items-center gap-5'>
          <img src={Attach} alt="" className='h-8 cursor-pointer'/>
          <input type="file" style={{display:"none"}} id="file"></input>
          <label htmlFor="file">
            <img src={Img} alt="" className='h-8 cursor-pointer'/>
          </label>
          <button className='p-[10px] pr-[20px] pl-[20px] text-white bg-gray-500 rounded-[25px]'>Send</button>
        </div>
    </div>
  )
}

export default Input
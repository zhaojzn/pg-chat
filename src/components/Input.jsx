
import Img from '../img/img.png'
import Attach from '../img/attach.png'
import React, { useContext, useState } from 'react'
const Input = () => {

  const [message,setMessage] = useState("");

  const handleSend = () =>{
      console.log(message);
  }

  const handleKeyDown = (e) => {
    if(e.key == 'Enter'){
      handleSend()
    }
  }

    
  return (
    <div className='flex grow bg-gray-400 p-10 items-center text-center justify-between'>
        <input onKeyDown={handleKeyDown} onChange={e=>setMessage(e.target.value)} type="text" className="w-3/4 h-12 rounded-full bg-gray-300 p-5"></input>
        <div className='flex items-center gap-5'>
          <img src={Attach} alt="" className='h-8 cursor-pointer'/>
          <input type="file" style={{display:"none"}} id="file"></input>
          <label htmlFor="file">
            <img src={Img} alt="" className='h-8 cursor-pointer'/>
          </label>
          <button onClick={handleSend}className='p-[10px] pr-[20px] pl-[20px] text-white bg-gray-500 rounded-[25px]'></button>
        </div>
    </div>
  )
}

export default Input
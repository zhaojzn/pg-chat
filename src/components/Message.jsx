import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

 const {currentUser} = userContext(AuthContext)
 const {data} = userContext(ChatContext)


  console.log(message)
  return (
    
    // <div className="bg-gray-300 flex gap-[20px]">
    //     <div className="flex flex-col mb-[20px]">
    //       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className='w-[40px] h-[40px] rounded-full object-cover'></img>
    //       <span>Just now</span>
    //     </div>
    //     <div className="max-w-[80%_] flex flex-col gap-[10px]">
    //       <p className='bg-white py-[10px] px-[20px] rounded-full'>Test</p>

    //       {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"></img> */}
    //     </div>
    // </div>
    
    //MESSAGE OWNER
    
    <div className="bg-gray-300 flex gap-[20px] flex-row-reverse">
        <div className="flex flex-col mb-[20px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className='w-[40px] h-[40px] rounded-full object-cover'></img>
          <span>Just now</span>
        </div>
        <div className="max-w-[80%_] flex flex-col gap-[10px] items-end">
          <p className='bg-[#8da4f1] py-[10px] px-[20px] rounded-full text-white max-w-max'>Test</p>

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className="max-w-[50%_]"></img>
        </div>
    </div>

  )
}

export default Message
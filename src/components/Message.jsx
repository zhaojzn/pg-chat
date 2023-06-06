import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

 const {currentUser} = useContext(AuthContext)
 const {data} = useContext(ChatContext)

 const ref = useRef();

 useEffect(() => {
   ref.current?.scrollIntoView();
 }, [message]);

  if(message.senderId === currentUser.uid){
    return(
      <div className="bg-white flex gap-[20px] flex-row-reverse" ref={ref}>
        <div className="flex flex-col mb-[20px]">
          <img src={currentUser.photoURL} className='w-[40px] h-[40px] rounded-full object-cover'></img>
          <span>Just now</span>
        </div>
        <div className="max-w-[80%_] flex flex-col gap-[10px] items-end">
          <p className='bg-[#8da4f1] py-[10px] px-[20px] rounded-full text-white max-w-max'>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    )
  }
  return (
    
    <div className="bg-white flex gap-[20px]" ref={ref}>
        <div className="flex flex-col mb-[20px]">
          <img src={data.user.photoURL} className='w-[40px] h-[40px] rounded-full object-cover'></img>
          <span>Just now</span>
        </div>
        <div className="max-w-[80%_] flex flex-col gap-[10px]">
        <p className='bg-[#8da4f1] py-[10px] px-[20px] rounded-full text-white max-w-max'>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"></img> */}
        </div>
    </div>
    
    //MESSAGE OWNER
    
    // <div className="bg-gray-300 flex gap-[20px] flex-row-reverse">
    //     <div className="flex flex-col mb-[20px]">
    //       <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} className='w-[40px] h-[40px] rounded-full object-cover'></img>
    //       <span>Just now</span>
    //     </div>
    //     <div className="max-w-[80%_] flex flex-col gap-[10px] items-end">
    //       <p className='bg-[#8da4f1] py-[10px] px-[20px] rounded-full text-white max-w-max'>Test</p>

    //       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className="max-w-[50%_]"></img>
    //     </div>
    // </div>

  )
}

export default Message
import React from 'react'

const Message = () => {
  return (
    <div className="bg-gray-300 flex gap-[20px]">
        <div className="flex flex-col mb-[20px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className='w-[40px] h-[40px] rounded-full object-cover'></img>
          <span>Just now</span>
        </div>
        <div className="max-w-[80%_] flex flex-col gap-[10px]">
          <p className='bg-white py-[10px] px-[20px] rounded-full'>Test</p>

          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"></img> */}
        </div>
    </div>
  )
}

export default Message
import React from 'react'

const Message = () => {
  return (
    <div className="bg-white flex gap-[20px]">
        <div className="flex flex-col mb-[20px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className='w-[40px] h-[40px] rounded-full object-cover'></img>
          <span>Just now</span>
        </div>
        <div className="w-1/2 ">
          <p>Test</p>

          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"></img> */}
        </div>
    </div>
  )
}

export default Message
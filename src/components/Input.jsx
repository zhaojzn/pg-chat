
import Img from '../img/img.png'
import Attach from '../img/attach.png'
import React, { useContext, useState } from 'react'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
const Input = () => {

  const [text,setText] = useState("");
  const [img,setImg] = useState(null)


  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const [message,setMessage] = useState("");

  const handleSend = async () =>{
      if(img){
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, img);
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateDoc(doc(db,"chats",data.chatId),{
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId:currentUser.uid,
              date:Timestamp.now(),
              img: downloadURL,
            })
          });

        });
      }else{
        console.log(text + " - " + "sent")

        await updateDoc(doc(db,"chats",data.chatId),{
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId:currentUser.uid,
            date:Timestamp.now(),
          })
        });
      }
      await updateDoc(doc(db,"userChats", currentUser.uid),{
        [data.chatId + ".lastMessage"]:{
          text,
        },
        [data.chatId+".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db,"userChats", data.user.uid),{
        [data.chatId + ".lastMessage"]:{
          text,
        },
        [data.chatId+".date"]: serverTimestamp(),
      })


  }

  const handleKeyDown = (e) => {
    if(e.key == 'Enter'){
      handleSend()
      setText("")
    }
  }

    
  return (
    <div className='border-t-2 pt-[0.5px] items-center text-center justify-between bg-bg2 transition-all'>
        <div className='w-full h-full bg-white p-10 flex grow'>
        <input onKeyDown={handleKeyDown} onChange={e=>setText(e.target.value)} type="text" placeholder="Write Something..." className="w-3/4 h-12 rounded-full bg-bg2 p-5" value={text}></input>
        <div className='flex items-center gap-5'>
          <img src={Attach} alt="" className='h-8 cursor-pointer'/>
          <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}></input>
          <label htmlFor="file">
            <img src={Img} alt="" className='h-8 cursor-pointer'/>
          </label>
          <button onClick={handleSend}className='p-[10px] pr-[20px] pl-[20px] text-white bg-gray-500 rounded-[25px]'>Send</button>
        </div>
        </div>

    </div>
  )
}

export default Input
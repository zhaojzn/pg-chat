import React, { useContext, useState, useEffect } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase' 
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);


  const handleSelect = (u) => {
    dispatch({
      type:"CHANGE_USER",
      payload: u
    })
  }


  return (
    <div>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>(
        <div className='p-10 flex items-center gap-10 bg-gray-500 cursor-pointer hover:bg-gray-400' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} className='w-12 h-12 rounded-full'></img>
          <div>
              <span className='text-lg font-medium text-white '>{chat[1].userInfo.displayName}</span>
              <p className='text-base text-gray-200'>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}


    </div>
  )
}

export default Chats
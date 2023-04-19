import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext } from 'react'
import { useEffect, useState  } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Message from './Message'
const Messages = () => {

  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext);

  useEffect(()=>{
    const unSub = onSnapshot(doc(db,"chats",data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })
    
    return ()=>{
      unSub()
    }
  }, [data.chatId])


  return (
    <div className="h-5/6 bg-gray-300 overflow-scroll">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}      
    </div>
  )
}

export default Messages
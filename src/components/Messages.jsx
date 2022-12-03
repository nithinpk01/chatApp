import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../config/firebase';
import { ChatContext } from '../context/ChatContext';
import { Message } from './Message'
export const Messages = () => {
  const [messages,setMessages] =useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
          doc.exists() && setMessages(doc.data().messages)
          
        })
        return () => {
            unsub();
    };


}, [data.chatId])
  return (
    <div className='messages'>
      {messages.map((m)=>(
        <Message messages = {m} key={m.id}/>
      ))} 
    </div>
  )
}

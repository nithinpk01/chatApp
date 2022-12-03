import React, { useContext, useEffect } from 'react'
import { useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import profile from '../images/profile.png'

export const Message = ({ messages }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: 'smooth' })

  }, [messages])

  return (
    <div ref={ref} className={`message ${messages.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={messages.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>{messages.text}</p>
        {messages.img && <img src={messages.img} alt="" />}
      </div>
    </div>
  )
}



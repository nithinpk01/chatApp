import React from 'react'
import profile from '../images/profile.png'

export const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src={profile} alt="" />
            <span>just now</span>
        </div>
        <div className='messageContent'>
            <p>Hai</p>
        <img src={profile} alt="" />
        </div>
    </div>
  )
}



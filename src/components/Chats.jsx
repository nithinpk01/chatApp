import React from 'react'
import profile from '../images/profile.png'

export const Chats = () => {
    return (
        <div className='chats'>
            <div className='userChat'>
                <img src={profile} alt="" />
                <div className="userChatInfo">
                    <span>Nithin PK</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src={profile} alt="" />
                <div className="userChatInfo">
                    <span>Nithin PK</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src={profile} alt="" />
                <div className="userChatInfo">
                    <span>Nithin PK</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src={profile} alt="" />
                <div className="userChatInfo">
                    <span>Nithin PK</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'
import camera from '../images/camera.png'
import contact from '../images/contact.png'
import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react'


export const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>{data.user?.displayName}</span>
                <div className='chatIcons'>
                    <img src={camera} alt=""/>
                    <img src={contact} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

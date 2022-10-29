import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'
import camera from '../images/camera.png'
import contact from '../images/contact.png'
export const Chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>Nithin PK</span>
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

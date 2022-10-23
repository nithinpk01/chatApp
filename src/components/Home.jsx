import React from 'react'
import '../components/Register.scss';
import { Sidebar } from './Sidebar'
import { Chat } from './Chat'
export const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

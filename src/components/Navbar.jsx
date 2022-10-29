import React from 'react'
import profile from '../images/profile.png'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="user">
                <img src={profile} alt="" />
                <span>Nithin PK</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

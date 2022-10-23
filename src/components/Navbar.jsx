import React from 'react'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-qoEu8CufLRikenolkGsWfU8deYoArcacQBtKn1rPQ&s" alt="" />
                <span>Nithin</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

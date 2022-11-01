import React, { useContext } from 'react'
import profile from '../images/profile.png'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AuthContext } from '../context/AuthContext';
export const Navbar = () => {

    // const currentUser = useContext(AuthContext)
    // console.log(currentUser.currentUser.displayName)
    const currentUser = useContext(AuthContext).currentUser
    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

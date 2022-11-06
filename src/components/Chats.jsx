import React, { useContext, useEffect, useState } from 'react'
import profile from '../images/profile.png'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase';
import { AuthContext } from '../context/AuthContext';

export const Chats = () => {
    const { currentUser } = useContext(AuthContext);
    const [chats, setChats] = useState([]);
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
            return () => {
                unsub();
            }
        };
        currentUser.uid && getChats();

    }, [currentUser.uid])
    return (

        <div className='chats'>
            {Object.entries(chats)?.map(chat => (
                <div className='userChat' key={chat[0]}>
                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>hello</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

import React, { useContext, useState } from 'react'
import profile from '../images/profile.png'
import { db } from '../config/firebase';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

export const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const currentUser = useContext(AuthContext).currentUser


    const getUser = async () => {
        const result = query(collection(db, "users"), where("displayName", "==", username))
        try {
            const querySnap = await getDocs(result);
            querySnap.forEach((doc) => {
                setUser(doc.data());
            });
        }
        catch (err) {
            setErr(err);
        }
    }
    const searchUser = (e) => {
        e.code === 'Enter' && getUser();
    }
    const selectUser = async () => {
        const combineId = currentUser.uid > user.uuid ? currentUser.uid + user.uuid : user.uuid + currentUser.uid;
        try {
            // const res = await getDoc(doc(db,("chats",combineId)));
            const res = ""
            if (!res.exists) {
                // create a chat in chats collection
                await setDoc(doc(db, "chats", combineId), { messages: [] });
            }
            await updateDoc(doc(db, "userChats", currentUser.uid), {
                [combineId + ".userInfo"]: {
                    uid: user.uuid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                },
                [combineId + ".date"]: serverTimestamp()
            });
            await updateDoc(doc(db, "userChats", user.uuid), {
                [combineId + ".userInfo"]: {
                    uid: currentUser.uid,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                },
                [combineId + ".date"]: serverTimestamp()
            });
            setUsername("")
            setUser(null)
        } catch (err) {
            setErr(err);
        }
    }

    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" name="" placeholder='Find user' id="" onKeyDown={searchUser} onChange={e => setUsername(e.target.value)} value={username} />
            </div>
            {err && <span>User not found</span>}
            {user && <div className='userChat' onClick={selectUser}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

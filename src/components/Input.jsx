import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState } from 'react'
import { db, storage } from '../config/firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import Attachment from '../images/attachment.png'
import gallery from '../images/gallery.png'
import { v4 as uuid } from 'uuid';
export const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const storageRef = ref(storage, uuid());
    const uploadTask = uploadBytesResumable(storageRef, img);

    const sendMessage = async () => {

        if (img) {
            uploadTask.on(
                (error) => {
                    // setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        })
                    });
                }
            );

        } else {

            if(!text){
                return;
            }
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    senderId: currentUser.uid,
                    date: Timestamp.now()
                })
            })
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });


        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        })
        setText("");
        setImg(null);
    }
    return (
        <div className='input'>
            <input type="text" name="text" placeholder="Type Something" id="" value={text} onChange={e => setText(e.target.value)} />
            <div className="send">
                <img src={Attachment} alt="" />
                <input type="file" style={{ display: "none" }} name="file" id="file" onChange={e => setImg(e.target.files[0])} />
                <label htmlFor="file">
                    <img src={gallery} alt="" />
                </label>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

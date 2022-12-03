import React, { useState } from 'react'
import '../components/Style.scss';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uuid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "userChats", res.user.uid), {})
                        navigate("/");
                    });
                }
            );


        } catch (e) {
            setErr(true);
        }
    }

    return (
        <div className='form-container'>
            <div className='formWrapper'>
                <span className='logo'>Chat App</span>
                <span className='title'>Register</span>
                <form onSubmit={registerUser}>
                    <input type="text" name="name" id="" placeholder='Name' />
                    <input type="text" name="email" id="" placeholder='Email' />
                    <input type="password" name="password" id="" placeholder='Password' />
                    <input type="file" name="file" id="" />
                    <button>Sign Up</button>
                    {err && <span className='err'>Something went wrong</span>}
                </form>
                <p>You do have an account ? <Link to="/login">Login</Link></p>
            </div>

        </div>
    )
}

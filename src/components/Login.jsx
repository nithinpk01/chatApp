import React, { useState } from 'react'
import '../components/Style.scss';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
export const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (e) {
            setErr(true);
        }
    }

    return (
        <div className='form-container'>
            <div className='formWrapper'>
                <span className='logo'>Nithin's Chat App</span>
                <span className='title'>Login</span>
                <form onSubmit={signIn}>
                    <input type="text" name="email" id="" placeholder='Email' />
                    <input type="password" name="password" id="" placeholder='Password' />
                    <button>Login</button>
                    {err && <span className='err'>Something went wrong</span>}
                </form>
                <p>You don't have an account ? <Link to="/signup">Register </Link></p>
            </div>

        </div>
    )
}

import React from 'react'
import '../components/Style.scss';

export const Login = () => {
    return (
        <div className='form-container'>
            <div className='formWrapper'>
                <span className='logo'>Chat App</span>
                <span className='title'>Login</span>
                <form>
                    <input type="text" name="email" id="" placeholder='Email'/>
                    <input type="password" name="password" id="" placeholder='Password'/>
                    <button>Login</button>
                </form>
                <p>You don't have an account ? Register</p>
            </div>

        </div>
    )
}

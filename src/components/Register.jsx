import React from 'react'
import '../components/Register.scss';

export const Register = () => {
    return (
        <div className='form-container'>
            <div className='formWrapper'>
                <span className='logo'>Chat App</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" name="name" id="" placeholder='Name'/>
                    <input type="text" name="email" id="" placeholder='Email'/>
                    <input type="password" name="password" id="" placeholder='Password'/>
                    <input type="file" name="file" id="" />
                    <button>Sign Up</button>
                </form>
                <p>You do have an account ? Login</p>
            </div>

        </div>
    )
}

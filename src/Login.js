import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {
    const signIn = () => {
        //Google Login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img className="login__discordlogo" src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png"
                alt="Discord" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
        
    )
}

export default Login

import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import './Login.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const singIn = e => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    history.push('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }

    const register = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    history.push('/')
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ..
            });
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
                className="login__logo"
                src="https://the-peak.ca/wp-content/uploads/2018/07/amazon-logo-preview.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                
                    <button 
                        className="login__signInButton"
                        type="submit"
                        onClick={singIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>By signing-in you agree to the amazon clone
                    conditions of Use & Sale. Please see our
                    Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice.
                </p>

                <button 
                    className="login__registerButton"
                    type="submit"
                    onClick={register}
                >
                    Create your amazon account
                </button>
            </div>
        </div>
    )
}

export default Login

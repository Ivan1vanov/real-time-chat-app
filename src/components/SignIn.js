import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import './style.css'
import {FaGoogle} from 'react-icons/fa'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button className='btnLogin' onClick={signInWithGoogle}><div className='textLogin'>Login With Google</div> <FaGoogle size={30}/></button>
        </div>
    )
}

export default SignIn


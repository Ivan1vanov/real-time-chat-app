import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import './style.css'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input className='input' style={{color: '#000', width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Enter your message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button className='btnSend' type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage

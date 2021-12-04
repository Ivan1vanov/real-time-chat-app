import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

import './style.css'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%',  backgroundColor: 'rgb(55, 62, 68)', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button class='btnComponent' style={{fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Log out</Button>
        </div>
    )
}

export default SignOut

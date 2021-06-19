import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import s from './log.module.css';

function Logout() {
    const {logout,isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <button className={s.logout} onClick={() => logout()}>
            Log out
        </button>
        )
    )
}

export default Logout

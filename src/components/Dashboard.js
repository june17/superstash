import React, {useState} from 'react';
import {useAuth} from '../contexts/AuthContext'
import { useHistory} from 'react-router-dom'


function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/')
        } catch{
            setError('Failed to logou')
        }
    }  

    return (
        <>
            <h1 className="text-4xl font-extrabold">Dashboard</h1>
            Welcome Shawn!
            <p>Email: {currentUser.email}</p>
            {error}
            <button onClick={handleLogout}>Sign out</button>
        </>
    );
}

export default Dashboard;
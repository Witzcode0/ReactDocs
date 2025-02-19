import React from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate()

    const loginHandlar = () => {
        navigate('/dashboard')
    }

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(to right, #1f4037, #99f2c8)'
        }}>
            <h1>Login page</h1>
            <button onClick={loginHandlar}>Login</button>
            <button onClick={() => navigate('/signup')}>Register</button>
        </div>
    )
}

export default Login
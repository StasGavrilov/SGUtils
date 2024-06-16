import React, { useState } from 'react'

import UserHoverMessage from './UserHoverMessage'

interface LoginProps {
    handleClose: () => void
    setIsAuthenticated: (isAuthenticated: boolean) => void
}

export default function Login({ handleClose, setIsAuthenticated }: LoginProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER
        const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

        if (username === adminUser && password === adminPassword) {
            setIsAuthenticated(true)
            localStorage.setItem('isAuthenticated', 'true')
            handleClose()
        } else {
            alert('Invalid credentials..')
        }
    }

    return (
        <div className="h-full flex flex-col justify-center items-center text-main relative">
            <h1 className="absolute top-12 text-center text-2xl">Hello, Stas! :)</h1>
            <div className="flex flex-col justify-center items-center w-full mt-6">
                <div className="flex flex-col w-[275px] mb-4">
                    <span>User</span>
                    <input
                        type="text"
                        className="bg-white p-2 rounded border hover:border-secondary"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-[275px] mb-4">
                    <span>Password</span>
                    <input
                        type="password"
                        className="bg-white p-2 rounded border hover:border-secondary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <UserHoverMessage />
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="absolute bottom-4 p-2 rounded w-24 bg-main text-white hover:bg-secondary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
            <button onClick={handleClose} className="absolute top-2 right-2">
                X
            </button>
        </div>
    )
}

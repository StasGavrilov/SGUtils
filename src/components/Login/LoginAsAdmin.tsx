
'use client'

import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import LoginWindow from './LoginWindow'

export default function LoginAsAdmin() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { isAuthenticated, setIsAuthenticated } = useAuth()

    const handleClick = () => setIsOpen(true)
    const handleLogoff = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('isAuthenticated')
    }

    return (
        <div className="flex justify-center items-center my-4 text-white">
            {!isAuthenticated ? (
                <button
                    className="w-32 h-10 bg-secondary border border-secondary rounded hover:bg-main"
                    onClick={handleClick}
                >
                    Admin only.
                </button>
            ) : (
                <button
                    className="w-32 h-10 bg-secondary border border-secondary rounded hover:bg-main flex justify-center items-center"
                    onClick={handleLogoff}
                >
                    Hello, Stas!
                </button>
            )}
            {isOpen && <LoginWindow setIsOpen={setIsOpen} setIsAuthenticated={setIsAuthenticated} />}
        </div>
    )
}
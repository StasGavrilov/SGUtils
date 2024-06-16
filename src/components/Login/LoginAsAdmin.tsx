'use client'

import React, { useState, useEffect } from 'react'
import LoginWindow from './LoginWindow'

export default function LoginAsAdmin() {
    const [isOpen, setIsOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuthenticated')
        if (isAuth === 'true') {
            setIsAuthenticated(true)
        }
    }, [])

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
                isAuthenticated && (
                    <button
                        className="w-32 h-10 bg-secondary border border-secondary rounded hover:bg-main flex justify-center items-center"
                        onClick={handleLogoff}
                    >
                        Hello, Stas!
                    </button>
                )
            )}
            {isOpen && <LoginWindow setIsOpen={setIsOpen} setIsAuthenticated={setIsAuthenticated} />}
        </div>
    )
}

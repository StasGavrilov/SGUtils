'use client'

import React, { useState } from 'react'
import LoginWindow from './LoginWindow'

export default function LoginAsAdmin() {
    const [isOpen, setIsOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleClick = () => setIsOpen(true)
    const handleLogoff = () => setIsAuthenticated(false)

    return (
        <div className="flex justify-center items-center my-4 text-white">
            {!isAuthenticated ? (
                <button
                    className="w-28 h-8 bg-secondary border border-secondary rounded hover:bg-main"
                    onClick={handleClick}
                >
                    Admin only.
                </button>
            ) : (
                isAuthenticated && (
                    <button
                        className="w-28 h-8 bg-secondary border border-secondary rounded hover:bg-main flex justify-center items-center"
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

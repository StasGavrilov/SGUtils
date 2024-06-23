
'use client'

import React, { useState } from 'react'

import { useAuth } from './AuthContext'
import LoginWindow from './LoginWindow'
import ProfileImage from './ProfileImage'

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
                <ProfileImage onClick={handleClick} hoverText="Admin only." />
            ) : (
                <ProfileImage onClick={handleLogoff} hoverText="Hello, Stas!" />
            )}
            {isOpen && <LoginWindow setIsOpen={setIsOpen} setIsAuthenticated={setIsAuthenticated} />}
        </div>
    )
}
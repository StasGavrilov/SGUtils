'use client'

import React, { useState } from 'react'
import LoginWindow from './LoginWindow'

export default function LoginAsAdmin() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(true)
    }

    return (
        <div className="flex justify-center items-center my-4">
            <button
                className="w-28 h-8 bg-secondary border border-secondary rounded hover:bg-main"
                onClick={handleClick}
            >
                Admin
            </button>
            {isOpen && <LoginWindow setIsOpen={setIsOpen} />}
        </div>
    )
}

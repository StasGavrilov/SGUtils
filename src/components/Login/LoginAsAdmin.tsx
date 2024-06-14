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
                className="w-28 h-8 bg-[#18bc9c] border border-[#18bc9c] rounded hover:bg-[#2c3e50]"
                onClick={handleClick}
            >
                Admin
            </button>
            {isOpen && <LoginWindow setIsOpen={setIsOpen} />}
        </div>
    )
}

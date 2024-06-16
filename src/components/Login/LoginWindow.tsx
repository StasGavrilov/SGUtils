import React, { useState, useEffect, useRef } from 'react'
import Login from './Login'

interface LoginWindowProps {
    setIsOpen: (isOpen: boolean) => void
    setIsAuthenticated: (isAuthenticated: boolean) => void
}

export default function LoginWindow({ setIsOpen, setIsAuthenticated }: LoginWindowProps) {
    const [show, setShow] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setShow(true)

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleClose = () => {
        setShow(false)
        setTimeout(() => {
            setIsOpen(false)
        }, 300)
    }

    return (
        <div
            className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div
                ref={modalRef}
                className={`bg-[#DEDFE4] p-6 rounded shadow-lg transform transition-transform duration-300 ${show ? 'scale-100' : 'scale-95'
                    } w-[350px] h-[450px]`}
            >
                <Login handleClose={handleClose} setIsAuthenticated={setIsAuthenticated} />
            </div>
        </div>
    )
}

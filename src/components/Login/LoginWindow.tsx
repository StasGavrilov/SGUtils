import React, { useState, useEffect } from 'react'
import Login from './Login'
import { useOutsideClick } from '../../helpers/useOutsideClick'

interface LoginWindowProps {
    setIsOpen: (isOpen: boolean) => void
    setIsAuthenticated: (isAuthenticated: boolean) => void
}

export default function LoginWindow({ setIsOpen, setIsAuthenticated }: LoginWindowProps) {
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
        setTimeout(() => {
            setIsOpen(false)
        }, 300)
    }

    const ref = useOutsideClick(handleClose)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div
                ref={ref}
                className={`bg-[#DEDFE4] p-6 rounded shadow-lg transform transition-transform duration-300 ${show ? 'scale-100' : 'scale-95'} w-[350px] h-[450px]`}
            >
                <Login handleClose={handleClose} setIsAuthenticated={setIsAuthenticated} />
            </div>
        </div>
    )
}

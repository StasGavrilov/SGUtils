import React, { useState, useEffect, useRef } from 'react'
import Login from './Login'

interface LoginWindowProps {
    setIsOpen: (isOpen: boolean) => void
}

export default function LoginWindow({ setIsOpen }: LoginWindowProps) {
    const [show, setShow] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setShow(true)

        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    function handleClose() {
        setShow(false)
        setTimeout(() => {
            setIsOpen(false)
        }, 300)
    }

    return (
        <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div ref={modalRef} className={`bg-white p-6 rounded shadow-lg transform transition-transform duration-300 ${show ? 'scale-100' : 'scale-95'} w-[350px] h-[450px]`}>
                <button onClick={handleClose} className="absolute top-2 right-2">X</button>
                <Login handleClose={handleClose} />
            </div>
        </div>
    )
}

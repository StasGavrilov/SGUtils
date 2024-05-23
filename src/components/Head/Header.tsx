import React from 'react'

import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className='relative'>
        <aside className='absolute bg-slate-400 h-screen w-40'>
            <Logo />

            <div className="w-C/150 h-C/1.5 bg-black my-4 mx-auto shadow-md rounded opacity-50"></div>

            <NavBar />
        </aside>
    </div>
  )
}

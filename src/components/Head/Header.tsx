import React from 'react'

import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className='relative'>
        <aside className='absolute bg-slate-400 h-screen w-40'>
            <Logo />

            <div className="w-[150px] h-[1.5px] bg-black my-4 mx-auto shadow-md rounded opacity-50"></div>

            <NavBar />
        </aside>
    </div>
  )
}

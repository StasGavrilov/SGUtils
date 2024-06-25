"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { navigation } from './navigation'

export default function NavBar() {
  const [activeTab, setActiveTab] = useState('Home')
  const pathname = usePathname()

  useEffect(() => {
    const activeNavItem = navigation.find(nav => nav.target === pathname)
    if (activeNavItem) {
      setActiveTab(activeNavItem.label)
    } else {
      setActiveTab('Home')
    }
  }, [pathname])

  return (
    <ul className="flex flex-col w-full lg:items-start items-center">
      {navigation.map(nav => {
        const isActive = activeTab === nav.label
        return (
          <li
            key={nav.label}
            className={`h-10 text-xl flex items-center w-full px-2 hover:bg-secondary text-white hover:font-[500] ${isActive ? 'bg-secondary font-[500]' : ''}`}
          >
            <Link
              href={nav.target}
              onClick={() => setActiveTab(nav.label)}
              className="flex items-center w-full justify-center lg:justify-start transition-all duration-500 ease-in-out"
            >
              <FontAwesomeIcon icon={nav.icon} className="mr-2 w-6 h-6 lg:w-5 lg:h-5 transition-all duration-500 ease-in-out" />
              <span className="hidden lg:inline">{nav.label}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

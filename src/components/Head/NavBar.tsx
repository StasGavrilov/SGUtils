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
    <ul>
      {navigation.map(nav => {
        const isActive = activeTab === nav.label
        return (
          <li
            key={nav.label}
            className={`h-10 text-xl flex items-center w-full pl-2 hover:bg-secondary text-white hover:font-[500] ${isActive ? 'bg-secondary font-[500]' : ''}`}
          >
            <Link
              href={nav.target}
              onClick={() => setActiveTab(nav.label)}
              className="flex items-center"
            >
              <FontAwesomeIcon icon={nav.icon} className="mr-2 w-5 h-5" />
              {nav.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

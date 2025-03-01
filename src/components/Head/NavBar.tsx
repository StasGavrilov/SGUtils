'use client'

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
    <ul className='flex flex-col w-full items-center lg:items-start'>
      {navigation.map(nav => {
        const isActive = activeTab === nav.label
        return (
          <li
            key={nav.label}
            className={`
              group h-10 text-xl flex items-center justify-center w-full px-2 hover:bg-white hover:text-secondary text-white hover:font-[600]
              ${isActive ? 'bg-secondary font-[600]' : ''}
            `}
          >
            <Link
              href={nav.target}
              onClick={() => setActiveTab(nav.label)}
              className='flex items-center justify-center w-full lg:justify-start transition-all duration-500 ease-in-out'
            >
              <FontAwesomeIcon icon={nav.icon} className='w-6 h-6 lg:w-5 lg:h-5 lg:mr-2' />
              <span className='opacity-0 max-w-0 overflow-hidden invisible absolute left-0
                lg:group-hover:opacity-100 lg:group-hover:max-w-[150px] lg:group-hover:visible lg:relative lg:opacity-100 lg:max-w-[150px] lg:visible'
              >
                {nav.label}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

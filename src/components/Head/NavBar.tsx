'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { navigation } from './navigation'
import { useOutsideClick } from '@/helpers/useOutsideClick'
import DropdownNavItem from './DropdownNavItem'
import SimpleNavItem from './SimpleNavItem'
import { hasChildren, hasTarget } from './types'

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')
  const pathname = usePathname()
  const dropdownRef = useOutsideClick(() => setDropdownOpen(false))

  useEffect(() => {
    const allLinks = navigation.flatMap(item => {
      if (hasChildren(item)) return item.children
      if (hasTarget(item)) return [item]
      return []
    })
    const current = allLinks.find(link => link.target === pathname)
    setActiveTab(current?.label ?? 'Home')
  }, [pathname])

  return (
    <div className="flex items-center text-md font-medium">
      {navigation.map(item => {
        const isActive = activeTab === item.label

        if (hasChildren(item)) {
          return (
            <DropdownNavItem
              key={item.label}
              item={item}
              isActive={isActive}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              setActiveTab={setActiveTab}
              dropdownRef={dropdownRef}
            />
          )
        }

        if (hasTarget(item)) {
          return (
            <SimpleNavItem
              key={item.label}
              item={item}
              isActive={isActive}
              setActiveTab={setActiveTab}
            />
          )
        }

        return null
      })}
    </div>
  )
}
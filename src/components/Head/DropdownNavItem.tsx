import React from 'react'
import Link from 'next/link'

import { NavigationItem } from './navigation'
import DropDown from '../../../public/icons/DropDown'

interface Props {
    item: Extract<NavigationItem, { children: any }>
    isActive: boolean
    dropdownOpen: boolean
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
    setActiveTab: (label: string) => void
    dropdownRef: React.RefObject<HTMLDivElement>
}

export default function DropdownNavItem({
    item,
    isActive,
    dropdownOpen,
    setDropdownOpen,
    setActiveTab,
    dropdownRef
}: Props) {
    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={() => setDropdownOpen(prev => !prev)}
                className={`inline-flex justify-center items-center px-4 py-2 text-white hover:text-secondary ${isActive ? 'text-secondary font-semibold' : ''}`}
            >
                {item.label}
                <DropDown />
            </button>

            {dropdownOpen && (
                <ul className="absolute z-10 mt-2 w-40 bg-gray-800 rounded shadow-lg">
                    {item.children.map(child => {
                        const isChildActive = isActive && child.label === item.label
                        return (
                            <li key={child.label}>
                                <Link
                                    href={child.target}
                                    onClick={() => {
                                        setActiveTab(child.label)
                                        setDropdownOpen(false)
                                    }}
                                    className={`block px-4 py-2 text-sm text-white hover:bg-white hover:text-secondary ${isChildActive ? 'bg-secondary font-bold' : ''}`}
                                >
                                    {child.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
import React from 'react'
import Link from 'next/link'
import { NavigationItem } from './navigation'

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
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
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
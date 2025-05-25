import React from 'react'
import Link from 'next/link'
import { NavigationItem } from './navigation'

interface Props {
    item: Extract<NavigationItem, { target: string }>
    isActive: boolean
    setActiveTab: (label: string) => void
}

export default function SimpleNavItem({ item, isActive, setActiveTab }: Props) {
    return (
        <Link
            href={item.target}
            onClick={() => setActiveTab(item.label)}
            className={`text-white hover:text-secondary px-4 py-2 ${isActive ? 'text-secondary font-semibold' : ''}`}
        >
            {item.label}
        </Link>
    )
}
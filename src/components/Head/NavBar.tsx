"use client"

import Link from 'next/link'

import { navigation } from './navigation'

export default function NavBar() {
  return (
    <ul>
      {navigation.map(nav => {
          return (
              <li
                key={nav.label}
                className="h-10 text-xl flex items-center w-full pl-2 hover:bg-[#18bc9c] hover:font-[500]"
              >
                  <Link
                      href={nav.target}
                  >
                      {nav.label}
                  </Link>
              </li>
          )
      })}
    </ul>
  )
}

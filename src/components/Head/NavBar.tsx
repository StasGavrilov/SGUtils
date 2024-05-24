"use client"

import Link from 'next/link'
import React from 'react'

import { navigation } from './navigation'

export default function NavBar() {
  return (
    <ul>
      {navigation.map(nav => {
          return (
              <li
                key={nav.label}
                className="h-10 text-xl flex items-center w-full hover:bg-white pl-2"
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

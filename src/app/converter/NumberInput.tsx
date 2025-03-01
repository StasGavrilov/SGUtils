'use client'

import React, { useEffect, useRef } from 'react'

interface NumberInputProps {
  value: number | ''
  onValueChange: (newValue: number | '') => void
}

export default function NumberInput({ value, onValueChange }: NumberInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim()
    const numericValue = parseInt(inputValue, 10)

    if (!isNaN(numericValue) || inputValue === '') {
      onValueChange(inputValue === '' ? '' : numericValue)
    }
  }

  return (
    <input
      type='number'
      className='w-full'
      value={value}
      onChange={handleChange}
      placeholder='Enter numbers only'
      ref={inputRef}
    />
  )
}
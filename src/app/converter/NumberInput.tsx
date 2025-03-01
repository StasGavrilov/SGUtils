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
      className='w-full outline-none border-none focus:ring-0 appearance-none
        [&::-webkit-inner-spin-button]:appearance-none
        [&::-webkit-outer-spin-button]:appearance-none'
      value={value}
      onChange={handleChange}
      placeholder='Enter numbers only'
      ref={inputRef}
    />

  )
}
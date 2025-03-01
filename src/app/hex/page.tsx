'use client'

import { useState, useEffect, useRef } from 'react'
import Box from '@/components/Box/Box'

export default function Hexadecimal() {
  const [hexAddress, setHexAddress] = useState<string>('')
  const [decimalNumber, setDecimalNumber] = useState<number | null>(null)
  const [error, setError] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const hexToDecimal = (hex: string) => {
    try {
      const decimal = parseInt(hex, 16)
      if (isNaN(decimal)) {
        throw new Error('Invalid hexadecimal address')
      }
      setDecimalNumber(decimal)
      setError('')
    } catch (error) {
      setDecimalNumber(null)
      setError('Invalid hexadecimal address')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHexAddress(event.target.value)
    setDecimalNumber(null)
    setError('')
  }

  const handleConversion = () => {
    hexToDecimal(hexAddress)
    setHexAddress('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleConversion()
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Box title='Hexadecimal'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center w-100 p-4'>
          <span className='mb-2 text-2xl'>Enter Hexadecimal Address</span>
          <input
            ref={inputRef}
            className={`p-4 mb-4 rounded border-2 ${error ? 'border-red-500' : 'border-main'} focus:border-secondary hover:border-secondary`}
            type='text'
            value={hexAddress}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className='bg-main p-1 m-1 w-40 h-9 flex justify-center items-center rounded hover:bg-secondary text-white'
            onClick={handleConversion}
            disabled={!hexAddress}
          >
            Convert
          </button>

          <div className='w-full text-center mt-4' style={{ minHeight: '4rem' }}>
            {decimalNumber !== null && (
              <div className='text-green-700 px-4 py-2'>
                The decimal equivalent of {hexAddress} is {decimalNumber}
              </div>
            )}
            {error && (
              <div className='text-red-700 px-4 py-2'>
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </Box>
  )
}

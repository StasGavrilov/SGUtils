'use client'

import { useState } from 'react'
import Box from '@/components/Box/Box'

export default function Hexadecimal() {
  const [hexAddress, setHexAddress] = useState<string>('')
  const [decimalNumber, setDecimalNumber] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const hexToDecimal = (hexAddress: string) => {
    try {
      const decimal = parseInt(hexAddress, 16)
      if (isNaN(decimal)) {
        throw new Error("Invalid hexadecimal address")
      }
      setDecimalNumber(decimal)
      setError('')
    } catch {
      setDecimalNumber(null)
      setError('Invalid hexadecimal address')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setHexAddress(event.target.value)

  const handleConversion = () => {
    hexToDecimal(hexAddress)
    setHexAddress('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleConversion()
    }
  }

  return (
    <Box title="Hexadecimal">
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='relative flex flex-col justify-center items-center w-80'>
          <span className='p-4'>Enter Hexadecimal Address:</span>
          <input
            className={`p-4 mb-4 rounded border-2 ${error ? 'border-red-500' : 'border-main'} focus:border-secondary hover:border-secondary`}
            type="text"
            value={hexAddress}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className='bg-main p-1 m-1 w-40 h-9 flex justify-center items-center rounded hover:bg-secondary text-white'
            onClick={handleConversion}
          >
            Convert
          </button>

          <div className="absolute top-full left-0 mt-4 w-full text-center">
            {decimalNumber !== null && (
              <div className="text-green-700 px-4 py-2 mb-4">
                The decimal equivalent of {hexAddress} is {decimalNumber}
              </div>
            )}
            {error && (
              <div className="text-red-700 px-4 py-2">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </Box>
  )
}

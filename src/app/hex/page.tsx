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

  const handleConversion = () => hexToDecimal(hexAddress)

  return (
    <Box title="Hexadecimal">
      <div className='flex flex-col justify-center items-center'>
        <span className='p-4'>Enter Hexadecimal Address:</span>
        <input className='p-4 mb-4 rounded' type="text" value={hexAddress} onChange={handleInputChange} />
        <button className='bg-main p-1 m-1 w-40 h-9 flex justify-center items-center rounded hover:bg-secondary text-white' onClick={handleConversion}>Convert</button>

        <div className="mt-4">
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
    </Box>
  )
}

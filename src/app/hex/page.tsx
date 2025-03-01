'use client'

import { useState, useEffect, useRef } from 'react'
import Box from '@/components/Box/Box'
import ErrorMessage from '@/helpers/ErrorMessage'
import SuccessMessage from '@/helpers/SuccessMessage'
import Button from '@/components/Button/Button'

export default function Hexadecimal() {
  const [hexAddress, setHexAddress] = useState<string>('')
  const [decimalNumber, setDecimalNumber] = useState<number | null>(null)
  const [error, setError] = useState<string>('')
  const [lastValidHex, setLastValidHex] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const hexToDecimal = (hex: string) => {
    try {
      const decimal = parseInt(hex, 16)
      if (isNaN(decimal)) {
        throw new Error('Invalid hexadecimal address')
      }
      setLastValidHex(hex)
      setDecimalNumber(decimal)
      setError('')
    } catch (error) {
      setDecimalNumber(null)
      setError(hexAddress ? `Sorry, but "${hexAddress}" is an invalid hexadecimal address` : '')
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
    <Box title="Hexadecimal">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center w-100 p-4">
          <span className="mb-2 text-2xl">Enter Hexadecimal Address</span>
          <input
            ref={inputRef}
            className={`p-4 mb-4 rounded border-1 outline-none border-none focus:ring-0
              ${error ? 'border-red-500' : 'border-main'}
               focus:border-secondary hover:border-secondary
            `}
            type="text"
            value={hexAddress}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='Add hex address..'
          />

          <Button label="Convert" onClick={handleConversion} disabled={!hexAddress} />

          <div className="w-full text-center mt-4" style={{ minHeight: '4rem' }}>
            <SuccessMessage message={decimalNumber !== null ? `The decimal equivalent of ${lastValidHex} is ${decimalNumber}` : null} />
            <ErrorMessage error={error} />
          </div>
        </div>
      </div>
    </Box>
  )
}

'use client'

import { useState } from 'react'
import Box from '@/components/Box/Box'
import Table from '@/components/Table/Table'

export default function Hexadecimal() {
  const [hexAddress, setHexAddress] = useState<string>('')
  const [decimalNumber, setDecimalNumber] = useState<number | null>(null)
  const [error, setError] = useState<string>('')
  const [requests, setRequests] = useState<{ hex: string, decimal: number | string }[]>([])

  const hexToDecimal = (hexAddress: string) => {
    try {
      const decimal = parseInt(hexAddress, 16)
      if (isNaN(decimal)) {
        throw new Error("Invalid hexadecimal address")
      }
      setDecimalNumber(decimal)
      setRequests(prev => [...prev, { hex: hexAddress, decimal }])
      setError('')
    } catch {
      setDecimalNumber(null)
      setRequests(prev => [...prev, { hex: hexAddress, decimal: 'Invalid' }])
      setError('Invalid hexadecimal address')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setHexAddress(event.target.value)

  const handleConversion = () => hexToDecimal(hexAddress)

  return (
    <Box title="Hexadecimal">
      <div>
        <span>Enter Hexadecimal Address:</span>
        <input type="text" value={hexAddress} onChange={handleInputChange} />
        <button onClick={handleConversion}>Convert</button>
      </div>

      {decimalNumber !== null && (
        <div>
          The decimal equivalent of {hexAddress} is {decimalNumber}
        </div>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Box>
  )
}

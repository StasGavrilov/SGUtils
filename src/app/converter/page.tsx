'use client'

import React, { useState } from 'react'
import Box from "@/components/Box/Box"
import Table from "@/components/Table/Table"
import NumberInput from "./NumberInput"
import UnitSelection from "./UnitSelection"
import Result from "./Result"

export default function Converter() {
  const [value, setValue] = useState<number | ''>('')
  const [selectedUnit, setSelectedUnit] = useState<string>('Years')
  const [status, setStatus] = useState<string>('-')

  const headers = ['Input', 'Unit', 'Status', 'Result']
  const data = [
    [
      <NumberInput value={value} onValueChange={setValue} />,
      <UnitSelection selectedUnit={selectedUnit} onUnitChange={setSelectedUnit} />,
      <span>{value ? 'Counting..' : 'Waiting'}</span>,
      <Result value={value} unit={selectedUnit} />,
    ],
  ]

  return (
    <Box title="Converter" className='text-2xl'>
      <Table headers={headers} data={data} />
    </Box>
  )
}
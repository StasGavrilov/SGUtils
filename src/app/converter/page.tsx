'use client'

import React, { useState } from 'react'

import Box from "@/components/Box/Box"
import Table from "@/components/Table/Table"
import NumberInput from "./NumberInput"
import UnitSelection from "./UnitSelection"
import Result from "./Result"
import Counting from './Counting'

export default function Converter() {
  const [value, setValue] = useState<number | ''>('')
  const [selectedUnit, setSelectedUnit] = useState<string>('Years')

  const headers = ['Input', 'Unit', 'Status', 'Result']
  const data = [
    {
      Input: <NumberInput value={value} onValueChange={setValue} />,
      Unit: <UnitSelection selectedUnit={selectedUnit} onUnitChange={setSelectedUnit} />,
      Status: <Counting value={value} />,
      Result: <Result value={value} unit={selectedUnit} />,
    }
  ]

  return (
    <Box title="Converter">
      <Table headers={headers} data={data} />

      <div className='py-24'>
        <h1 className='text-xl underline underline-offset-2'>Description:</h1>
        <p className='text-lg'>This application converts hours into weeks, months, and years, assisting in determining the age of drives when analyzing faulty drives in field or lab systems.</p>
      </div>
    </Box>
  )
}

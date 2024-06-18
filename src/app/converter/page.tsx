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
  const [fromUnit, setFromUnit] = useState<string>('Hours')
  const [toUnit, setToUnit] = useState<string>('Years')

  const headers = ['Input', 'From', 'To', 'Status', 'Result']
  const data = [
    {
      Input: <NumberInput value={value} onValueChange={setValue} />,
      From: <UnitSelection label="From" selectedUnit={fromUnit} onUnitChange={setFromUnit} />,
      To: <UnitSelection label="To" selectedUnit={toUnit} onUnitChange={setToUnit} />,
      Status: <Counting value={value} />,
      Result: <Result value={value} fromUnit={fromUnit} toUnit={toUnit} />,
    }
  ]

  return (
    <Box title="Converter">
      <Table headers={headers} data={data} />

      <div className='py-24'>
        <h1 className='text-xl underline underline-offset-2'>Description:</h1>
        <p className='text-lg'>This application converts between various time units, assisting in determining the age of drives when analyzing faulty drives in field or lab systems.</p>
      </div>
    </Box>
  )
}

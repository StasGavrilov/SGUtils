'use client'

import React, { useState } from 'react'

import Box from "@/components/Box/Box"
import Table from "@/components/Table/Table"
import NumberInput from "./NumberInput"
import UnitSelection from "./UnitSelection"
import Result from "./Result"

export default function Converter() {
  const [value, setValue] = useState<number | ''>('')
  const [fromUnit, setFromUnit] = useState<string>('Hours')
  const [toUnit, setToUnit] = useState<string>('Years')

  const headers = ['Input', 'From', 'To', 'Result']
  const data = [
    {
      Input: <NumberInput value={value} onValueChange={setValue} />,
      From: <UnitSelection label="From" selectedUnit={fromUnit} onUnitChange={setFromUnit} />,
      To: <UnitSelection label="To" selectedUnit={toUnit} onUnitChange={setToUnit} />,
      Result: <Result value={value} fromUnit={fromUnit} toUnit={toUnit} />,
    }
  ]

  return (
    <Box title="Time Converter">
      <div className='flex justify-center items-center h-screen'>
        <div className='absolute top-[40%] w-[75%]'>
          <Table headers={headers} data={data} />
        </div>
      </div>

      <div className='absolute bottom-0 w-full py-24'>
        <h1 className='text-xl underline underline-offset-2'>Description:</h1>
        <p className='text-lg'>This application converts between various time units, assisting in determining the age of drives when analyzing faulty drives in field or lab systems.</p>
      </div>
    </Box>
  )
}

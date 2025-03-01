'use client'

import React, { useState } from 'react'

import Box from '@/components/Box/Box'
import Table from '@/components/Table/Table'
import NumberInput from './NumberInput'
import UnitSelection from './UnitSelection'
import Result from './Result'

export default function Converter() {
  const [value, setValue] = useState<number | ''>('')
  const [fromUnit, setFromUnit] = useState<string>('Hours')
  const [toUnit, setToUnit] = useState<string>('Years')

  const headers = ['Input', 'From', 'To', 'Result']
  const data = [
    {
      Input: <NumberInput value={value} onValueChange={setValue} />,
      From: <UnitSelection label='From' selectedUnit={fromUnit} onUnitChange={setFromUnit} />,
      To: <UnitSelection label='To' selectedUnit={toUnit} onUnitChange={setToUnit} />,
      Result: <Result value={value} fromUnit={fromUnit} toUnit={toUnit} />,
    }
  ]

  return (
    <Box title='Time Converter'>
      <div className='absolute w-full'>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-[85%] break-words overflow-hidden flex flex-wrap min-w-0'>
          This application converts between various time units,
          assisting in determining the age of drives when analyzing faulty drives in field or lab systems.
        </p>
      </div>
      <div className='flex justify-center h-screen'>
        <div className='absolute top-[22%] w-[75%] lg:top-[20%]'>
          <Table headers={headers} data={data} />
        </div>
      </div>
    </Box>
  )
}

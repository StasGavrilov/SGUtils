'use client'

import React, { useState } from 'react'
import Box from "@/components/Box/Box"
import Table from "@/components/Table/Table"
import NumberInput from "./NumberInput"
import UnitSelection from "./UnitSelection"
import Result from "./Result"

export default function Converter() {
  const [value, setValue] = useState<number | ''>('')
  const [selectedUnit, setSelectedUnit] = useState<string>('Days')

  const headers = ['Input', 'Unit', 'Status', 'Result', 'Notes']
  const data = [
    [
      <NumberInput value={value} onValueChange={setValue} />,
      <UnitSelection selectedUnit={selectedUnit} onUnitChange={setSelectedUnit} />,
      <span>status</span>,
      <Result value={value} unit={selectedUnit} />,
      <span>notes</span>,
    ],
  ]

  return (
    <Box title="Converter">
      <Table headers={headers} data={data} />
    </Box>
  )
}
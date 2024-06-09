'use client'

import React, { useState } from 'react'
import { supabase } from '@/../supabaseClient'

import Box from '@/components/Box/Box'
import Loading from '@/components/Loading/Loading'
import Table from '@/components/Table/Table'
import { headers } from './headers'
import AddMonth from './AddMonth'
import { getData } from './getData'

const PLACEHOLDERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export default function Progress() {
  const { progress, fetchError, isLoading } = getData()
  const [data, setData] = useState<(number | JSX.Element)[][]>([PLACEHOLDERS])

  async function handleSubmit() {
    const newRow = [...PLACEHOLDERS]

    const { data: insertedData, error } = await supabase
      .from('Progress')
      .insert([])
      .select()

    if (error) {
      console.log('Error inserting data:', error)
    } else {
      setData(prevData => [...prevData, newRow])
      console.log('Inserted data:', insertedData)
    }
  }

  return (
    <Box title='Progress'>
      <div className='flex justify-end items-center'>
        <AddMonth handleSubmit={handleSubmit} />
      </div>

      <div className='mt-4'>
        {isLoading ? <Loading /> : <Table headers={headers} data={data} />}
        {fetchError && <div>{fetchError}</div>}
      </div>

      {progress}
    </Box>
  )
}

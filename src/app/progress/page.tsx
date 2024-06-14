'use client'

import React, { useState, useEffect } from 'react'
import Box from '@/components/Box/Box'
import Loading from '@/components/Loading/Loading'
import Table from '@/components/Table/Table'
import AddMonth from './AddMonth'
import { getData } from './getData'
import { mapProgressToTableData } from './headers'

export default function Progress() {
  const { progress, fetchError, isLoading, handleSubmit } = getData()
  const [data, setData] = useState<Record<string, string | number>[]>([])
  const [headers, setHeaders] = useState<string[]>([])

  useEffect(() => {
    const { headers, data } = mapProgressToTableData(progress)
    setData(data)
    setHeaders(headers)
  }, [progress])

  return (
    <Box title='Progress'>
      <div className='flex justify-end items-center'>
        <AddMonth handleSubmit={handleSubmit} />
      </div>

      <div className='mt-4'>
        {isLoading ? <Loading /> : <Table headers={headers} data={data} />}
        {fetchError && <div>{fetchError}</div>}
      </div>
    </Box>
  )
}

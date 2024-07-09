'use client'

import React, { useState, useEffect } from 'react'
import Box from '@/components/Box/Box'
import Loading from '@/components/Loading/Loading'
import Table from '@/components/Table/Table'
import AddMonth from './AddMonth'
import { useData, submitData } from '../../api/dataApi'
import { mapProgressToTableData } from './headers'
import { useAuth } from '@/components/Login/AuthContext'

export default function Progress() {
  const { data: progress, fetchError, isLoading, setData: setProgress } = useData('progress')
  const [data, setData] = useState<Record<string, string | number>[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const { headers, data } = mapProgressToTableData(progress)
    setData(data)
    setHeaders(headers)
  }, [progress])

  const handleSubmit = async (formData: Record<string, any>) => {
    const insertedData = await submitData('progress', formData)
    if (insertedData) {
      setProgress(prevData => [...prevData, ...insertedData])
    }
  }

  return (
    <Box title='Progress'>
      <div className='flex justify-end items-center'>
        {isAuthenticated ? <AddMonth handleSubmit={handleSubmit} /> : ''}
      </div>

      <div className='mt-4'>
        {isLoading ? <Loading /> : <Table headers={headers} data={data} />}
        {fetchError && <div>{fetchError}</div>}
      </div>
    </Box>
  )
}

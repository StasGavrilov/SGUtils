'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from '@/../supabaseClient'
import Box from '@/components/Box/Box'

interface ProgressData {
  id: number
  title: string
}

export default function Progress() {
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [progress, setProgress] = useState<ProgressData[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const { data, error } = await supabase
        .from('Progress')
        .select()

      if (error) {
        setFetchError('Could not fetch data')
        setProgress(null)
        console.log(error)
      } else {
        setProgress(data || [])
        setFetchError(null)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <Box title='DATABASE'>
      {/* {isLoading && <p>Loading...</p>}
      {fetchError && <p>{fetchError}</p>}
      {progress && progress.map(prog => (
        <div key={prog.id}>{prog.title}</div>
      ))} */}
      <div>bla</div>
    </Box>
  )
}

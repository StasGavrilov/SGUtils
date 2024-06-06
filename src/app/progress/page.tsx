'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from '@/../supabaseClient'

import Box from '@/components/Box/Box'

export default function Progress() {
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [progress, setProgress] = useState<any[] | null >(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Progress')
        .select()

      if (error) {
        setFetchError('Could not fetch')
        setProgress(null)
        console.log(error)
      }

      if (data) {
        setProgress(data)
        setFetchError(null)
      }
    }

    fetchData()
  }, [])

  return (
    <Box title='DATABASE'>
      {progress && progress.map(prog => <div>{prog.title}</div>)}
    </Box>
  )
}

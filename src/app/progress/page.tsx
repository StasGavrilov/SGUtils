'use client'

import React, { useState } from 'react'
import { supabase } from '@/../supabaseClient'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Box from '@/components/Box/Box'
import Loading from '@/components/Loading/Loading'
import Table from '@/components/Table/Table'
import { headers } from './headers'
import AddMonth from './AddMonth'
import { useFetchProgressData } from './useFetchProgressData'

const PLACEHOLDERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, <FontAwesomeIcon icon={faFile} />]

export default function Progress() {
  const { progress, fetchError, isLoading } = useFetchProgressData()
  const [data, setData] = useState<(JSX.Element | number)[][]>(progress)

  async function handleSubmit() {
    const newRow = [...PLACEHOLDERS]

    const { data: insertedData, error } = await supabase
      .from('Progress')
      .insert([
        {
          'מסה/חיטוב': newRow[0],
          'תאריך': newRow[1],
          'משקל': newRow[2],
          'היקף חזה': newRow[3],
          'היקף מותניים (טבור)': newRow[4],
          'היקף ירך עליון בכיווץ': newRow[5],
          'היקף ירך תחתון בכיווץ': newRow[6],
          'היקף יד קדמית בכיווץ': newRow[7],
          'היקף יד אחורית בכיווץ': newRow[8],
          'היקף תאומים בכיווץ': newRow[9],
          'אחוז שומן נוסחת היקפים': newRow[10],
          'אחוז שומן מכשיר מדידה': newRow[11],
          'אחוז שומן ממוצע בדיקות': newRow[12],
          'קובץ': 'file',
        }
      ])
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
    </Box>
  )
}

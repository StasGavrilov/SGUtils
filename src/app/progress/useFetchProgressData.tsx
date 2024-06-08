'use client'

import React, { useState, useEffect } from 'react'
import { supabase } from '@/../supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export function useFetchProgressData() {
    const [progress, setProgress] = useState<(JSX.Element | number)[][]>([])
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const { data, error } = await supabase
                .from('Progress')
                .select()

            if (error) {
                setFetchError('Could not fetch data')
                setProgress([])
                console.log(error)
            } else {
                const formattedData = data.map((item: any) => [
                    item['מסה/חיטוב'] || '',
                    item['תאריך'] || '',
                    item['משקל'] || '',
                    item['היקף חזה'] || '',
                    item['היקף מותניים (טבור)'] || '',
                    item['היקף ירך עליון בכיווץ'] || '',
                    item['היקף ירך תחתון בכיווץ'] || '',
                    item['היקף יד קדמית בכיווץ'] || '',
                    item['היקף יד אחורית בכיווץ'] || '',
                    item['היקף תאומים בכיווץ'] || '',
                    item['אחוז שומן נוסחת היקפים'] || '',
                    item['אחוז שומן מכשיר מדידה'] || '',
                    item['אחוז שומן ממוצע בדיקות'] || '',
                    <FontAwesomeIcon icon={faFile} />
                ])

                setProgress(formattedData || [])
                setFetchError(null)
            }

            setIsLoading(false)
        }

        fetchData()
    }, [])

    return { progress, fetchError, isLoading }
}

'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/../supabaseClient'

export function getData() {
    const [progress, setProgress] = useState<(number | JSX.Element)[][]>([])
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
                setProgress(data)
                setFetchError(null)
            }

            setIsLoading(false)
        }

        fetchData()
    }, [])

    return { progress, fetchError, isLoading }
}
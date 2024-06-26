'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/../supabaseClient'

export function getData() {
    const [progress, setProgress] = useState<Record<string, string | number>[]>([])
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const { data, error } = await supabase.from('progress').select()
            if (error) {
                throw error
            }
            setProgress(data || [])
            setIsLoading(false)
        } catch (error) {
            setFetchError('Error fetching data')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async () => {
        const newRow = {}

        const { data: insertedData, error } = await supabase
            .from('progress')
            .insert([newRow])
            .select()

        if (error) {
            console.log('Error inserting data:', error)
        } else {
            setProgress(prevData => [...prevData, ...insertedData])
        }
    }

    return { progress, fetchError, isLoading, handleSubmit }
}

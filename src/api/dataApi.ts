'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/../supabaseClient'

export const useData = (table: string) => {
    const [data, setData] = useState<Record<string, string | number>[]>([])
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const { data: fetchedData, error } = await supabase.from(table).select()
            if (error) {
                throw error
            }
            setData(fetchedData || [])
        } catch (error) {
            setFetchError(`Error fetching data from ${table}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [table])

    return { data, fetchError, isLoading, setData }
}

export const submitData = async (table: string, data: Record<string, any>) => {
    try {
        const { data: insertedData, error } = await supabase
            .from(table)
            .insert([data])
            .select()

        if (error) {
            throw error
        }
        return insertedData
    } catch (error) {
        console.log(`Error inserting data into ${table}:`, error)
        return null
    }
}

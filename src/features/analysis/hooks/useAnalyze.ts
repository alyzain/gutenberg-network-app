import { AnalysisResult } from '@/types/analysis'
import { useState } from 'react'

export function useAnalyze() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<AnalysisResult | null>(null)

    const analyze = async (bookId: string) => {
        setLoading(true)
        setError(null)
        setData(null)

        try {
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bookId })
            })

            const json = await res.json()
            if (!res.ok) throw new Error(json.error || 'Failed to analyze')

            setData(json.data)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, data, analyze }
}
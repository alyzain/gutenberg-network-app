import { analyzeBook } from '@/lib/analyzer'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const RequestSchema = z.object({ bookId: z.string().min(1) })

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { bookId } = RequestSchema.parse(body)

        const data = await analyzeBook(bookId)
        return NextResponse.json({ success: true, data })
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}
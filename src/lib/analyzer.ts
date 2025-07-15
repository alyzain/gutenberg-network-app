import { readFile } from 'fs/promises'
import type { Character, AnalysisResult } from '@/types/analysis'
import { callGroq } from '@/lib/groq'
import { fetchBookText } from './fetcher'
import { mergeCharacters, splitIntoChunks } from './utils'


export async function analyzeBook(bookId: string): Promise<AnalysisResult> {
    const fullText = await fetchBookText(bookId)
    return analyzeBookText(fullText)
}

export async function analyzeBookText(fullText: string): Promise<AnalysisResult> {
    const promptTemplate = await readFile('./src/prompts/analyze_characters.md', 'utf-8')

    // For MVP, truncate the text to a manageable size
    const subset = fullText.slice(0, 10000)
    const chunks = splitIntoChunks(subset)

    const results: Character[][] = []

    for (const chunk of chunks) {
        const prompt = promptTemplate.replace('"""TEXT"""', `"""\n${chunk}\n"""`)
        const parsed = await callGroq(prompt)
        if (parsed?.characters) results.push(parsed.characters)
    }

    return mergeCharacters(results.flat())
}


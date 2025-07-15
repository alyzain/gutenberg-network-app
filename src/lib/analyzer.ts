import { readFile } from 'fs/promises'
import type { Character, AnalysisResult } from '@/types/analysis'
import { callGroq } from '@/lib/groq'
import { fetchBookText } from './fetcher'
import { mergeCharacters, splitIntoChunks } from './utils'
import analyzePrompt from '@/prompts/analyze_characters.md'


export async function analyzeBook(bookId: string): Promise<AnalysisResult> {
    const fullText = await fetchBookText(bookId)
    return analyzeBookText(fullText)
}

export async function analyzeBookText(fullText: string): Promise<AnalysisResult> {

    // For MVP, truncate the text to a manageable size
    const subset = fullText.slice(0, 10000)
    const chunks = splitIntoChunks(subset)

    const prompts = chunks.map(chunk =>
        analyzePrompt.replace('"""TEXT"""', `"""\n${chunk}\n"""`)
    )

    const results = await Promise.allSettled(
        prompts.map(prompt => callGroq(prompt))
    )

    const successfulCharacters = results
        .filter((res): res is PromiseFulfilledResult<{ characters: Character[] }> =>
            res.status === 'fulfilled' && res.value?.characters
        )
        .flatMap(res => res.value.characters)

    return mergeCharacters(successfulCharacters)
}


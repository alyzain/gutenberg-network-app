import { Character, Quote } from '@/types/analysis'

export function extractQuotes(characters: Character[]): Quote[] {
    return characters
        .filter((char) => char.quote && char.quote.text.trim() !== '')
        .map((char) => char.quote)
}
import { AnalysisResult, Character } from "@/types/analysis"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitIntoChunks(text: string, maxChars = 6000): string[] {
  const paragraphs = text.split(/\n\s*\n/)
  const chunks: string[] = []
  let current = ''

  for (const p of paragraphs) {
    if ((current + p).length > maxChars) {
      chunks.push(current)
      current = ''
    }
    current += p + '\n\n'
  }
  if (current.trim()) chunks.push(current)
  return chunks
}

export function mergeCharacters(chars: Character[]): AnalysisResult {
  const map = new Map<string, Character>()

  for (const c of chars) {
    const nameKey = c.name.trim().toLowerCase()
    const existing = map.get(nameKey)

    if (!existing) {
      map.set(nameKey, { ...c })
    } else {
      existing.count += c.count

      for (const i of c.interactions) {
        const match = existing.interactions.find(x => x.name === i.name)
        match ? (match.count += i.count) : existing.interactions.push({ ...i })
      }

      if (!existing.quote && c.quote) {
        existing.quote = { ...c.quote }
      }
    }
  }

  const merged = Array.from(map.values())

  const filtered = merged.filter(c => c.count > 0 && c.interactions.length > 0)

  return { characters: filtered }
}

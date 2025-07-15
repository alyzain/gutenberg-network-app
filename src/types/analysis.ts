export interface Quote {
    speaker: string
    text: string
    sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Angry' | 'Surprised'
}

export interface Character {
    name: string
    count: number
    interactions: { name: string; count: number }[]
    quote: Quote
}

export interface AnalysisResult {
    characters: Character[]
}
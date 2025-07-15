'use client'

import { InputForm } from '@/components/form/InputForm'
import { CharacterList } from '@/components/character/CharacterList'
import { GraphView } from '@/components/graph/GraphView'
import { QuoteFeed } from '@/components/quotes/QuoteFeed'
import { useAnalyze } from '@/features/analysis/hooks/useAnalyze'
import { generateGraphFromCharacters } from '@/features/analysis/utils/graph'
import { extractQuotes } from '@/features/analysis/utils/quote'

export default function Home() {
  const { analyze, data, error, loading } = useAnalyze()

  const { nodes, edges } = generateGraphFromCharacters(data?.characters || [])
  const quotes = extractQuotes(data?.characters || [])

  return (
    <main className="p-10 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">📚 Gutenberg Analyzer</h1>
      <InputForm onSubmit={analyze} isLoading={loading} />

      {loading && <p className="text-center animate-pulse">Analyzing book...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && data && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <GraphView nodes={nodes} edges={edges} />
            </div>
            <CharacterList characters={data.characters} />
          </div>
          <QuoteFeed quotes={quotes} />
        </>
      )}
    </main>
  )
}
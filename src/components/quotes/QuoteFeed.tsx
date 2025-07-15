import { Quote } from "@/types/analysis"
import { QuoteCard } from "./QuoteCard"

interface QuoteFeedProps {
  quotes: Quote[]
}

export function QuoteFeed({ quotes }: QuoteFeedProps) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h2 className="font-bold text-lg mb-4">💬 Key Quotes</h2>
      <div className="space-y-4">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} {...quote} />
        ))}
      </div>
    </div>
  )
}
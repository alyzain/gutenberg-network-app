import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { QuoteSentimentBadge } from "./QuoteSentimentBadge"

interface Props {
  speaker: string
  text: string
  sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Angry' | 'Surprised'
}

export function QuoteCard({ speaker, text, sentiment }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base italic font-medium">“{text}”</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between text-sm text-muted-foreground">
        <span>— {speaker}</span>
        <QuoteSentimentBadge sentiment={sentiment} />
      </CardContent>
    </Card>
  )
}

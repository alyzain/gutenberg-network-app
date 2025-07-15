import { Badge } from "@/components/ui/badge"

interface Props {
  sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Angry' | 'Surprised'
}

export function QuoteSentimentBadge({ sentiment }: Props) {
  const color = {
    Positive: 'bg-green-100 text-green-700',
    Negative: 'bg-red-100 text-red-700',
    Neutral: 'bg-gray-100 text-gray-700',
    Angry: 'bg-orange-100 text-orange-700',
    Surprised: 'bg-yellow-100 text-yellow-700',
  }[sentiment]

  return <Badge className={color}>{sentiment}</Badge>
}

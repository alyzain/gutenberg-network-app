'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface InputFormProps {
  onSubmit: (bookId: string) => void
  isLoading?: boolean
}

export function InputForm({ onSubmit, isLoading = false }: InputFormProps) {
  const [bookId, setBookId] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = bookId.trim()
    if (!trimmed) return
    onSubmit(trimmed)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-2">
      <Label htmlFor="book-id" className="text-base">
        🔎 Enter Project Gutenberg Book ID
      </Label>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          id="book-id"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          placeholder="e.g. 1787 (Hamlet)"
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </Button>
      </div>
    </form>
  )
}
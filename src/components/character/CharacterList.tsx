import { Character } from '@/types/analysis'
import React from 'react'

interface CharacterListProps {
  characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="p-4 border rounded-lg bg-white max-h-[400px] overflow-y-auto">
      <h2 className="font-bold mb-2 text-lg">📋 Characters</h2>
      <ul className="space-y-3">
        {characters.map((char, charIndex) => (
          <li key={`${charIndex}-${char.name}`}>
            <p className="font-semibold">
              {char.name} ({char.count})
            </p>
            <ul className="pl-4 text-sm text-muted-foreground">
              {char.interactions.map((i, iIndex) => (
                <li key={`${iIndex}-${i.name}`}>↳ {i.name} ({i.count})</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
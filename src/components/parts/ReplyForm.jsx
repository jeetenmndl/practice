'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ReplyForm() {
  const [suggestion, setSuggestion] = useState('')

  const handleSubmit = (e) => {
    console.log('Suggestion submitted:', suggestion)
    setSuggestion('')
  }

  return (
    <Card className="p-4">
        <h3 className="text-lg font-semibold mb-2">Leave a Suggestion</h3>
        <Textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Your suggestion here..."
          className="w-full mb-2"
          rows={4}
        />
        <Button onClick={handleSubmit} disabled={!suggestion.trim()}>
          Submit Suggestion
        </Button>
    </Card>
  )
}


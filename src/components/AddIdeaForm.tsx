import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Category, NewIdea } from '../types/idea'
import { CATEGORIES, CATEGORY_INFO } from '../types/ideaMeta'

interface AddIdeaFormProps {
  onAdd: (idea: NewIdea) => void
}

function AddIdeaForm({ onAdd }: AddIdeaFormProps) {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [category, setCategory] = useState<Category>('app')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim()) return

    onAdd({ title: title.trim(), notes: notes.trim(), category })

    setTitle('')
    setNotes('')
    setCategory('app')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-3xl bg-white p-5 shadow-md shadow-leaf-100"
    >
      <h2 className="text-lg font-bold text-slate-700">Plant a new idea 🌰</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What's your idea?"
        className="w-full rounded-xl border-2 border-leaf-100 px-4 py-2 outline-none transition focus:border-leaf-400"
      />

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add some notes (optional)"
        rows={3}
        className="w-full resize-none rounded-xl border-2 border-leaf-100 px-4 py-2 outline-none transition focus:border-leaf-400"
      />

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded-full px-3 py-1 text-sm font-bold transition active:scale-95 ${
              category === c
                ? 'bg-leaf-500 text-white'
                : 'bg-leaf-100 text-leaf-600 hover:bg-leaf-200'
            }`}
          >
            {CATEGORY_INFO[c].emoji} {CATEGORY_INFO[c].label}
          </button>
        ))}
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-leaf-500 py-2 font-bold text-white transition hover:bg-leaf-600 active:scale-95"
      >
        Plant it 🌱
      </button>
    </form>
  )
}

export default AddIdeaForm
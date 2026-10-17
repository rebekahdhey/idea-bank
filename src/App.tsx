import { useState } from 'react'
import Header from './components/Header'
import IdeaCard from './components/IdeaCard'
import EmptyState from './components/EmptyState'
import AddIdeaForm from './components/AddIdeaForm'
import { nextStage } from './types/ideaMeta'
import type { Idea, NewIdea } from './types/idea'

const initialIdeas: Idea[] = [
  {
    id: 1,
    title: 'A plant-watering reminder app',
    notes: 'Tracks each plant, sends a gentle nudge, and shows a happy leaf when watered.',
    category: 'app',
    stage: 'sprout',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: 2,
    title: 'Weekly "tiny wins" newsletter',
    notes: 'A short email celebrating small progress from the week.',
    category: 'content',
    stage: 'seed',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
  },
  {
    id: 3,
    title: 'Neighborhood swap shop',
    notes: 'A monthly pop-up where people trade books, plants, and kitchen things.',
    category: 'business',
    stage: 'bloom',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9,
  },
  {
    id: 4,
    title: 'Learn to bake sourdough',
    notes: '',
    category: 'life',
    stage: 'seed',
    createdAt: Date.now() - 1000 * 60 * 60 * 3,
  },
]

const sampleIdea: Idea = {
  id: 1,
  title: 'A plant-watering reminder app',
  notes: 'Tracks each plant, sends a gentle nudge, and shows a happy leaf when watered.',
  category: 'app',
  stage: 'sprout',
  createdAt: Date.now(),
}

function App() {
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas)

  const addIdea = (newIdea: NewIdea) => {
    setIdeas((current) => [
      ...current,
      { ...newIdea, id: Date.now(), stage: 'seed', createdAt: Date.now() },
    ])
  }

  const growIdea = (id: number) => {
    setIdeas((current) =>
      current.map((idea) => {
        if (idea.id !== id) return idea
        const next = nextStage(idea.stage)
        return next ? { ...idea, stage: next } : idea
      })
    )
  }

  const deleteIdea = (id: number) => {
    setIdeas((current) => current.filter((idea) => idea.id !== id))
  }

  const sortedIdeas = [...ideas].sort((a, b) => b.createdAt - a.createdAt)

  return (
    <div className="min-h-screen px-4 py-8">
      <main className="mx-auto w-full max-w-md space-y-4">
        <Header />

        <AddIdeaForm onAdd={addIdea} />

        <section className="space-y-3">
          {sortedIdeas.length === 0 ? (
            <EmptyState />
          ) : (
            sortedIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onGrow={growIdea}
                onDelete={deleteIdea}
              />
            ))
          )}
        </section>
      </main>
    </div>
  )
}

export default App
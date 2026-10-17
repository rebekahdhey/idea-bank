export type Stage = 'seed' | 'sprout' | 'bloom'

export type Category = 'app' | 'content' | 'business' | 'life'

export interface Idea {
  id: number
  title: string
  notes: string
  category: Category
  stage: Stage
  createdAt: number
}

export type NewIdea = Omit<Idea, 'id' | 'stage' | 'createdAt'>
import type { Category, Stage } from './idea'

export const STAGES: Stage[] = ['seed', 'sprout', 'bloom']

export const STAGE_INFO: Record<Stage, { label: string; emoji: string }> = {
  seed: { label: 'Seed', emoji: '🌰' },
  sprout: { label: 'Sprout', emoji: '🌱' },
  bloom: { label: 'Bloom', emoji: '🌸' },
}

export const CATEGORIES: Category[] = ['app', 'content', 'business', 'life']

export const CATEGORY_INFO: Record<Category, { label: string; emoji: string }> = {
  app: { label: 'App', emoji: '📱' },
  content: { label: 'Content', emoji: '🎬' },
  business: { label: 'Business', emoji: '💼' },
  life: { label: 'Life', emoji: '🌈' },
}

export const nextStage = (stage: Stage): Stage | null => {
  const index = STAGES.indexOf(stage)
  return index < STAGES.length - 1 ? STAGES[index + 1] : null
}
import type { Idea, Stage } from '../types/idea'
import { CATEGORY_INFO, STAGE_INFO, nextStage } from '../types/ideaMeta'

interface IdeaCardProps {
  idea: Idea
  onGrow: (id: number) => void
  onDelete: (id: number) => void
}

const STAGE_STYLES: Record<Stage, string> = {
  seed: 'bg-cream-100 text-soil-500',
  sprout: 'bg-leaf-100 text-leaf-600',
  bloom: 'bg-bloom-100 text-bloom-400',
}

function IdeaCard({ idea, onGrow, onDelete }: IdeaCardProps) {
  const stage = STAGE_INFO[idea.stage]
  const category = CATEGORY_INFO[idea.category]
  const next = nextStage(idea.stage)
  const nextInfo = next ? STAGE_INFO[next] : null

  const planted = new Date(idea.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className="rounded-2xl bg-white p-5 shadow-md shadow-leaf-100">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${STAGE_STYLES[idea.stage]}`}
        >
          {stage.emoji} {stage.label}
        </span>
        <span className="text-xs font-semibold text-slate-400">
          Planted {planted}
        </span>
      </div>

      <h2 className="mt-3 text-lg font-bold text-slate-700">{idea.title}</h2>

      {idea.notes && (
        <p className="mt-1 line-clamp-3 text-sm text-slate-500">{idea.notes}</p>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold text-leaf-600">
          {category.emoji} {category.label}
        </p>

        <div className="flex items-center gap-3">
          {nextInfo ? (
            <button
              onClick={() => onGrow(idea.id)}
              className="rounded-full bg-leaf-500 px-3 py-1 text-xs font-bold text-white transition hover:bg-leaf-600 active:scale-95"
            >
              Grow to {nextInfo.emoji} {nextInfo.label}
            </button>
          ) : (
            <span className="text-xs font-bold text-bloom-400">Fully bloomed 🎉</span>
          )}

          <button
            onClick={() => onDelete(idea.id)}
            className="text-slate-300 transition hover:text-bloom-400 active:scale-90"
            aria-label={`Delete ${idea.title}`}
          >
            ✕
          </button>
        </div>
      </div>
    </article>
  )
}

export default IdeaCard
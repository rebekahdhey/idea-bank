const TAGLINES = [
  'Plant a thought, watch it grow.',
  'Every big idea starts as a tiny seed.',
  'Water your ideas, they bloom in time.',
  'No idea is too small for the garden.',
  'Today is a good day to plant something new.',
]

function Header() {
  const dayNumber = Math.floor(Date.now() / (1000 * 60 * 60 * 24))
  const tagline = TAGLINES[dayNumber % TAGLINES.length]

  return(
    <header className="relative overflow-hidden rounded-3xl bg-linear-to-br from-leaf-400 to-leaf-600 p-6 text-white shadow-lg shadow-leaf-200">
      <div className="relative z-10 max-w-[70%]">
        <p className="text-sm font-semibold opacity-80">My Idea Bank</p>
        <h1 className="text-3xl font-bold">Idea Garden</h1>
        <p className="mt-2 text-sm opacity-90">{tagline}</p>
      </div>

      <div className="absolute -right-4 -bottom-6 text-8xl opacity-30">🌿</div>
      <div className="absolute top-4 right-6 text-3xl">🦋</div>
    </header>
  )
}

export default Header
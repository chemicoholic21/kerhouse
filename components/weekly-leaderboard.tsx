import { TrendingUp, User } from "lucide-react"

const leaderboardData = [
  { rank: 1, name: "jongwook", handle: "jongwook", score: 16881.3 },
  { rank: 2, name: "pshihn", handle: "pshihn", score: 15241.2 },
  { rank: 3, name: "tobinsouth", handle: "tobinsouth", score: 12787.8 },
  { rank: 4, name: "trekhleb", handle: "trekhleb", score: 12340.0 },
  { rank: 5, name: "bcherny", handle: "bcherny", score: 11324.6 },
] as const

function formatRank(n: number) {
  return String(n).padStart(2, "0")
}

function formatScore(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
}

export function WeeklyLeaderboard() {
  return (
    <section className="border-2 border-dashed border-foreground/70 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Leaderboard
        </h2>
      </div>

      <div className="border-y border-foreground">
        <div className="grid grid-cols-[2.5rem_1fr_auto] gap-x-3 items-center py-2 px-2 text-xs font-bold uppercase tracking-wide text-muted-foreground border-b border-foreground">
          <span className="text-right">Rank</span>
          <span>Engineer</span>
          <span className="text-right tabular-nums">Impact Score</span>
        </div>
        <div className="divide-y divide-foreground">
          {leaderboardData.map((dev) => (
            <div
              key={dev.handle}
              className="grid grid-cols-[2.5rem_1fr_auto] gap-x-3 items-center py-2.5 px-2 hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              <span className="text-right text-sm tabular-nums">
                {formatRank(dev.rank)}
              </span>
              <div className="flex items-center gap-2 min-w-0">
                <User className="w-3.5 h-3.5 shrink-0" />
                <div className="flex flex-col min-w-0 text-sm leading-tight">
                  <span className="truncate">{dev.name}</span>
                  {dev.handle !== dev.name ? (
                    <span className="truncate text-muted-foreground text-xs">
                      {dev.handle}
                    </span>
                  ) : null}
                </div>
              </div>
              <span className="text-sm text-right tabular-nums">
                {formatScore(dev.score)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <a href="/leaderboard" className="text-sm hover:underline">
          See full leaderboard &gt;
        </a>
      </div>
    </section>
  )
}

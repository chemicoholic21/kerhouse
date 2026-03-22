import { TrendingUp, User } from "lucide-react"

const leaderboardData = [
  { rank: 1, username: "sarah_codes", score: 847 },
  { rank: 2, username: "dev_marcus", score: 712 },
  { rank: 3, username: "code_ninja", score: 689 },
  { rank: 4, username: "rust_wizard", score: 634 },
  { rank: 5, username: "py_master", score: 598 },
]

export function WeeklyLeaderboard() {
  return (
    <section className="border-2 border-dashed border-foreground/70 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Leaderboard
        </h2>
      </div>
      
      <div className="divide-y divide-foreground border-y border-foreground">
        {leaderboardData.map((dev) => (
          <div 
            key={dev.username}
            className="flex items-center justify-between py-2.5 px-2 hover:bg-foreground hover:text-background transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-4 text-right text-sm">{dev.rank}</span>
              <User className="w-3.5 h-3.5" />
              <span className="text-sm">{dev.username}</span>
            </div>
            <span className="text-sm">{dev.score}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <a href="/leaderboard" className="text-sm hover:underline">See full leaderboard &gt;</a>
      </div>
    </section>
  )
}

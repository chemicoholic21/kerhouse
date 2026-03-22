import Link from "next/link"
import { GitFork, MapPin, Star, TerminalSquare, User } from "lucide-react"
import type { Developer } from "@/lib/data"
import { repos } from "@/lib/data"
import { prototypeProfile } from "@/lib/profile-prototype"

export function UserProfileView({
  dev,
  terminalEntry,
}: {
  dev: Developer
  terminalEntry: string
}) {
  const p = prototypeProfile
  const pinnedRepos = p.pinnedRepoNames
    .map((name) => repos.find((r) => r.name === name))
    .filter((r): r is (typeof repos)[number] => r != null)

  return (
    <>
      <main className="layout-container py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-8">{dev.username}</h1>

        <section className="border-2 border-foreground p-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="border-2 border-foreground p-3 shrink-0">
              <User className="w-8 h-8" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-lg">{dev.username}</div>
              <div className="text-sm text-muted-foreground">@{dev.username}</div>
              <p className="text-sm mt-3 leading-relaxed">{p.bio}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  {dev.country}
                </span>
                <span>Primary stack: {dev.language}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {dev.skills.map((skill) => (
                  <span key={skill} className="border border-foreground px-1.5 py-0.5 text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-dashed border-foreground/70 p-5 mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
            Impact this week
          </h2>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold tabular-nums">#{p.weeklyRank}</span>
            <span className="text-muted-foreground">on the leaderboard</span>
          </div>
          <p className="text-sm tabular-nums mt-1">
            {p.weeklyScore.toLocaleString("en-US", { maximumFractionDigits: 1 })} impact score
          </p>
          <p className="text-xs text-muted-foreground mt-2">Synthetic demo — same spirit as the home leaderboard.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Skills</h2>
          <p className="text-xs text-muted-foreground mb-2">Strong in</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.skillsStrong.map((s) => (
              <span key={s} className="border border-foreground px-2 py-0.5 text-xs">
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mb-2">Also uses</p>
          <div className="flex flex-wrap gap-1.5">
            {p.skillsAlso.map((s) => (
              <span key={s} className="border border-foreground px-2 py-0.5 text-xs">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Pinned repos</h2>
          <div className="flex flex-col gap-3">
            {pinnedRepos.map((repo) => {
              const Icon = repo.icon
              return (
                <div
                  key={repo.name}
                  className="border-2 border-foreground p-4 flex flex-col sm:flex-row sm:items-start gap-3"
                >
                  <div className="border-2 border-foreground p-2 shrink-0 self-start">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-sm break-all">{repo.name}</div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{repo.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {repo.tags.map((tag) => (
                        <span key={tag} className="border border-foreground px-1.5 py-0.5 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0 sm:flex-col sm:items-end sm:gap-1">
                    <span className="flex items-center gap-1 tabular-nums">
                      <Star className="w-3.5 h-3.5" aria-hidden />
                      {typeof repo.stars === "number" ? repo.stars.toLocaleString("en-US") : repo.stars}
                    </span>
                    <span className="flex items-center gap-1 tabular-nums">
                      <GitFork className="w-3.5 h-3.5" aria-hidden />
                      {repo.forks.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="border-2 border-foreground p-5 mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Activity</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`border-2 border-foreground px-2 py-1 text-xs ${p.openToMentorship ? "bg-foreground text-background" : "opacity-50"}`}
            >
              Open to mentorship
            </span>
            <span
              className={`border-2 border-foreground px-2 py-1 text-xs ${p.openToWork ? "bg-foreground text-background" : "opacity-50"}`}
            >
              Open to work
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{p.lastActive}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Roles interest</h2>
          <p className="text-sm mb-2">
            Prefers <span className="font-medium">{p.rolesInterest.workplace}</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.rolesInterest.skills.map((s) => (
              <span key={s} className="border border-foreground px-2 py-0.5 text-xs">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="border-2 border-dashed border-foreground/70 p-4">
          <div className="flex items-center gap-2 text-sm font-bold mb-2">
            <TerminalSquare className="w-4 h-4" aria-hidden />
            Terminal
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            This profile lines up with a row in <code className="px-1 border border-foreground/50">~/devs</code>:
          </p>
          <pre className="text-xs border-2 border-foreground p-3 overflow-x-auto bg-foreground/[0.03] font-mono leading-relaxed">
            {`$ cd devs\n$ ls\n… ${terminalEntry}\n$ cat ${terminalEntry}`}
          </pre>
        </section>

        <p className="text-sm text-muted-foreground mt-8">
          <Link href="/devs" className="hover:underline underline-offset-4">
            ← Back to devs
          </Link>
        </p>
      </main>

      <footer className="border-t-2 border-dashed border-foreground/70 py-6">
        <div className="layout-container text-center text-sm">
          <p>© 2026 hackerhou.se. A home for human programmers.</p>
        </div>
      </footer>
    </>
  )
}

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Eye, GitCommit, GitPullRequest, MapPin, MessageSquare, User } from "lucide-react"
import type { Developer } from "@/lib/data"
import type { ContributionKind } from "@/lib/profile-prototype"
import { prototypeContributions, prototypeProfile } from "@/lib/profile-prototype"

const contributionIcon: Record<ContributionKind, LucideIcon> = {
  commit: GitCommit,
  pr: GitPullRequest,
  issue: MessageSquare,
  review: Eye,
}

const contributionLabel: Record<ContributionKind, string> = {
  commit: "Commit",
  pr: "PR",
  issue: "Issue",
  review: "Review",
}

export function UserProfileView({ dev }: { dev: Developer }) {
  const p = prototypeProfile

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
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Contributions</h2>
          <div className="border-y border-foreground divide-y divide-foreground">
            {prototypeContributions.map((c, i) => {
              const Icon = contributionIcon[c.kind]
              return (
                <div
                  key={`${c.repo}-${c.title}-${i}`}
                  className="flex items-start gap-3 py-[11px] px-1 hover:bg-foreground/[0.03] transition-colors"
                >
                  <div className="border border-foreground p-1.5 shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {contributionLabel[c.kind]}
                      </span>
                      <span className="text-sm font-mono break-all text-muted-foreground">{c.repo}</span>
                    </div>
                    <p className="text-sm mt-1 leading-snug">{c.title}</p>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums shrink-0 pt-0.5">{c.time}</span>
                </div>
              )
            })}
          </div>
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

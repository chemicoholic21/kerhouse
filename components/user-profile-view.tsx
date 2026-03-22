import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Eye, GitCommit, GitPullRequest, MapPin, MessageSquare, User } from "lucide-react"
import type { Developer } from "@/lib/data"
import type { ContributionKind } from "@/lib/profile-prototype"
import { prototypeContributions, prototypeProfile } from "@/lib/profile-prototype"
import { ProfileMessageSidebar } from "@/components/profile-message-button"

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
      <main className="layout-container py-8">
        <h1 className="text-2xl font-bold mb-8 lg:mb-10 text-highlight">{dev.username}</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10">
          <section className="border-2 border-foreground p-5 sm:p-6 lg:col-span-8 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="border-2 border-foreground p-3 shrink-0 w-fit">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-highlight" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-lg sm:text-xl text-highlight">{dev.username}</div>
                <div className="text-sm text-muted-foreground">@{dev.username}</div>
                <p className="text-sm mt-3 leading-relaxed max-w-prose">{p.bio}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                    {dev.country}
                  </span>
                  <span>Primary stack: {dev.language}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {dev.skills.map((skill) => (
                    <span key={skill} className="border border-foreground px-1.5 py-0.5 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="flex flex-col gap-8 lg:col-span-4 lg:row-span-2 lg:sticky lg:top-24 lg:self-start min-w-0">
            <ProfileMessageSidebar targetUsername={dev.username} />

            <section className="border-2 border-dashed border-foreground/70 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-highlight mb-3">
                Impact this week
              </h2>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold tabular-nums">#{p.weeklyRank}</span>
                <span className="text-muted-foreground text-sm">on the leaderboard</span>
              </div>
              <p className="text-sm tabular-nums mt-2">
                {p.weeklyScore.toLocaleString("en-US", { maximumFractionDigits: 1 })} impact score
              </p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Synthetic demo — same spirit as the home leaderboard.
              </p>
            </section>

            <section className="border-2 border-foreground p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-highlight mb-4">Skills</h2>
              <p className="text-xs text-muted-foreground mb-2">Strong in</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
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
          </aside>

          <section className="border-2 border-foreground lg:col-span-8 min-w-0 flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-wide text-highlight px-4 sm:px-5 pt-4 sm:pt-5 pb-3 border-b border-foreground">
              Contributions
            </h2>
            <div className="divide-y divide-foreground">
              {prototypeContributions.map((c, i) => {
                const Icon = contributionIcon[c.kind]
                return (
                  <div
                    key={`${c.repo}-${c.title}-${i}`}
                    className="flex items-start gap-3 py-[11px] px-4 sm:px-5 hover:bg-foreground/[0.03] transition-colors"
                  >
                    <div className="border border-foreground p-1.5 shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-highlight" aria-hidden strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-xs font-bold uppercase tracking-wide text-highlight">
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
        </div>

        <p className="text-sm text-muted-foreground mt-10 lg:mt-12">
          <Link href="/devs" className="hover:underline underline-offset-4">
            ← Back to devs
          </Link>
        </p>
      </main>

      <footer className="border-t-2 border-dashed border-foreground/70 py-6">
        <div className="layout-container text-center text-sm">
          <p>
            © 2026 <span className="text-brand">hackerhou.se</span>. A home for <span className="text-highlight">human</span> programmers.
          </p>
        </div>
      </footer>
    </>
  )
}

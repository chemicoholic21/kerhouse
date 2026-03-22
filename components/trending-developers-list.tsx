import { User } from "lucide-react"
import { trendingDevelopers } from "@/lib/trending-developers"

export function TrendingDevelopersList() {
  return (
    <div className="border-2 border-dashed border-foreground/70 p-6">
      <h2 className="text-xl font-bold mb-1">Trending developers</h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are the developers building the hot tools today.
      </p>
      <ol className="divide-y divide-foreground border-y border-foreground list-none p-0 m-0">
        {trendingDevelopers.map((dev) => {
          const profileHref = `https://github.com/${dev.handle}`
          return (
            <li
              key={dev.handle}
              className="grid grid-cols-[2rem_2.25rem_1fr] sm:grid-cols-[2.5rem_2.5rem_1fr] gap-3 py-4 first:pt-0 items-start"
            >
              <span className="text-sm font-bold tabular-nums text-right pt-0.5">
                {dev.rank}
              </span>
              <div className="border-2 border-foreground p-1.5 shrink-0">
                <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
              </div>
              <div className="min-w-0 space-y-1">
                <a
                  href={profileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:underline underline-offset-2"
                >
                  @{dev.handle}
                </a>
                <p className="text-sm text-foreground">{dev.displayName}</p>
                {dev.worksFor && (
                  <p className="text-xs text-muted-foreground">
                    Works for{" "}
                    <span className="text-foreground/90">{dev.worksFor}</span>
                  </p>
                )}
                {dev.joined && (
                  <p className="text-xs text-muted-foreground">{dev.joined}</p>
                )}
                {dev.popularRepo && (
                  <div className="mt-2 pt-2 border-t border-foreground/30">
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1">
                      Popular repo
                    </p>
                    <a
                      href={`https://github.com/${dev.handle}/${dev.popularRepo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline underline-offset-2 break-all"
                    >
                      {dev.popularRepo.name}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
                      {dev.popularRepo.description}
                    </p>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

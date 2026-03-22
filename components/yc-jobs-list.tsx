import { ycJobApplyUrl, ycStartupJobs } from "@/lib/yc-startup-jobs"

export function YcJobsList() {
  return (
    <div className="border-2 border-dashed border-foreground/70 p-6">
      <h2 className="text-xl font-bold mb-2">Jobs at YC startups</h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are jobs at YC startups. See more at{" "}
        <a
          href="https://www.ycombinator.com/jobs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          ycombinator.com/jobs
        </a>
        .
      </p>
      <ol className="divide-y divide-foreground border-y border-foreground list-none p-0 m-0">
        {ycStartupJobs.map((job) => (
          <li key={job.rank} className="flex gap-3 py-3 first:pt-0 items-start">
            <span className="shrink-0 w-7 text-right text-sm tabular-nums pt-0.5">
              {job.rank}.
            </span>
            <div className="min-w-0 flex-1">
              <a
                href={ycJobApplyUrl(job)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline underline-offset-2"
              >
                {job.headline}
              </a>
              <span className="text-xs text-muted-foreground"> ({job.linkHost})</span>
              <div className="text-xs text-muted-foreground mt-1 sm:hidden">
                {job.posted}
              </div>
            </div>
            <span className="hidden sm:block shrink-0 text-xs text-muted-foreground whitespace-nowrap pt-0.5">
              {job.posted}
            </span>
          </li>
        ))}
      </ol>
      <p className="text-sm text-muted-foreground mt-4">
        <a
          href="https://www.ycombinator.com/jobs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          More
        </a>
      </p>
    </div>
  )
}

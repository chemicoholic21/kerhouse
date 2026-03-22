import { GitFork, Hash, Star } from "lucide-react"
import Link from "next/link"

const trendingTags = [
  "javascript",
  "typescript",
  "rust",
  "golang",
  "python",
  "react",
  "nextjs",
  "ai",
  "machine-learning",
  "cli-tools",
  "devtools",
  "open-source",
  "web3",
  "security",
  "databases",
]

const trendingRepos = [
  {
    owner: "FujiwaraChoki",
    repo: "MoneyPrinterV2",
    description: "Automate the process of making money online.",
    language: "Python",
    stars: 17856,
    forks: 1902,
    builtBy: ["FujiwaraChoki", "claude", "supperfreddo", "SaroAntonelloLovito", "TomyDiNero"],
    starsToday: 379,
  },
  {
    owner: "systemd",
    repo: "systemd",
    description: "The systemd System and Service Manager",
    language: "C",
    stars: 15737,
    forks: 4354,
    builtBy: ["poettering", "yuwata", "keszybz", "daandemeyer", "bluca"],
    starsToday: 112,
  },
  {
    owner: "aquasecurity",
    repo: "trivy",
    description:
      "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
    language: "Go",
    stars: 33388,
    forks: 125,
    builtBy: ["knqyf263", "DmitriyLewen", "dependabot", "nikpivkin", "simar7"],
    starsToday: 127,
  },
  {
    owner: "Crosstalk-Solutions",
    repo: "project-nomad",
    description:
      "Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere.",
    language: "TypeScript",
    stars: 6870,
    forks: 646,
    builtBy: ["jakeaturner", "claude", "chriscrosstalk", "cosmistack-bot", "dependabot"],
    starsToday: 2054,
  },
  {
    owner: "opendataloader-project",
    repo: "opendataloader-pdf",
    description: "PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.",
    language: "Java",
    stars: 7917,
    forks: 535,
    builtBy: ["claude", "bundolee", "MaximPlusov", "LonelyMidoriya", "hnc-sujicho"],
    starsToday: 954,
  },
  {
    owner: "jarrodwatts",
    repo: "claude-hud",
    description:
      "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
    language: "JavaScript",
    stars: 10486,
    forks: 448,
    builtBy: ["jarrodwatts", "claude", "github-actions", "dependabot", "melon-hub"],
    starsToday: 957,
  },
  {
    owner: "protocolbuffers",
    repo: "protobuf",
    description: "Protocol Buffers - Google's data interchange format",
    language: "C++",
    stars: 70950,
    forks: 16083,
    builtBy: ["protobuf-github-bot", "haberman", "protobuf-team-bot", "mkruskal-google", "xfxyjwf"],
    starsToday: 7,
  },
  {
    owner: "vllm-project",
    repo: "vllm-omni",
    description: "A framework for efficient model inference with omni-modality models",
    language: "Python",
    stars: 3521,
    forks: 587,
    builtBy: ["hsliuustc0106", "tzhouam", "gcanlin", "Gaohan123", "SamitHuang"],
    starsToday: 82,
  },
  {
    owner: "louis-e",
    repo: "arnis",
    description:
      "Generate any location from the real world in Minecraft with a high level of detail.",
    language: "Rust",
    stars: 12248,
    forks: 1014,
    builtBy: ["louis-e", "dependabot", "Oleg4260", "akx", "XianlinSheng"],
    starsToday: 680,
  },
] as const

function formatCount(n: number) {
  return n.toLocaleString("en-US")
}

export function ExploreProjects() {
  return (
    <section className="border-2 border-dashed border-foreground/70 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Hash className="w-5 h-5" />
        <h2 className="text-xl font-bold">Explore Projects</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {trendingTags.map((tag) => (
          <Link
            key={tag}
            href={`/repos?tag=${tag}`}
            className="border-2 border-foreground/50 px-3 py-1 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
          Trending repositories
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          See what the community is most excited about today.
        </p>
        <ul className="max-h-[min(32rem,70vh)] overflow-y-auto divide-y divide-foreground border-y border-foreground -mx-1">
          {trendingRepos.map((r) => {
            const href = `https://github.com/${r.owner}/${r.repo}`
            return (
              <li key={`${r.owner}/${r.repo}`} className="py-3 px-1">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:underline underline-offset-2"
                >
                  <span className="text-sm font-semibold">
                    {r.owner} / {r.repo}
                  </span>
                </a>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{r.description}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{r.language}</span>
                  <span className="inline-flex items-center gap-0.5 tabular-nums">
                    <Star className="w-3 h-3" aria-hidden />
                    {formatCount(r.stars)}
                  </span>
                  <span className="inline-flex items-center gap-0.5 tabular-nums">
                    <GitFork className="w-3 h-3" aria-hidden />
                    {formatCount(r.forks)}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
                  Built by{" "}
                  {r.builtBy.map((u, i) => (
                    <span key={u}>
                      {i > 0 ? " " : ""}
                      <span className="text-foreground/90">@{u}</span>
                    </span>
                  ))}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1 tabular-nums">
                  {formatCount(r.starsToday)} stars today
                </p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mt-4">
        <Link href="/repos" className="text-sm hover:underline">
          Browse all repos &gt;
        </Link>
      </div>
    </section>
  )
}

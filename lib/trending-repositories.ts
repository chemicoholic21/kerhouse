export type TrendingRepository = {
  owner: string
  repo: string
  description: string
  language: string
  stars: number
  forks: number
  builtBy: readonly string[]
  starsToday: number
}

/** Example data in the spirit of GitHub Trending (not live). */
export const trendingRepositories: TrendingRepository[] = [
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
]

export function formatRepoCount(n: number) {
  return n.toLocaleString("en-US")
}

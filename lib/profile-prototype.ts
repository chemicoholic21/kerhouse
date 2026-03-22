/** Shared demo copy for user profiles (identity comes from Developer + URL) */

export type ContributionKind = "commit" | "pr" | "issue" | "review"

export interface PrototypeContribution {
  kind: ContributionKind
  repo: string
  title: string
  time: string
}

export const prototypeContributions: readonly PrototypeContribution[] = [
  {
    kind: "pr",
    repo: "jarrodwatts/claude-hud",
    title: "feat: surface active tool calls in status strip",
    time: "2 days ago",
  },
  {
    kind: "commit",
    repo: "jarrodwatts/claude-hud",
    title: "chore: bump telemetry schema",
    time: "3 days ago",
  },
  {
    kind: "issue",
    repo: "protocolbuffers/protobuf",
    title: "Document field presence edge cases",
    time: "5 days ago",
  },
  {
    kind: "pr",
    repo: "Crosstalk-Solutions/project-nomad",
    title: "docs: offline update checklist",
    time: "1 week ago",
  },
  {
    kind: "review",
    repo: "vllm-project/vllm-omni",
    title: "Reviewed multimodal batching proposal",
    time: "1 week ago",
  },
  {
    kind: "commit",
    repo: "aquasecurity/trivy",
    title: "fix: skip empty layer digests in cache key",
    time: "2 weeks ago",
  },
]

export const prototypeProfile = {
  bio: "Building developer tools, Claude plugins, and things that help humans ship.",
  weeklyRank: 2,
  weeklyScore: 15_241.2,
  skillsStrong: ["JavaScript", "React", "TypeScript"] as const,
  skillsAlso: ["Python", "Docker"] as const,
} as const

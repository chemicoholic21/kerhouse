/** Shared demo copy for user profiles (identity comes from Developer + URL) */

export const prototypeProfile = {
  bio: "Building developer tools, Claude plugins, and things that help humans ship.",
  weeklyRank: 2,
  weeklyScore: 15_241.2,
  skillsStrong: ["JavaScript", "React", "TypeScript"] as const,
  skillsAlso: ["Python", "Docker"] as const,
  openToMentorship: true,
  openToWork: true,
  lastActive: "Active this week",
  rolesInterest: {
    workplace: "Remote",
    skills: ["TypeScript", "Open source", "ML / AI"] as const,
  },
  pinnedRepoNames: [
    "jarrodwatts/claude-hud",
    "Crosstalk-Solutions/project-nomad",
    "protocolbuffers/protobuf",
  ] as const,
} as const

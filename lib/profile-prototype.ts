/** Static sample for /profile — swap for real user data later */

export const prototypeProfile = {
  username: "jarrodwatts",
  displayName: "Jarrod Watts",
  bio: "Building developer tools, Claude plugins, and things that help humans ship.",
  country: "Australia",
  primaryLanguage: "JavaScript",
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
  /** Matches `ls` in ~/devs after cd devs (1-based index_username) */
  devsTerminalEntry: "6_jarrodwatts",
  pinnedRepoNames: [
    "jarrodwatts/claude-hud",
    "Crosstalk-Solutions/project-nomad",
    "protocolbuffers/protobuf",
  ] as const,
} as const

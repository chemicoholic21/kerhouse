export type TrendingDeveloperPopularRepo = {
  name: string
  description: string
}

export type TrendingDeveloper = {
  rank: number
  handle: string
  displayName: string
  popularRepo?: TrendingDeveloperPopularRepo
  /** e.g. "Nvidia" or "@VoltAgent" */
  worksFor?: string
  joined?: string
}

/** Example data in the spirit of GitHub Trending Developers (not live). */
export const trendingDevelopers: TrendingDeveloper[] = [
  {
    rank: 1,
    handle: "njbrake",
    displayName: "Nathan Brake",
    popularRepo: {
      name: "agent-of-empires",
      description:
        "Claude Code, OpenCode, Mistral Vibe, Codex CLI, Gemini CLI, Pi.dev, Copilot CLI Coding Agent Terminal Session manager via tmux and git Wo…",
    },
  },
  {
    rank: 2,
    handle: "azure-sdk",
    displayName: "Azure SDK Bot",
    popularRepo: {
      name: "azure-sdk-for-js",
      description: "Microsoft Azure SDK for JavaScript (NodeJS & Browser)",
    },
  },
  {
    rank: 3,
    handle: "1c7",
    displayName: "郑诚 (Cheng Zheng)",
    popularRepo: {
      name: "chinese-independent-developer",
      description:
        "👩🏿‍💻👨🏾‍💻👩🏼‍💻👨🏽‍💻👩🏻‍💻中国独立开发者项目列表 -- 分享大家都在做什么",
    },
  },
  {
    rank: 4,
    handle: "peters",
    displayName: "Peter Rekdal Khan-Sunde",
    popularRepo: {
      name: "horizon",
      description:
        "GPU-accelerated spatial terminal observatory — manage terminals, AI agents, and dev tools on an infinite canvas",
    },
  },
  {
    rank: 5,
    handle: "bradygaster",
    displayName: "Brady Gaster",
    popularRepo: {
      name: "squad",
      description: "Squad: AI agent teams for any project",
    },
  },
  {
    rank: 6,
    handle: "jarrodwatts",
    displayName: "Jarrod Watts",
    popularRepo: {
      name: "claude-hud",
      description:
        "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
    },
  },
  {
    rank: 7,
    handle: "ColeMurray",
    displayName: "Cole Murray",
    popularRepo: {
      name: "background-agents",
      description: "An open-source background agents coding system",
    },
  },
  {
    rank: 8,
    handle: "davideast",
    displayName: "David East",
    popularRepo: {
      name: "stitch-mcp",
      description:
        "A CLI for moving AI-generated UI designs from Google’s Stitch platform into your development workflow.",
    },
  },
  {
    rank: 9,
    handle: "hkaiser",
    displayName: "Hartmut Kaiser",
    joined: "Joined on Jan 16, 2011",
  },
  {
    rank: 10,
    handle: "lukasmasuch",
    displayName: "Lukas Masuch",
    popularRepo: {
      name: "best-of-ml-python",
      description:
        "🏆 A ranked list of awesome machine learning Python libraries. Updated weekly.",
    },
  },
  {
    rank: 11,
    handle: "homanp",
    displayName: "Ismail Pelaseyed",
    popularRepo: {
      name: "infinite-monitor",
      description: "Monitor anything in real time",
    },
  },
  {
    rank: 12,
    handle: "elie222",
    displayName: "Elie Steinbock",
    popularRepo: {
      name: "inbox-zero",
      description:
        "The world's best AI personal assistant for email. Open source app to help you reach inbox zero fast.",
    },
  },
  {
    rank: 13,
    handle: "ko3n1g",
    displayName: "oliver könig",
    worksFor: "Nvidia",
  },
  {
    rank: 14,
    handle: "JonnyBurger",
    displayName: "Jonny Burger",
    popularRepo: {
      name: "whats-new-in-remotion",
      description: "Video for Remotion YouTube channel, edited with Claude Code",
    },
  },
  {
    rank: 15,
    handle: "omeraplak",
    displayName: "Omer Aplak",
    worksFor: "@VoltAgent",
  },
  {
    rank: 16,
    handle: "jamiepine",
    displayName: "Jamie Pine",
    popularRepo: {
      name: "voicebox",
      description: "The open-source voice synthesis studio",
    },
  },
  {
    rank: 17,
    handle: "RichardAtCT",
    displayName: "Richard A",
    popularRepo: {
      name: "claude-code-telegram",
      description:
        "A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere wit…",
    },
  },
  {
    rank: 18,
    handle: "theovilardo",
    displayName: "theovilardo",
    popularRepo: {
      name: "PixelPlayer",
      description:
        "privacy-first Android music player built with Material 3 Expressive. Play offline, sync lyrics, fine-tune with equalizer presets, and cas…",
    },
  },
  {
    rank: 19,
    handle: "dreamhunter2333",
    displayName: "Dream Hunter",
    popularRepo: {
      name: "cloudflare_temp_email",
      description:
        "CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",
    },
  },
  {
    rank: 20,
    handle: "mitchellh",
    displayName: "Mitchell Hashimoto",
    popularRepo: {
      name: "vouch",
      description:
        "A community trust management system based on explicit vouches to participate.",
    },
  },
  {
    rank: 21,
    handle: "niels9001",
    displayName: "Niels Laute",
    popularRepo: {
      name: "ColorPickerUX",
      description: "A XAML UX concept for a Windows color picker",
    },
  },
  {
    rank: 22,
    handle: "ruvnet",
    displayName: "rUv",
    popularRepo: {
      name: "RuView",
      description:
        "π RuView: WiFi DensePose turns commodity WiFi signals into real-time human pose estimation, vital sign monitoring, and presence detection…",
    },
  },
  {
    rank: 23,
    handle: "rolfbjarne",
    displayName: "Rolf Bjarne Kvinge",
    worksFor: "@Microsoft",
  },
  {
    rank: 24,
    handle: "jackwener",
    displayName: "jakevin",
    popularRepo: {
      name: "opencli",
      description:
        "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a …",
    },
  },
  {
    rank: 25,
    handle: "0xSero",
    displayName: "0xSero",
    popularRepo: {
      name: "reap-expert-swap",
      description: "How much experts do we need to serve a model?",
    },
  },
]

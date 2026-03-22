import { Zap, MessageSquare, FolderSync, Brain, Cloud, Database, LucideIcon } from "lucide-react"

export type Difficulty = "beginner" | "intermediate" | "advanced"
export type Category = "all" | "api" | "security" | "tools" | "ml" | "devops" | "database"

export interface Repo {
  name: string
  description: string
  tags: string[]
  stars: string | number
  forks: number
  icon: LucideIcon
  category: Category
  difficulty: Difficulty
  language: string
}

export interface Developer {
  username: string
  skills: string[]
  repos: number
  followers: number
  language: string
  country: string
}

export interface Role {
  title: string
  company: string
  location: string
  tags: string[]
}

export const repos: Repo[] = [
  {
    name: "FujiwaraChoki/MoneyPrinterV2",
    description: "Automate the process of making money online.",
    tags: ["Python", "379 stars today"],
    stars: 17856,
    forks: 1902,
    icon: Zap,
    category: "tools",
    difficulty: "intermediate",
    language: "Python",
  },
  {
    name: "systemd/systemd",
    description: "The systemd System and Service Manager",
    tags: ["C", "112 stars today"],
    stars: 15737,
    forks: 4354,
    icon: Cloud,
    category: "devops",
    difficulty: "advanced",
    language: "C",
  },
  {
    name: "aquasecurity/trivy",
    description:
      "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
    tags: ["Go", "127 stars today"],
    stars: 33388,
    forks: 125,
    icon: MessageSquare,
    category: "security",
    difficulty: "advanced",
    language: "Go",
  },
  {
    name: "Crosstalk-Solutions/project-nomad",
    description:
      "Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere.",
    tags: ["TypeScript", "2,054 stars today"],
    stars: 6870,
    forks: 646,
    icon: FolderSync,
    category: "tools",
    difficulty: "advanced",
    language: "TypeScript",
  },
  {
    name: "opendataloader-project/opendataloader-pdf",
    description:
      "PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.",
    tags: ["Java", "954 stars today"],
    stars: 7917,
    forks: 535,
    icon: Database,
    category: "tools",
    difficulty: "intermediate",
    language: "Java",
  },
  {
    name: "jarrodwatts/claude-hud",
    description:
      "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
    tags: ["JavaScript", "957 stars today"],
    stars: 10486,
    forks: 448,
    icon: Brain,
    category: "tools",
    difficulty: "intermediate",
    language: "JavaScript",
  },
  {
    name: "protocolbuffers/protobuf",
    description: "Protocol Buffers - Google's data interchange format",
    tags: ["C++", "7 stars today"],
    stars: 70950,
    forks: 16083,
    icon: Zap,
    category: "api",
    difficulty: "advanced",
    language: "C++",
  },
  {
    name: "vllm-project/vllm-omni",
    description:
      "A framework for efficient model inference with omni-modality models",
    tags: ["Python", "82 stars today"],
    stars: 3521,
    forks: 587,
    icon: Brain,
    category: "ml",
    difficulty: "advanced",
    language: "Python",
  },
  {
    name: "louis-e/arnis",
    description:
      "Generate any location from the real world in Minecraft with a high level of detail.",
    tags: ["Rust", "680 stars today"],
    stars: 12248,
    forks: 1014,
    icon: FolderSync,
    category: "tools",
    difficulty: "intermediate",
    language: "Rust",
  },
]

export const developers: Developer[] = [
  { username: "njbrake", skills: ["TypeScript", "React", "Python"], repos: 62, followers: 9100, language: "TypeScript", country: "USA" },
  { username: "azure-sdk", skills: ["Python", "Go", "Docker"], repos: 188, followers: 8200, language: "Python", country: "USA" },
  { username: "1c7", skills: ["React", "TypeScript", "Rust"], repos: 94, followers: 7800, language: "TypeScript", country: "Japan" },
  { username: "peters", skills: ["Go", "Kubernetes", "AWS"], repos: 51, followers: 6500, language: "Go", country: "UK" },
  { username: "bradygaster", skills: ["TypeScript", "React", "Docker"], repos: 73, followers: 5900, language: "TypeScript", country: "USA" },
  { username: "jarrodwatts", skills: ["JavaScript", "React", "Python"], repos: 88, followers: 11200, language: "JavaScript", country: "Australia" },
  { username: "ColeMurray", skills: ["Python", "Rust", "Kubernetes"], repos: 45, followers: 4800, language: "Python", country: "USA" },
  { username: "davideast", skills: ["TypeScript", "Go", "AWS"], repos: 56, followers: 9200, language: "TypeScript", country: "USA" },
  { username: "hkaiser", skills: ["Rust", "Go", "Docker"], repos: 412, followers: 3400, language: "Rust", country: "Germany" },
  { username: "lukasmasuch", skills: ["Python", "Kubernetes", "AWS"], repos: 67, followers: 5100, language: "Python", country: "Germany" },
  { username: "homanp", skills: ["Python", "Docker", "Go"], repos: 39, followers: 4200, language: "Python", country: "Sweden" },
  { username: "elie222", skills: ["TypeScript", "React", "Python"], repos: 58, followers: 6700, language: "TypeScript", country: "Israel" },
  { username: "ko3n1g", skills: ["Python", "Kubernetes", "AWS"], repos: 44, followers: 8900, language: "Python", country: "USA" },
  { username: "JonnyBurger", skills: ["TypeScript", "React", "Docker"], repos: 91, followers: 13400, language: "TypeScript", country: "Switzerland" },
  { username: "omeraplak", skills: ["TypeScript", "React", "Go"], repos: 52, followers: 6100, language: "TypeScript", country: "Turkey" },
  { username: "jamiepine", skills: ["JavaScript", "React", "Python"], repos: 48, followers: 7200, language: "JavaScript", country: "UK" },
  { username: "RichardAtCT", skills: ["Python", "Docker", "Kubernetes"], repos: 36, followers: 3900, language: "Python", country: "USA" },
  { username: "theovilardo", skills: ["Rust", "Go", "AWS"], repos: 29, followers: 2800, language: "Rust", country: "Italy" },
  { username: "dreamhunter2333", skills: ["Go", "Kubernetes", "Docker"], repos: 71, followers: 5500, language: "Go", country: "China" },
  { username: "mitchellh", skills: ["Go", "Rust", "Kubernetes"], repos: 156, followers: 22100, language: "Go", country: "USA" },
  { username: "niels9001", skills: ["TypeScript", "React", "AWS"], repos: 63, followers: 4400, language: "TypeScript", country: "Netherlands" },
  { username: "ruvnet", skills: ["Python", "Rust", "Docker"], repos: 77, followers: 5100, language: "Python", country: "USA" },
  { username: "rolfbjarne", skills: ["TypeScript", "Go", "Kubernetes"], repos: 203, followers: 9800, language: "TypeScript", country: "Norway" },
  { username: "jackwener", skills: ["Rust", "Go", "AWS"], repos: 54, followers: 4600, language: "Rust", country: "China" },
  { username: "0xSero", skills: ["Python", "Kubernetes", "Docker"], repos: 33, followers: 3100, language: "Python", country: "USA" },
]

export const languages = [
  { value: "all", label: "All" },
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "Go", label: "Go" },
  { value: "Java", label: "Java" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "Rust", label: "Rust" },
  { value: "TypeScript", label: "TypeScript" },
]

export const countries = [
  { value: "all", label: "All" },
  { value: "Australia", label: "Australia" },
  { value: "Brazil", label: "Brazil" },
  { value: "Canada", label: "Canada" },
  { value: "China", label: "China" },
  { value: "France", label: "France" },
  { value: "Germany", label: "Germany" },
  { value: "India", label: "India" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Japan", label: "Japan" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Norway", label: "Norway" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Turkey", label: "Turkey" },
  { value: "UK", label: "UK" },
  { value: "USA", label: "USA" },
]

export const skillsList = [
  { value: "all", label: "All" },
  { value: "React", label: "React" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Python", label: "Python" },
  { value: "Rust", label: "Rust" },
  { value: "Go", label: "Go" },
  { value: "Docker", label: "Docker" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "AWS", label: "AWS" },
]

export const roles: Role[] = [
  { title: "Ndea (YC W26) is hiring a symbolic RL search guidance lead", company: "Ndea", location: "Remote", tags: ["3 days ago", "ndea.com"] },
  { title: "Spice Data (YC S19) Is Hiring a Product Specialist", company: "Spice Data", location: "Remote", tags: ["4 days ago", "ycombinator.com"] },
  { title: "AnswerThis (YC F25) Is Hiring", company: "AnswerThis", location: "Remote", tags: ["5 days ago", "ycombinator.com"] },
  { title: "Kaizen (YC P25) Hiring Eng, GTM, Cos to Automate BPOs", company: "Kaizen", location: "Remote", tags: ["5 days ago", "kaizenautomation.com"] },
  { title: "Nango (YC W23, API Access for Agents and Apps) Is Hiring", company: "Nango", location: "Remote", tags: ["5 days ago", "ashbyhq.com"] },
  { title: "9 Mothers Defense (YC P26) Is Hiring in Austin", company: "9 Mothers Defense", location: "Austin, TX", tags: ["7 days ago", "ashbyhq.com"] },
  { title: "Converge (YC S23) Is Hiring a Founding Platform Engineer (NYC, Onsite)", company: "Converge", location: "New York, NY", tags: ["9 days ago", "runconverge.com"] },
  { title: "Hive (YC S14) is hiring scrappy product managers and product/data engineers", company: "Hive", location: "Remote", tags: ["9 days ago", "ashbyhq.com"] },
  { title: "Meticulous (YC S21) is hiring to redefine software dev", company: "Meticulous", location: "Remote", tags: ["10 days ago", "ashbyhq.com"] },
  { title: "SigNoz (YC W21) is hiring for engineering, growth and product roles", company: "SigNoz", location: "Remote", tags: ["14 days ago", "signoz.io"] },
  { title: "Multifactor (YC F25) Is Hiring an Engineering Lead", company: "Multifactor", location: "Remote", tags: ["15 days ago", "ycombinator.com"] },
  { title: "Stardex (YC S21) is hiring customer success engineers", company: "Stardex", location: "Remote", tags: ["15 days ago", "ycombinator.com"] },
  { title: "Structured AI (YC F25) Is Hiring", company: "Structured AI", location: "Remote", tags: ["16 days ago", "ycombinator.com"] },
  { title: "Roboflow (YC S20) Is Hiring a Security Engineer for AI Infra", company: "Roboflow", location: "Remote", tags: ["17 days ago", "roboflow.com"] },
  { title: "Jiga (YC W21) Is Hiring", company: "Jiga", location: "Remote", tags: ["17 days ago", "jiga.io"] },
  { title: "Reflex (YC W23) Is Hiring Software Engineers – Python", company: "Reflex", location: "Remote", tags: ["19 days ago", "ycombinator.com"] },
  { title: "Kyber (YC W23) Is Hiring an Enterprise Account Executive", company: "Kyber", location: "Remote", tags: ["22 days ago", "ycombinator.com"] },
  { title: "Ubicloud (YC W24): Software Engineer – $95-$250K in Turkey, Netherlands, CA", company: "Ubicloud", location: "Turkey · NL · CA", tags: ["22 days ago", "ycombinator.com"] },
  { title: "LiteLLM (YC W23): Founding Reliability Engineer – $200K-$270K and 0.5-1.0% equity", company: "LiteLLM", location: "Remote", tags: ["23 days ago", "ycombinator.com"] },
  { title: "Bild AI (YC W25) Is Hiring Interns to Make Housing Affordable", company: "Bild AI", location: "Remote", tags: ["23 days ago", "workatastartup.com"] },
  { title: "Hightouch (YC S19) Is Hiring", company: "Hightouch", location: "Remote", tags: ["23 days ago", "hightouch.com"] },
  { title: "Trellis AI (YC W24) is hiring deployment lead to accelerate medication access", company: "Trellis AI", location: "Remote", tags: ["24 days ago", "ycombinator.com"] },
  { title: "Event Horizon Labs (YC W24) Is Hiring", company: "Event Horizon Labs", location: "Remote", tags: ["24 days ago", "ycombinator.com"] },
  { title: "Corgi Labs (YC W23) Is Hiring", company: "Corgi Labs", location: "Remote", tags: ["25 days ago", "ycombinator.com"] },
  { title: "Verge (YC S15) Is Hiring a Director of Computational Biology and AI Scientists/Eng", company: "Verge", location: "Remote", tags: ["25 days ago", "ashbyhq.com"] },
  { title: "SIM (YC X25) Is Hiring the Best Engineers in San Francisco", company: "SIM", location: "San Francisco, CA", tags: ["26 days ago", "ycombinator.com"] },
  { title: "Hadrius (YC W23) Is Hiring Designers Who Code", company: "Hadrius", location: "Remote", tags: ["26 days ago", "ycombinator.com"] },
  { title: "Bitmovin (YC S15) Is Hiring Interns in AI for Summer 2026 in Austria", company: "Bitmovin", location: "Austria", tags: ["26 days ago", "bitmovin.com"] },
  { title: "Padlet (YC W13) Is Hiring in San Francisco and Singapore", company: "Padlet", location: "San Francisco · Singapore", tags: ["28 days ago", "padlet.jobs"] },
  { title: "Legion Health (YC) Is Hiring Cracked SWEs for Autonomous Mental Health", company: "Legion Health", location: "Remote", tags: ["29 days ago", "ashbyhq.com"] },
]

export const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "api", label: "API" },
  { value: "security", label: "Security" },
  { value: "tools", label: "Tools" },
  { value: "ml", label: "ML" },
  { value: "devops", label: "DevOps" },
  { value: "database", label: "Database" },
]

export const difficulties: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
]

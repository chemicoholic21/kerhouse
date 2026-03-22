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
  { username: "sarah_codes", skills: ["TypeScript", "React", "Node.js"], repos: 47, followers: 1234, language: "TypeScript", country: "USA" },
  { username: "dev_marcus", skills: ["Go", "Python", "Docker"], repos: 32, followers: 892, language: "Go", country: "Germany" },
  { username: "code_ninja", skills: ["JavaScript", "C++", "Rust"], repos: 56, followers: 2341, language: "JavaScript", country: "Japan" },
  { username: "rust_wizard", skills: ["Rust", "Zig", "WebAssembly"], repos: 28, followers: 1567, language: "Rust", country: "UK" },
  { username: "py_master", skills: ["Python", "Julia", "ML"], repos: 41, followers: 987, language: "Python", country: "France" },
  { username: "frontend_guru", skills: ["React", "Vue", "CSS"], repos: 63, followers: 3210, language: "TypeScript", country: "Canada" },
  { username: "backend_boss", skills: ["Java", "Kotlin", "Spring"], repos: 39, followers: 1123, language: "Java", country: "Brazil" },
  { username: "devops_dan", skills: ["Kubernetes", "Terraform", "AWS"], repos: 24, followers: 756, language: "Python", country: "USA" },
  { username: "ml_maven", skills: ["Python", "PyTorch", "TensorFlow"], repos: 31, followers: 1890, language: "Python", country: "India" },
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
  { value: "USA", label: "USA" },
  { value: "Germany", label: "Germany" },
  { value: "Japan", label: "Japan" },
  { value: "UK", label: "UK" },
  { value: "France", label: "France" },
  { value: "Canada", label: "Canada" },
  { value: "Brazil", label: "Brazil" },
  { value: "India", label: "India" },
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
  { title: "Senior Frontend Engineer", company: "TechCorp", location: "Remote", tags: ["React", "TypeScript", "Next.js"] },
  { title: "Backend Developer", company: "StartupXYZ", location: "San Francisco, CA", tags: ["Go", "PostgreSQL", "AWS"] },
  { title: "Full Stack Engineer", company: "DevTools Inc", location: "Remote", tags: ["Node.js", "React", "MongoDB"] },
  { title: "Rust Systems Engineer", company: "InfraCo", location: "Berlin, DE", tags: ["Rust", "Linux", "Networking"] },
  { title: "ML Engineer", company: "AI Labs", location: "New York, NY", tags: ["Python", "PyTorch", "MLOps"] },
  { title: "DevOps Engineer", company: "CloudScale", location: "Remote", tags: ["Kubernetes", "Terraform", "CI/CD"] },
  { title: "iOS Developer", company: "MobileFirst", location: "Austin, TX", tags: ["Swift", "SwiftUI", "Xcode"] },
  { title: "Security Engineer", company: "SecureTech", location: "Remote", tags: ["Security", "Penetration Testing", "Python"] },
  { title: "Data Engineer", company: "DataFlow", location: "Seattle, WA", tags: ["Spark", "Airflow", "Python"] },
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

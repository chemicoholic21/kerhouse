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
    name: "techdude123/fastapi-starter",
    description: "A FastAPI starter template with an example project setup.",
    tags: ["Python", "API", "fastapi"],
    stars: "1.2K",
    forks: 180,
    icon: Zap,
    category: "api",
    difficulty: "beginner",
    language: "Python"
  },
  {
    name: "enigma42/secure-chat",
    description: "A secure, end-to-end encrypted chat application.",
    tags: ["Rust", "chat", "cryptography"],
    stars: 970,
    forks: 75,
    icon: MessageSquare,
    category: "security",
    difficulty: "advanced",
    language: "Rust"
  },
  {
    name: "libresync/file-synchro",
    description: "A lightweight file synchronization tool",
    tags: ["sync", "backup", "CLI"],
    stars: 650,
    forks: 95,
    icon: FolderSync,
    category: "tools",
    difficulty: "intermediate",
    language: "Go"
  },
  {
    name: "neural-labs/ml-toolkit",
    description: "Modern machine learning utilities and helpers.",
    tags: ["ML", "Python", "PyTorch"],
    stars: 534,
    forks: 67,
    icon: Brain,
    category: "ml",
    difficulty: "advanced",
    language: "Python"
  },
  {
    name: "cloudops/infra-as-code",
    description: "Infrastructure automation templates for AWS and GCP.",
    tags: ["DevOps", "Terraform", "AWS"],
    stars: 412,
    forks: 89,
    icon: Cloud,
    category: "devops",
    difficulty: "intermediate",
    language: "TypeScript"
  },
  {
    name: "dataforge/sql-utils",
    description: "SQL query builder and database utilities.",
    tags: ["SQL", "Database", "TypeScript"],
    stars: 389,
    forks: 45,
    icon: Database,
    category: "database",
    difficulty: "beginner",
    language: "TypeScript"
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
  { value: "TypeScript", label: "TypeScript" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "Rust", label: "Rust" },
  { value: "Go", label: "Go" },
  { value: "Java", label: "Java" },
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

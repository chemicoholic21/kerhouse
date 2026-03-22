"use client"

import { useState, useRef, useEffect } from "react"
import { Star, GitFork, ChevronDown } from "lucide-react"
import { repos, categories, difficulties, languages, type Category, type Difficulty } from "@/lib/data"
import {
  trendingRepositories,
  formatRepoCount,
} from "@/lib/trending-repositories"

function Dropdown({ 
  label, 
  value, 
  options, 
  onChange 
}: { 
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedLabel = options.find(o => o.value === value)?.label || label

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-foreground px-3 py-1 text-sm flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors"
      >
        <span>{label}: {selectedLabel}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 border-2 border-foreground bg-background z-50 min-w-full">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-foreground hover:text-background transition-colors ${
                value === option.value ? "bg-foreground/10" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function TrendingRepos() {
  const [viewMode, setViewMode] = useState<"repos" | "issues">("repos")
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "all">("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")

  const filteredRepos = repos.filter((repo) => {
    const categoryMatch = selectedCategory === "all" || repo.category === selectedCategory
    const difficultyMatch = selectedDifficulty === "all" || repo.difficulty === selectedDifficulty
    const languageMatch = selectedLanguage === "all" || repo.language === selectedLanguage
    return categoryMatch && difficultyMatch && languageMatch
  })

  return (
    <section className="space-y-10">
      <div className="border-2 border-dashed border-foreground/70 p-6">
        <h2 className="text-xl font-bold mb-1">Trending repositories</h2>
        <p className="text-sm text-muted-foreground mb-6">
          See what the community is most excited about today.
        </p>
        <ul className="divide-y divide-foreground border-y border-foreground">
          {trendingRepositories.map((r) => {
            const href = `https://github.com/${r.owner}/${r.repo}`
            return (
              <li key={`${r.owner}/${r.repo}`} className="py-4 first:pt-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  <span className="text-sm font-semibold">
                    {r.owner} / {r.repo}
                  </span>
                </a>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-3 max-w-4xl">
                  {r.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{r.language}</span>
                  <span className="inline-flex items-center gap-0.5 tabular-nums">
                    <Star className="w-3 h-3" aria-hidden />
                    {formatRepoCount(r.stars)}
                  </span>
                  <span className="inline-flex items-center gap-0.5 tabular-nums">
                    <GitFork className="w-3 h-3" aria-hidden />
                    {formatRepoCount(r.forks)}
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
                  {formatRepoCount(r.starsToday)} stars today
                </p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            Browse {viewMode === "repos" ? "repositories" : "issues"}
          </h2>
          <div className="flex border-2 border-foreground">
            <button
              type="button"
              onClick={() => setViewMode("repos")}
              className={`px-3 py-1 text-sm transition-colors ${viewMode === "repos" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              Repos
            </button>
            <button
              type="button"
              onClick={() => setViewMode("issues")}
              className={`px-3 py-1 text-sm transition-colors ${viewMode === "issues" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              Issues
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Dropdown
            label="Category"
            value={selectedCategory}
            options={categories}
            onChange={(v) => setSelectedCategory(v as Category | "all")}
          />
          <Dropdown
            label="Difficulty"
            value={selectedDifficulty}
            options={difficulties}
            onChange={(v) => setSelectedDifficulty(v as Difficulty | "all")}
          />
          <Dropdown
            label="Language"
            value={selectedLanguage}
            options={languages}
            onChange={(v) => setSelectedLanguage(v)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => {
            const IconComponent = repo.icon
            return (
              <div
                key={repo.name}
                className="border-2 border-foreground p-4 transition-colors cursor-pointer flex flex-col group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="border-2 border-foreground p-2">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm break-all group-hover:underline">
                      {repo.name}
                    </div>
                    <span className="text-xs capitalize text-muted-foreground">
                      {repo.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-sm mb-3 line-clamp-2 flex-1">{repo.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-foreground px-1.5 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm mt-auto text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {filteredRepos.length === 0 && (
          <div className="border-2 border-dashed border-foreground/50 p-8 text-center">
            <p>No repositories match the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}

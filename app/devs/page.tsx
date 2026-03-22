"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { User, ChevronDown, TrendingUp } from "lucide-react"
import { developers, languages, countries, skillsList } from "@/lib/data"

function formatRank(n: number) {
  return String(n).padStart(2, "0")
}

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
        className="border-2 border-foreground px-3 py-1 text-sm flex items-center gap-2 hover:bg-foreground hover:text-background"
      >
        <span>{label}: {selectedLabel}</span>
        <ChevronDown className={`w-3 h-3 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 border-2 border-foreground bg-background z-50 min-w-full max-h-48 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-foreground hover:text-background ${
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

export default function DevsPage() {
  const [openTo, setOpenTo] = useState<"all" | "mentorship" | "work">("all")
  const [selectedSkill, setSelectedSkill] = useState("all")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")

  const filteredDevs = developers.filter((dev) => {
    const skillMatch = selectedSkill === "all" || dev.skills.includes(selectedSkill)
    const languageMatch = selectedLanguage === "all" || dev.language === selectedLanguage
    const countryMatch = selectedCountry === "all" || dev.country === selectedCountry
    return skillMatch && languageMatch && countryMatch
  })

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="layout-container py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-highlight">Find Developers</h2>
          <div className="flex border-2 border-foreground">
            <button
              type="button"
              onClick={() => setOpenTo("all")}
              className={`px-3 py-1 text-sm ${openTo === "all" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setOpenTo("mentorship")}
              className={`px-3 py-1 text-sm ${openTo === "mentorship" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              Mentorship
            </button>
            <button
              type="button"
              onClick={() => setOpenTo("work")}
              className={`px-3 py-1 text-sm ${openTo === "work" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              Work
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <Dropdown
            label="Skill"
            value={selectedSkill}
            options={skillsList}
            onChange={setSelectedSkill}
          />
          <Dropdown
            label="Language"
            value={selectedLanguage}
            options={languages}
            onChange={setSelectedLanguage}
          />
          <Dropdown
            label="Country"
            value={selectedCountry}
            options={countries}
            onChange={setSelectedCountry}
          />
        </div>
        
        {filteredDevs.length > 0 ? (
          <section className="border-2 border-dashed border-foreground/70 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2 text-highlight">
                <TrendingUp className="w-5 h-5 shrink-0" strokeWidth={2.5} />
                Developers
              </h3>
              <span className="text-sm text-muted-foreground tabular-nums">
                {filteredDevs.length} shown
              </span>
            </div>

            <div className="overflow-x-auto -mx-1 px-1">
              <div className="border-y border-foreground min-w-[min(100%,36rem)]">
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,7rem)_auto_auto_auto] gap-x-3 items-center py-[9px] px-2 text-xs font-bold uppercase tracking-wide text-muted-foreground border-b border-foreground">
                  <span className="text-right">#</span>
                  <span>Engineer</span>
                  <span className="truncate min-w-0">Skills</span>
                  <span className="text-right whitespace-nowrap">Stack</span>
                  <span className="text-right tabular-nums whitespace-nowrap">Repos</span>
                  <span className="text-right tabular-nums whitespace-nowrap">Follow</span>
                </div>
                <div className="divide-y divide-foreground">
                  {filteredDevs.map((dev, index) => (
                    <Link
                      key={dev.username}
                      href={`/${dev.username}`}
                      className="grid grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,7rem)_auto_auto_auto] gap-x-3 items-center py-[11px] px-2 hover:bg-foreground hover:text-background cursor-pointer group/link min-w-[min(100%,36rem)]"
                    >
                      <span className="text-right text-sm tabular-nums">
                        {formatRank(index + 1)}
                      </span>
                      <div className="flex items-center gap-2 min-w-0">
                        <User className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
                        <div className="flex flex-col min-w-0 text-sm leading-tight">
                          <span className="truncate group-hover/link:underline font-medium">
                            {dev.username}
                          </span>
                          <span className="truncate text-muted-foreground text-xs group-hover/link:text-background/80">
                            {dev.country}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm truncate min-w-0 text-muted-foreground group-hover/link:text-background/80">
                        {dev.skills.join(" · ")}
                      </span>
                      <span className="text-sm text-right tabular-nums whitespace-nowrap">
                        {dev.language}
                      </span>
                      <span className="text-sm text-right tabular-nums">{dev.repos}</span>
                      <span className="text-sm text-right tabular-nums">
                        {dev.followers.toLocaleString("en-US")}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {filteredDevs.length === 0 && (
          <div className="border-2 border-dashed border-foreground/50 p-8 text-center">
            <p>No developers match the selected filters.</p>
          </div>
        )}
      </main>
      
      <footer className="border-t-2 border-dashed border-foreground/70 py-6">
        <div className="layout-container text-center text-sm">
          <p>
            © 2026 <span className="text-brand">hackerhou.se</span>. A home for <span className="text-highlight">human</span> programmers.
          </p>
        </div>
      </footer>
    </div>
  )
}

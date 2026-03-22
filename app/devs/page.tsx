"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { User, ChevronDown } from "lucide-react"
import { developers, languages, countries, skillsList } from "@/lib/data"

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
        <div className="absolute top-full left-0 mt-1 border-2 border-foreground bg-background z-50 min-w-full max-h-48 overflow-y-auto">
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
              className={`px-3 py-1 text-sm transition-colors ${openTo === "all" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setOpenTo("mentorship")}
              className={`px-3 py-1 text-sm transition-colors ${openTo === "mentorship" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
            >
              Mentorship
            </button>
            <button
              type="button"
              onClick={() => setOpenTo("work")}
              className={`px-3 py-1 text-sm transition-colors ${openTo === "work" ? "bg-foreground text-background" : "hover:bg-foreground/10"}`}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDevs.map((dev) => (
            <Link
              key={dev.username}
              href={`/${dev.username}`}
              className="border-2 border-foreground p-4 transition-colors cursor-pointer group block hover:bg-foreground/[0.03]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="border-2 border-foreground p-2">
                  <User className="w-5 h-5 text-highlight" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="font-bold block group-hover:underline text-highlight">{dev.username}</span>
                  <span className="text-xs text-muted-foreground">{dev.country}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {dev.skills.map((skill) => (
                  <span key={skill} className="border border-foreground px-1.5 py-0.5 text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{dev.repos} repos</span>
                <span>{dev.followers} followers</span>
              </div>
            </Link>
          ))}
        </div>

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

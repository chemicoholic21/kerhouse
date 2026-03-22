"use client"

import Link from "next/link"
import { Home, Inbox, Palette, TerminalSquare, UserCircle } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { useAuth } from "./auth-provider"
import { useTerminal } from "./terminal-provider"

const themes = [
  { id: "light", name: "Light" },
  { id: "dark", name: "VS Code Dark+" },
  { id: "monokai", name: "Monokai" },
  { id: "dracula", name: "Dracula" },
  { id: "solarized", name: "Solarized Dark" },
  { id: "nord", name: "Nord" },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const { session, ready, signIn, signOut } = useAuth()
  const { openTerminal } = useTerminal()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="border-b-2 border-dashed border-foreground/70 py-4">
      <div className="layout-container flex items-center justify-between">
        <div className="flex items-center gap-8 translate-y-0.5">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-brand hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" strokeWidth={2.5} />
            <span>hackerhou.se</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:underline underline-offset-4">Home</Link>
            <Link href="/repos" className="hover:underline underline-offset-4">Repos</Link>
            <Link href="/devs" className="hover:underline underline-offset-4">Devs</Link>
            <Link href="/roles" className="hover:underline underline-offset-4">Roles</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/inbox"
            className="p-1 hover:text-muted-foreground transition-colors text-foreground"
            aria-label="Inbox"
            title="Inbox"
          >
            <Inbox className="w-4 h-4" strokeWidth={2} />
          </Link>
          <button
            onClick={openTerminal}
            className="p-1 hover:text-muted-foreground transition-colors"
            aria-label="Open terminal"
          >
            <TerminalSquare className="w-4 h-4" />
          </button>
          <div className="relative mr-3" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 hover:text-muted-foreground transition-colors"
              aria-label="Select theme"
            >
              <Palette className="w-4 h-4" />
            </button>
            {mounted && menuOpen && (
              <div className="absolute right-0 top-full mt-2 border-2 border-foreground bg-background z-50 min-w-40">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id)
                      setMenuOpen(false)
                    }}
                    className={`w-full text-left px-3 py-1.5 text-sm hover:bg-foreground hover:text-background transition-colors ${
                      theme === t.id ? "bg-foreground/10" : ""
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {ready && session ? (
            <>
              <Link
                href={`/${session.username}`}
                className="p-1 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label={`Profile (${session.username})`}
                title={session.username}
              >
                <UserCircle className="w-5 h-5" strokeWidth={2} />
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="border-2 border-foreground px-3 py-0.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={signIn}
              disabled={!ready}
              className="border-2 border-highlight px-4 py-0.5 font-medium text-highlight hover:bg-highlight hover:text-highlight-foreground transition-colors disabled:opacity-50"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

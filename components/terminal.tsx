"use client"

import { useState, useRef, useEffect } from "react"
import { X, Maximize2 } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useTerminal } from "./terminal-provider"
import { repos, developers, roles } from "@/lib/data"

type Directory = "~" | "repos" | "devs" | "roles"

const directoryToPath: Record<Directory, string> = {
  "~": "/",
  "repos": "/repos",
  "devs": "/devs",
  "roles": "/roles"
}

const pathToDirectory: Record<string, Directory> = {
  "/": "~",
  "/repos": "repos",
  "/devs": "devs",
  "/roles": "roles"
}

export function Terminal() {
  const router = useRouter()
  const pathname = usePathname()
  const { isOpen, closeTerminal, openTerminal } = useTerminal()
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [input, setInput] = useState("")
  const [currentDir, setCurrentDir] = useState<Directory>("~")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [history, setHistory] = useState<string[]>([
    "a home for human programmers",
    "",
    "Type 'help' for available commands.",
    ""
  ])
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pendingKeysRef = useRef("")
  const isOpenRef = useRef(isOpen)
  const openTerminalRef = useRef(openTerminal)
  isOpenRef.current = isOpen
  openTerminalRef.current = openTerminal

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync directory with current pathname
  useEffect(() => {
    if (!mounted) return
    const dir = pathToDirectory[pathname]
    if (dir) {
      setCurrentDir(dir)
    }
  }, [pathname, mounted])

  useEffect(() => {
    if (!isOpen) return
    const pending = pendingKeysRef.current
    if (pending) {
      setInput((prev) => prev + pending)
      pendingKeysRef.current = ""
    }
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (e.key.length !== 1 || !/^[a-zA-Z]$/.test(e.key)) return

      const target = e.target
      const inputEl = inputRef.current
      if (isOpenRef.current && target === inputEl) return

      if (target instanceof Element) {
        const field = target.closest("input, textarea, [contenteditable='true']")
        if (field !== null && field !== inputEl) return
      }

      if (isOpenRef.current && document.activeElement === inputEl) {
        return
      }

      e.preventDefault()
      if (!isOpenRef.current) {
        pendingKeysRef.current += e.key
        openTerminalRef.current()
      } else {
        setInput((prev) => prev + e.key)
        requestAnimationFrame(() => inputRef.current?.focus())
      }
    }

    document.addEventListener("keydown", onKeyDown, true)
    return () => document.removeEventListener("keydown", onKeyDown, true)
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (terminalRef.current) {
      const rect = terminalRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
    }
  }

  const getPrompt = () => {
    return `${currentDir} $`
  }

  const navigateTo = (dir: Directory) => {
    if (!mounted) return
    setCurrentDir(dir)
    router.push(directoryToPath[dir])
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    const parts = trimmedCmd.split(/\s+/)
    const command = parts[0].toLowerCase()
    const arg = parts[1]
    const arg2 = parts[2]
    let output: string[] = []

    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, trimmedCmd])
      setHistoryIndex(-1)
    }

    switch (command) {
      case "help":
        output = [
          "Available commands:",
          "",
          "  help              Show this help message",
          "  about             About hackerhou.se",
          "  whoami            Display current user",
          "  date              Show current date/time",
          "  echo <text>       Print text to terminal",
          "",
          "  ls                List directory contents",
          "  cd <dir>          Change directory",
          "  cd ..             Go to parent directory",
          "  pwd               Print working directory",
          "",
          "  cat <item>        Show item details (in repos/devs/roles)",
          "",
          "  clear             Clear terminal",
          "  exit              Close terminal",
          "",
          "Directories: ~, repos, devs, roles"
        ]
        break

      case "about":
        output = [
          "hackerhou.se v1.0",
          "A home for human programmers",
          "",
          "Discover open source, learn new skills, and get hired."
        ]
        break

      case "whoami":
        output = ["guest"]
        break

      case "date":
        output = [new Date().toString()]
        break

      case "echo":
        output = [parts.slice(1).join(" ") || ""]
        break

      case "pwd":
        if (currentDir === "~") {
          output = ["/"]
        } else {
          output = [`/${currentDir}`]
        }
        break

      case "ls":
        if (currentDir === "~") {
          output = ["repos/  devs/  roles/"]
        } else if (currentDir === "repos") {
          output = repos.map((r, i) => `${i + 1}_${r.name.split("/")[1]}`)
        } else if (currentDir === "devs") {
          output = developers.map((d, i) => `${i + 1}_${d.username}`)
        } else if (currentDir === "roles") {
          output = roles.map((r, i) => `${i + 1}_${r.title.toLowerCase().replace(/\s+/g, "_")}`)
        }
        break

      case "cd":
        if (!arg || arg === "~" || arg === "/") {
          navigateTo("~")
          output = []
        } else if (arg === "..") {
          if (currentDir !== "~") {
            navigateTo("~")
            output = []
          } else {
            output = ["Already at root"]
          }
        } else if (arg === ".") {
          output = []
        } else {
          const targetDir = arg.replace(/\/$/, "").toLowerCase() as Directory
          if (currentDir === "~" && ["repos", "devs", "roles"].includes(targetDir)) {
            navigateTo(targetDir)
            output = []
          } else if (currentDir !== "~") {
            output = [`cd: no such directory: ${arg}`]
          } else {
            output = [`cd: no such directory: ${arg}`]
          }
        }
        break

      case "cat":
        if (!arg) {
          output = ["Usage: cat <item>"]
        } else {
          const num = parseInt(arg.split("_")[0]) - 1
          if (currentDir === "repos" && num >= 0 && num < repos.length) {
            const r = repos[num]
            output = [
              `Name: ${r.name}`,
              `Description: ${r.description}`,
              `Language: ${r.language}`,
              `Tags: ${r.tags.join(", ")}`,
              `Stars: ${r.stars} | Forks: ${r.forks}`,
              `Category: ${r.category} | Difficulty: ${r.difficulty}`
            ]
          } else if (currentDir === "devs" && num >= 0 && num < developers.length) {
            const d = developers[num]
            output = [
              `Username: ${d.username}`,
              `Skills: ${d.skills.join(", ")}`,
              `Language: ${d.language}`,
              `Country: ${d.country}`,
              `Repos: ${d.repos} | Followers: ${d.followers}`
            ]
          } else if (currentDir === "roles" && num >= 0 && num < roles.length) {
            const r = roles[num]
            output = [
              `Title: ${r.title}`,
              `Company: ${r.company}`,
              `Location: ${r.location}`,
              `Skills: ${r.tags.join(", ")}`
            ]
          } else if (currentDir === "~") {
            output = ["cat: use 'cd' to enter a directory first"]
          } else {
            output = [`cat: ${arg}: No such file`]
          }
        }
        break

      case "clear":
        setHistory([])
        setInput("")
        return

      case "exit":
        closeTerminal()
        return

      case "":
        break

      default:
        output = [`${command}: command not found`]
    }

    setHistory(prev => [...prev, `${getPrompt()} ${trimmedCmd}`, ...output])
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      const baseCommands = ["help", "about", "whoami", "date", "echo", "ls", "cd", "pwd", "cat", "clear", "exit"]
      
      // Handle cd tab completion
      if (input.startsWith("cd ")) {
        const partial = input.slice(3).toLowerCase()
        let dirs: string[] = []
        if (currentDir === "~") {
          dirs = ["repos", "devs", "roles", "~", ".."]
        } else {
          dirs = ["..", "~"]
        }
        const matches = dirs.filter(d => d.startsWith(partial))
        if (matches.length === 1) {
          setInput(`cd ${matches[0]}`)
        }
      } else if (input.startsWith("cat ")) {
        const partial = input.slice(4).toLowerCase()
        let items: string[] = []
        if (currentDir === "repos") {
          items = repos.map((r, i) => `${i + 1}_${r.name.split("/")[1]}`)
        } else if (currentDir === "devs") {
          items = developers.map((d, i) => `${i + 1}_${d.username}`)
        } else if (currentDir === "roles") {
          items = roles.map((r, i) => `${i + 1}_${r.title.toLowerCase().replace(/\s+/g, "_")}`)
        }
        const matches = items.filter(i => i.toLowerCase().startsWith(partial))
        if (matches.length === 1) {
          setInput(`cat ${matches[0]}`)
        }
      } else {
        const matches = baseCommands.filter(c => c.startsWith(input.toLowerCase()))
        if (matches.length === 1) {
          setInput(matches[0])
        }
      }
    }
  }

  if (!isOpen) return null

  const terminalStyle = isMaximized 
    ? { left: 0, top: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }
    : { left: position.x, top: position.y }

  return (
    <div
      ref={terminalRef}
      className={`fixed z-50 border-2 border-foreground bg-background shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.1)] ${
        isMaximized ? '' : 'w-[600px] max-w-[90vw]'
      }`}
      style={terminalStyle}
    >
      {/* Title bar */}
      <div
        className="bg-foreground text-background px-2 py-2 flex items-center select-none"
        onMouseDown={isMaximized ? undefined : handleMouseDown}
      >
        <div className="flex items-center gap-1">
          <button 
            className="hover:bg-background/20 p-1"
            onClick={closeTerminal}
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
          <button 
            className="hover:bg-background/20 p-1"
            onClick={() => setIsMaximized(!isMaximized)}
            aria-label="Maximize"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
        <span className="flex-1" />
      </div>

      {/* Terminal content */}
      <div 
        ref={contentRef}
        className={`p-3 overflow-y-auto font-mono text-sm ${isMaximized ? 'h-[calc(100vh-32px)]' : 'h-[350px]'}`}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-relaxed">{line}</div>
        ))}
        <div className="flex">
          <span>{getPrompt()}&nbsp;</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none border-none caret-transparent"
              spellCheck={false}
              autoComplete="off"
            />
            <span 
              className="absolute top-0 left-0 pointer-events-none"
              style={{ paddingLeft: `${input.length}ch` }}
            >
              <span className="bg-foreground text-background">&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

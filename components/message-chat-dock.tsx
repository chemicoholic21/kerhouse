"use client"

import { useEffect, useRef, useState } from "react"
import { Minus, Send, X } from "lucide-react"

export type ChatBubble = {
  id: string
  from: "self" | "peer"
  text: string
  time: string
}

function seedThread(peerUsername: string): ChatBubble[] {
  return [
    {
      id: "s1",
      from: "peer",
      text: `Hey — your profile on hackerhou.se caught my eye. Really nice work in the open.`,
      time: "Tue",
    },
    {
      id: "s2",
      from: "peer",
      text: `If you're open to a quick chat about a small tooling idea, let me know.`,
      time: "Tue",
    },
  ]
}

export function MessageChatDock({
  open,
  onClose,
  peerUsername,
  selfUsername,
}: {
  open: boolean
  onClose: () => void
  peerUsername: string
  selfUsername: string
}) {
  const [messages, setMessages] = useState<ChatBubble[]>([])
  const [draft, setDraft] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setMessages(seedThread(peerUsername))
    setDraft("")
  }, [open, peerUsername])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  if (!open) return null

  function send() {
    const t = draft.trim()
    if (!t) return
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    setMessages((m) => [
      ...m,
      { id: `m-${now.getTime()}`, from: "self", text: t, time },
    ])
    setDraft("")
  }

  return (
    <div
      className="fixed z-[100] bottom-4 right-4 left-4 sm:left-auto flex flex-col w-full sm:w-[380px] max-h-[min(100dvh-2rem,460px)] h-[min(100dvh-2rem,460px)] border-2 border-foreground bg-background shadow-[8px_8px_0_0_var(--foreground)]"
      role="dialog"
      aria-label={`Message ${peerUsername}`}
    >
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-b-2 border-foreground bg-muted/30 shrink-0">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Messaging</p>
          <p className="text-sm font-bold truncate text-highlight">@{peerUsername}</p>
        </div>
        <div className="flex items-center gap-0.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-foreground/10 rounded-sm"
            aria-label="Minimize"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-foreground/10 rounded-sm"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground px-3 py-1 border-b border-foreground/50 shrink-0">
        As @{selfUsername} · prototype, not sent anywhere
      </p>

      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.from === "self" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[88%] rounded-sm px-3 py-2 text-sm leading-snug border ${
                m.from === "self"
                  ? "border-foreground bg-foreground text-background rounded-br-none"
                  : "border-foreground/60 bg-muted/40 text-foreground rounded-bl-none"
              }`}
            >
              <p>{m.text}</p>
              <p
                className={`text-[10px] mt-1 tabular-nums ${
                  m.from === "self" ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {m.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="border-t-2 border-foreground p-2 shrink-0 flex gap-2 items-end">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          rows={2}
          placeholder="Write a message…"
          className="flex-1 min-h-[44px] max-h-24 border-2 border-foreground bg-background px-2 py-1.5 text-sm resize-none placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/40"
        />
        <button
          type="button"
          onClick={send}
          disabled={!draft.trim()}
          className="shrink-0 border-2 border-highlight p-2 text-highlight hover:bg-highlight hover:text-highlight-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none"
          aria-label="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ChevronUp, Minus, Send, X } from "lucide-react"
import { inboxThreadPreviews } from "@/lib/inbox-threads"

export type ChatBubble = {
  id: string
  from: "self" | "peer"
  text: string
  time: string
}

export function MessageChatDock({
  open,
  onClose,
  peerUsername,
  onOpenPeer,
  onBackToInbox,
  selfUsername,
}: {
  open: boolean
  onClose: () => void
  peerUsername: string | null
  onOpenPeer: (peer: string) => void
  onBackToInbox: () => void
  selfUsername: string
}) {
  const [messages, setMessages] = useState<ChatBubble[]>([])
  const [draft, setDraft] = useState("")
  const [collapsed, setCollapsed] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const isInbox = peerUsername === null

  useEffect(() => {
    if (!open) {
      setCollapsed(false)
      return
    }
    if (peerUsername) {
      setMessages([])
      setDraft("")
    }
    setCollapsed(false)
  }, [open, peerUsername])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return
      if (peerUsername) onBackToInbox()
      else onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, peerUsername, onBackToInbox, onClose])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open, isInbox])

  if (!open) return null

  const dockFrame =
    "fixed z-[100] bottom-0 left-0 right-4 sm:left-auto sm:right-4 sm:w-[360px] border-2 border-foreground bg-background"

  const headerTitle = isInbox ? "Inbox" : `@${peerUsername}`
  const collapsedLabel = isInbox ? "Inbox" : `@${peerUsername}`

  if (collapsed) {
    return (
      <div
        className={`${dockFrame} flex items-center justify-between gap-2 px-3 py-2`}
        role="dialog"
        aria-label={isInbox ? "Inbox" : `Message ${peerUsername}`}
        onDoubleClick={() => setCollapsed(false)}
      >
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="min-w-0 flex-1 text-left text-sm font-bold text-highlight truncate hover:underline underline-offset-2"
          aria-expanded="false"
        >
          {collapsedLabel}
        </button>
        <div
          className="flex items-center gap-0.5 shrink-0"
          onDoubleClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            className="p-1 hover:bg-foreground/10"
            aria-label="Expand"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button type="button" onClick={onClose} className="p-1 hover:bg-foreground/10" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  function send() {
    const t = draft.trim()
    if (!t || !peerUsername) return
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
      className={`${dockFrame} max-h-[min(100dvh,420px)] h-[min(100dvh,420px)] flex flex-col`}
      role="dialog"
      aria-label={isInbox ? "Inbox" : `Message ${peerUsername}`}
      aria-expanded="true"
    >
      <div
        className="flex items-center justify-between gap-2 px-3 py-2 border-b-2 border-foreground shrink-0 cursor-default"
        onDoubleClick={() => setCollapsed(true)}
      >
        {isInbox ? (
          <p className="text-sm font-bold text-highlight truncate min-w-0">Inbox</p>
        ) : (
          <div className="flex items-center gap-1 min-w-0 flex-1">
            <button
              type="button"
              onClick={onBackToInbox}
              className="p-1 shrink-0 hover:bg-foreground/10"
              aria-label="Back to inbox"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <p className="text-sm font-bold text-highlight truncate min-w-0">{headerTitle}</p>
          </div>
        )}
        <div
          className="flex items-center gap-0.5 shrink-0"
          onDoubleClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="p-1 hover:bg-foreground/10"
            aria-label="Collapse"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button type="button" onClick={onClose} className="p-1 hover:bg-foreground/10" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isInbox ? (
        <div className="flex-1 overflow-y-auto min-h-0">
          <ul className="divide-y divide-foreground border-b border-foreground">
            {inboxThreadPreviews.map((t) => (
              <li key={t.peer}>
                <button
                  type="button"
                  onClick={() => onOpenPeer(t.peer)}
                  className="w-full cursor-pointer text-left py-3 px-3 hover:bg-foreground/[0.04] transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-highlight text-sm">@{t.peer}</span>
                    <span className="text-xs text-muted-foreground tabular-nums shrink-0">{t.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.preview}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-3 py-2 text-sm min-h-0">
            {messages.map((m, i) => {
              const label = m.from === "self" ? selfUsername : peerUsername
              const prev = messages[i - 1]
              const next = messages[i + 1]
              const showHeader = i === 0 || prev?.from !== m.from
              const showTime = i === messages.length - 1 || next?.from !== m.from
              return (
                <div
                  key={m.id}
                  className={`max-w-[95%] min-w-0 ${showHeader ? (i === 0 ? "" : "mt-4") : "mt-1.5"}`}
                >
                  {showHeader ? (
                    <p className="text-[10px] font-mono text-muted-foreground mb-1">@{label}</p>
                  ) : null}
                  <p className="leading-snug text-foreground">{m.text}</p>
                  {showTime ? (
                    <p className="text-[10px] mt-1 tabular-nums text-muted-foreground">{m.time}</p>
                  ) : null}
                </div>
              )
            })}
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
              className="flex-1 min-h-[40px] max-h-24 border border-foreground bg-background px-2 py-1.5 text-sm resize-none placeholder:text-muted-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            />
            <button
              type="button"
              onClick={send}
              disabled={!draft.trim()}
              className="shrink-0 border-2 border-foreground p-2 hover:bg-foreground hover:text-background transition-colors disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

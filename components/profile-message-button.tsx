"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { useAuth } from "./auth-provider"

export function ProfileMessageSidebar({ targetUsername }: { targetUsername: string }) {
  const { session, ready } = useAuth()
  const [open, setOpen] = useState(false)
  const [body, setBody] = useState("")
  const [sent, setSent] = useState(false)

  const canDm = ready && session && session.username !== targetUsername

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  if (!canDm || !session) return null

  function handleSend() {
    setSent(true)
    setBody("")
    window.setTimeout(() => {
      setOpen(false)
      setSent(false)
    }, 900)
  }

  return (
    <>
      <section className="border-2 border-foreground p-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-highlight mb-2">Message</h2>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          Send a direct message as <span className="font-mono text-foreground">@{session.username}</span>.
          Prototype — nothing is delivered.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full border-2 border-highlight px-4 py-2.5 text-sm font-bold text-highlight hover:bg-highlight hover:text-highlight-foreground transition-colors inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" aria-hidden strokeWidth={2.5} />
          Open message
        </button>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/20"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-labelledby="dm-title"
            aria-modal="true"
            className="relative w-full max-w-md border-2 border-foreground bg-background p-5 shadow-[6px_6px_0_0_var(--foreground)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 hover:bg-foreground/10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <h2 id="dm-title" className="text-sm font-bold uppercase tracking-wide pr-8">
              Direct message
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              To <span className="font-mono text-foreground">@{targetUsername}</span> as{" "}
              <span className="font-mono text-foreground">@{session.username}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">Prototype — nothing is sent anywhere.</p>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={4}
              placeholder="Write a message…"
              className="mt-3 w-full border-2 border-foreground bg-background px-3 py-2 text-sm resize-y min-h-[100px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/30"
            />
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                type="button"
                onClick={handleSend}
                disabled={!body.trim() || sent}
                className="border-2 border-foreground px-4 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors disabled:opacity-40 disabled:pointer-events-none"
              >
                {sent ? "Sent" : "Send"}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border-2 border-foreground px-4 py-1.5 text-sm hover:bg-foreground/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

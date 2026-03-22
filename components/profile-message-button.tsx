"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { useAuth } from "./auth-provider"
import { MessageChatDock } from "./message-chat-dock"

export function ProfileMessageSidebar({ targetUsername }: { targetUsername: string }) {
  const { session, ready } = useAuth()
  const [open, setOpen] = useState(false)

  const canDm = ready && session && session.username !== targetUsername

  if (!canDm || !session) return null

  return (
    <>
      <section className="border-2 border-foreground p-5">
        <h2 className="text-sm font-bold mb-2">Message</h2>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          Send a direct message as <span className="font-mono text-foreground">@{session.username}</span>.
          Prototype — nothing is delivered.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full border-2 border-foreground px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" aria-hidden strokeWidth={2.5} />
          Message
        </button>
      </section>

      <MessageChatDock
        open={open}
        onClose={() => setOpen(false)}
        peerUsername={targetUsername}
      />
    </>
  )
}

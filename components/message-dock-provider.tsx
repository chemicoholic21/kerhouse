"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { useAuth } from "./auth-provider"
import { MessageChatDock } from "./message-chat-dock"

type MessageDockContextValue = {
  openMessageDock: (peerUsername: string) => void
  closeMessageDock: () => void
  isOpen: boolean
  peerUsername: string | null
}

const MessageDockContext = createContext<MessageDockContextValue | undefined>(undefined)

export function MessageDockProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth()
  const [peerUsername, setPeerUsername] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!session) {
      setOpen(false)
      setPeerUsername(null)
    }
  }, [session])

  const openMessageDock = useCallback((peer: string) => {
    setPeerUsername(peer)
    setOpen(true)
  }, [])

  const closeMessageDock = useCallback(() => {
    setOpen(false)
    setPeerUsername(null)
  }, [])

  const value: MessageDockContextValue = {
    openMessageDock,
    closeMessageDock,
    isOpen: open && peerUsername !== null,
    peerUsername,
  }

  return (
    <MessageDockContext.Provider value={value}>
      {children}
      {open && peerUsername && session ? (
        <MessageChatDock
          open={open}
          onClose={closeMessageDock}
          peerUsername={peerUsername}
          selfUsername={session.username}
        />
      ) : null}
    </MessageDockContext.Provider>
  )
}

export function useMessageDock() {
  const ctx = useContext(MessageDockContext)
  if (!ctx) {
    throw new Error("useMessageDock must be used within a MessageDockProvider")
  }
  return ctx
}

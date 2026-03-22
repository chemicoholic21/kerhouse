import Link from "next/link"
import { Header } from "@/components/header"
import { Inbox } from "lucide-react"

const placeholderThreads = [
  { peer: "jarrodwatts", preview: "If you're ever open to a quick chat about…", time: "Tue" },
  { peer: "mitchellh", preview: "Thanks for the pointer on the module split.", time: "Mon" },
  { peer: "niels9001", preview: "Prototype thread — not real.", time: "Sun" },
]

export default function InboxPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="layout-container py-8 max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          <Inbox className="w-8 h-8 text-highlight shrink-0" strokeWidth={2} />
          <div>
            <h1 className="text-2xl font-bold text-highlight">Inbox</h1>
            <p className="text-sm text-muted-foreground">Prototype — conversations are not stored.</p>
          </div>
        </div>

        <ul className="border-y border-foreground divide-y divide-foreground">
          {placeholderThreads.map((t) => (
            <li key={t.peer}>
              <Link
                href={`/${t.peer}`}
                className="block py-4 px-1 hover:bg-foreground/[0.04] transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-bold text-highlight">@{t.peer}</span>
                  <span className="text-xs text-muted-foreground tabular-nums shrink-0">{t.time}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.preview}</p>
              </Link>
            </li>
          ))}
        </ul>
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

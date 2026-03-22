import { Header } from "@/components/header"
import { TrendingRepos } from "@/components/trending-repos"

export default function ReposPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <TrendingRepos />
      </main>
      
      <footer className="border-t-2 border-dashed border-foreground/70 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2026 hackerhou.se. A home for human programmers.</p>
        </div>
      </footer>
    </div>
  )
}

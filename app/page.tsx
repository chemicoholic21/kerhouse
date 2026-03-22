import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WeeklyLeaderboard } from "@/components/weekly-leaderboard"
import { ExploreProjects } from "@/components/explore-projects"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="layout-container pb-12">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WeeklyLeaderboard />
          </div>
          
          <div>
            <ExploreProjects />
          </div>
        </div>
      </main>
      
      <footer className="border-t-2 border-dashed border-foreground/70 py-6">
        <div className="layout-container text-center text-sm text-muted-foreground">
          <p>
            © 2026 <span className="text-brand">hackerhou.se</span>. A home for <span className="text-highlight">human</span> programmers.
          </p>
        </div>
      </footer>
    </div>
  )
}

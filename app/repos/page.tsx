import { Header } from "@/components/header"
import { TrendingRepos } from "@/components/trending-repos"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Repositories",
  description: "Discover trending open source repositories and projects.",
  path: "/repos",
})

export const revalidate = false

export default function ReposPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="layout-container py-8">
        <TrendingRepos />
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

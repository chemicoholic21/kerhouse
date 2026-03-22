import { Header } from "@/components/header"
import { Briefcase, MapPin } from "lucide-react"
import { roles } from "@/lib/data"

export default function RolesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-6">Find Your Next Role</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="border-2 border-foreground p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="border-2 border-foreground p-1.5">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold group-hover:underline">{role.title}</div>
                  <div className="text-sm text-muted-foreground">{role.company}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-sm mb-3 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>{role.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <span key={tag} className="border border-foreground px-1.5 py-0.5 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="border-t-2 border-dashed border-foreground/70 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2026 hackerhou.se. A home for human programmers.</p>
        </div>
      </footer>
    </div>
  )
}

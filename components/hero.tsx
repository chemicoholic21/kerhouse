import { HouseIllustration } from "@/components/house-illustration"

export function Hero() {
  return (
    <section className="border-2 border-dashed border-foreground/70 my-8 p-8 md:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 max-w-xl">
          <HouseIllustration
            role="img"
            aria-label="ASCII art style illustration of a house with developers"
            className="w-full h-auto"
          />
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            a home for human programmers
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            discover open source projects, learn essential skills, and find meaningful work
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <button className="border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              Explore Repos
            </button>
            <button className="border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              Find Developers
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

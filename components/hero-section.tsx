import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-secondary/30 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/modern-building-materials-warehouse-interior-with-.jpg')] bg-cover bg-center opacity-5"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent"></span>
              Try the project for free for 10 days
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Your Trusted Partner for Building Materials in Jeddah
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            Quality, Speed, and Smart Service. Browse our digital catalog, request a quote in minutes, and let our smart
            assistant help you 24/7.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3">
              Browse Digital Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Smart Assistant
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

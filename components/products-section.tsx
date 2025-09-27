import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Zap, Paintbrush, Hammer, Shield, Building } from "lucide-react"

const categories = [
  {
    title: "Plumbing Tools",
    icon: Wrench,
    description: "Complete range of plumbing supplies and tools",
  },
  {
    title: "Electrical Supplies",
    icon: Zap,
    description: "Wiring, switches, and electrical components",
  },
  {
    title: "Paints and Finishes",
    icon: Paintbrush,
    description: "Premium paints and finishing materials",
  },
  {
    title: "Construction Tools",
    icon: Hammer,
    description: "Professional-grade construction equipment",
  },
  {
    title: "Safety Equipment",
    icon: Shield,
    description: "Essential safety gear and protective equipment",
  },
  {
    title: "Basic Building Materials",
    icon: Building,
    description: "Cement, steel, blocks, and foundation materials",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            A Comprehensive Catalog at Your Fingertips
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Explore our extensive range of building materials and tools, all organized for easy browsing and quick
            ordering.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 border-border/50 hover:border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

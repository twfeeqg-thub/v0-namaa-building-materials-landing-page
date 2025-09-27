import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Clock, FileText } from "lucide-react"

const steps = [
  {
    step: "1",
    title: "Build Your Quote Request",
    description: "Browse our catalog and add items to your quote request with quantities and specifications.",
    icon: ShoppingCart,
  },
  {
    step: "2",
    title: "Get a Quick Response from Our Team",
    description: "Our team reviews your request and provides competitive pricing within hours, not days.",
    icon: Clock,
  },
  {
    step: "3",
    title: "Receive Your Official Invoice",
    description: "Get your professional invoice with all details, ready for procurement and delivery scheduling.",
    icon: FileText,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            From Request to Invoice in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our streamlined process eliminates the frustration of slow invoicing and gets you what you need, fast.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="h-full border-border/50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-2xl">
                      {step.step}
                    </div>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

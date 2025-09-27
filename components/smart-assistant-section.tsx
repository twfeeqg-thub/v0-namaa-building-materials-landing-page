import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, MessageCircle, Clock, Calculator } from "lucide-react"

export function SmartAssistantSection() {
  return (
    <section className="py-20 sm:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent">
              <Bot className="h-10 w-10 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Meet Your 24/7 Smart Assistant
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our AI assistant is always available to answer your questions about product availability, find the right
              materials for your project, or even provide approximate quantity calculations. It works even when we are
              closed.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <MessageCircle className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Instant Answers</h3>
                <p className="text-sm text-muted-foreground">
                  Get immediate responses to product questions and availability
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Always Available</h3>
                <p className="text-sm text-muted-foreground">24/7 support even outside business hours</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <Calculator className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Smart Calculations</h3>
                <p className="text-sm text-muted-foreground">
                  Get quantity estimates and project material calculations
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chatting Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

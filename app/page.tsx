import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SmartAssistantSection } from "@/components/smart-assistant-section"
import { Footer } from "@/components/footer"
import { ChatBubble } from "@/components/chat-bubble"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <HowItWorksSection />
        <SmartAssistantSection />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  )
}

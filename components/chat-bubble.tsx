"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96">
          <Card className="shadow-2xl border-border/50">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Smart Assistant
              </CardTitle>
              <p className="text-sm text-primary-foreground/80">How can I help you today?</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-sm text-foreground">Hello! I'm here to help you with:</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Product availability</li>
                    <li>• Material recommendations</li>
                    <li>• Quantity calculations</li>
                    <li>• Pricing information</li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

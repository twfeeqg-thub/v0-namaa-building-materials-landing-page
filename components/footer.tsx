import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Namaa Building Materials</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for quality building materials in Jeddah. We provide comprehensive solutions for all
              your construction needs with smart, efficient service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80">Al Rayan, Jeddah</p>
                  <p className="text-primary-foreground/80">Saudi Arabia</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <a
                  href="https://wa.me/966562061338"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +966 56 206 1338
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80">Sunday - Thursday</p>
                  <p className="text-primary-foreground/80">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 Namaa Building Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

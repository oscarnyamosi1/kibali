import { Link } from 'wouter';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { companyData } from "@/primarydata/staticData"

const BUSINESS_PHONE = companyData.businessContacts.phone
const BUSINESS_EMAIL = companyData.businessContacts.email

const COMPANY_NAME = companyData.name

const COMPANY_STREET = companyData.location.street
const COMPANY_CITY = companyData.location.city
const COMPANY_COUNTRY = companyData.location.country



export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto relative z-10">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <Link href="/" className="flex flex-col items-start shrink-0 mb-6">
              <span className="font-serif text-2xl font-bold tracking-wider leading-none text-primary">KIBALI</span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1 text-foreground/80">Caterers</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Upscale African catering blending traditional warmth with modern elegance. A 5-star culinary experience for your most important moments.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">Featured Menu</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Catering Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Event Gallery</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book an Event</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-medium mr-2 text-foreground">A:</span> 
                <span>{COMPANY_STREET}, {COMPANY_CITY}<br/>{COMPANY_CITY}, {COMPANY_COUNTRY}</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2 text-foreground">P:</span> 
                <span>{BUSINESS_PHONE}</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2 text-foreground">E:</span> 
                <span>{BUSINESS_EMAIL}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Subscribe to receive updates, exclusive menus, and event inspiration.</p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-background border border-border rounded-l-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <span id="pwa-badge" className="px-2 py-0.5 rounded-full bg-secondary/50 border border-border hidden">Offline Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

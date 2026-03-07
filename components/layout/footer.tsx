import Link from 'next/link'
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40 w-full">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold">
              Shubhangi&apos;s<span className="text-primary">Portfolio</span>
            </Link>

            <p className="mt-2 text-sm text-muted-foreground">
              Designing thoughtful digital experiences with code
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">

            <Link
              href="https://github.com/shubhangi1617"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>

            {/* <Link
              href="https://linkedin.com/in/shubhangitathe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link> */}

            <Link
              href="https://www.instagram.com/shubs_ux?igsh=eHNtcHJlbXR5ZDZl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            <Link
              href="https://youtube.com/@shubhangi0401?si=eRbXrerCn3cL8d8F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </Link>

          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} Shubhangi Tathe. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
import BistroLogo from '@/assets/svg/bistro-logo'
import Link from 'next/link'

const links = [
  { title: 'About Us', href: '#' },
  { title: 'Menu', href: '#' },
  { title: 'Testimonials', href: '#' },
  { title: 'Find Us', href: '#' },
  { title: 'Reserve a Table', href: '#' },
]

export default function FooterSection() {
  return (
    <footer className="relative bg-primary text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">

        {/* Logo */}
        <div className="flex justify-center">
        <Link
            href="/"
            aria-label="Go home"
            className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold tracking-wide
                    hover:text-accent transition-colors"
        >
            <span className="scale-125 sm:scale-150">
            <BistroLogo />
            </span>
            <span>DIBS</span>
        </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative group text-white/80 hover:text-accent transition-colors"
            >
              {link.title}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {/* Facebook */}
          <Link
            href="#"
            aria-label="Facebook"
            className="group rounded-full p-3 bg-white/5 hover:bg-accent/20 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-accent/40"
          >
            <svg
              className="size-5 text-white group-hover:text-accent transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href="#"
            aria-label="Instagram"
            className="group rounded-full p-3 bg-white/5 hover:bg-accent/20 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-accent/40"
          >
            <svg
              className="size-5 text-white group-hover:text-accent transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} DIBS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

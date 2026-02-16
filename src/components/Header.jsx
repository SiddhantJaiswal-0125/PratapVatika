import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'events', label: 'Events', href: '#events' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
  ]

  const socialLinks = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/1234567890',
      icon: '/Whatsapp.png',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com',
      icon: '/Instagram.png',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      url: 'https://youtube.com',
      icon: '/Youtube.png',
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-white/10
      ${scrolled ? 'bg-[#5E7153]/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Left: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="font-montserrat text-xs tracking-[0.2em] font-medium text-white hover:text-[#C5A059] transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Center: Logo */}
        <a href="#" className="transform hover:scale-105 transition-transform duration-300">
          <img
            src="/PrataapVatikaLogoGol.png"
            alt="Pratap Vatika"
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-14' : 'h-20'}`}
          />
        </a>

        {/* Right: CTA & Mobile Menu */}
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 
                       border border-[#C5A059] rounded-full 
                       font-montserrat text-xs font-semibold tracking-widest text-white 
                       hover:bg-[#C5A059] hover:text-white transition-all duration-300 uppercase"
          >
            Contact Us
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-[#C5A059] transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        socialLinks={socialLinks}
        handleNavClick={() => setIsMenuOpen(false)}
      />
    </header>
  )
}

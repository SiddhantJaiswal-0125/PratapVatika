import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [activeNav, setActiveNav] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'events', label: 'EVENTS', href: '#events' },
    { id: 'gallery', label: 'GALLERY', href: '#gallery' },
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

  const handleNavClick = (id) => {
    setActiveNav(id)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#5E7153] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="block hover:opacity-90 transition-opacity duration-300">
          <img
            src="/PrataapVatikaLogoGol.png"
            alt="Pratap Vatika"
            className="h-20 w-auto object-contain drop-shadow-sm"
          />
        </a>

        <nav className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2 font-montserrat tracking-[0.15em] text-xs font-light">
          <div className="NavBarBox flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.id} className="flex items-center group">
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-white/90 hover:text-white transition-colors duration-300 uppercase py-1"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full opacity-80"></span>
                </a>

                <div className="h-4 w-0.5 bg-white/50 ml-8 transform group-last:hidden"></div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative px-8 py-3 overflow-hidden rounded-sm bg-black/20 hover:bg-[#C5A059] transition-all duration-500 ease-out border border-white/10 hover:border-transparent"
            onClick={() => handleNavClick('contact')}
          >
            <span className="relative z-10 text-white text-xs tracking-[0.2em] uppercase font-medium group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-300 opacity-80 hover:opacity-100"
                title={social.label}
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-5 h-5 object-contain filter brightness-0 invert drop-shadow-md"
                />
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white/90 hover:text-white focus:outline-none ml-4 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        socialLinks={socialLinks}
        handleNavClick={handleNavClick}
      />
    </header>
  )
}

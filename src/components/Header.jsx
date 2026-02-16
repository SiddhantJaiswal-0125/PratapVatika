import { useState } from 'react'

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
    <header className="bg-[#5E7153] text-white w-full relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between md:justify-center">

        {/* Mobile Logo / Brand (Optional, keeping layout consistent with request) */}
        <div className="md:hidden text-xl font-bold tracking-wider">
          PRATAP VATIKA
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <div key={item.id} className="flex items-center text-white">
              <a
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className="text-sm tracking-[0.2em] font-medium hover:text-gray-200 transition-colors uppercase"
              >
                {item.label}
              </a>
              <div className="h-8 w-px bg-white/50 ml-6"></div>
            </div>
          ))}

          <a
            href="#contact"
            className="ml-0 bg-black text-white text-sm tracking-[0.2em] font-medium py-3 px-8 hover:bg-gray-900 transition-colors uppercase"
            onClick={() => handleNavClick('contact')}
          >
            CONTACT US
          </a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              title={social.label}
              aria-label={social.label}
            >
              <img
                src={social.icon}
                alt={social.label}
                className="w-6 h-6 object-contain filter brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#5E7153] border-t border-white/20 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className="text-white text-sm tracking-[0.2em] font-medium hover:text-gray-200 transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-black text-white text-sm tracking-[0.2em] font-medium py-3 px-8 hover:bg-gray-900 transition-colors uppercase"
            onClick={() => handleNavClick('contact')}
          >
            CONTACT US
          </a>

          <div className="flex items-center gap-6 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                title={social.label}
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

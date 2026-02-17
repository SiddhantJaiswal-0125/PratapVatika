export default function MobileMenu({ isMenuOpen, navItems, socialLinks, handleNavClick }) {
    return (
        <div
            className={`md:hidden absolute top-full left-0 w-full bg-[#5E7153]/95 backdrop-blur-md border-t border-white/10 shadow-xl transition-all duration-500 ease-in-out z-40 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'
                }`}
        >
            <nav className="flex flex-col items-center gap-8 font-montserrat">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className="text-white/90 text-sm tracking-[0.2em] font-light hover:text-white transition-all duration-300 uppercase hover:tracking-[0.25em]"
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href="#contact"
                    className="relative px-10 py-3 mt-2 overflow-hidden bg-black/30 hover:bg-[#C5A059] border border-white/20 hover:border-transparent transition-all duration-300 group"
                    onClick={() => handleNavClick('contact')}
                >
                    <span className="relative z-10 text-white text-xs tracking-[0.2em] uppercase font-medium group-hover:text-white transition-colors duration-300">
                        Contact Us
                    </span>
                </a>

                {/* <div className="flex items-center gap-8 mt-6">
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
                                className="w-5 h-5 object-contain filter brightness-0 invert drop-shadow-sm"
                            />
                        </a>
                    ))}
                </div> */}
            </nav>
        </div>
    )
}

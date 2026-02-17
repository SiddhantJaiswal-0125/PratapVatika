import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu({ isMenuOpen, navItems, handleNavClick }) {
    return (
        <div
            className={`md:hidden absolute top-full left-0 w-full bg-[#5E7153] border-t border-white/10 shadow-2xl transition-all duration-500 ease-in-out z-40 overflow-hidden ${isMenuOpen ? 'h-[calc(100vh-80px)] opacity-100' : 'h-0 opacity-0'
                }`}
        >
            <nav className="flex flex-col items-center justify-center h-full gap-10 pb-20">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className="font-playfair text-3xl text-[#FAF9F6] tracking-wide hover:text-[#C5A059] hover:scale-105 transition-all duration-300"
                    >
                        {item.label}
                    </Link>
                ))}

                <div className="w-12 h-0.5 bg-[#C5A059]/30 rounded-full"></div>

                <a
                    href="https://wa.me/917543959399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border border-[#C5A059] rounded-full font-montserrat text-sm font-semibold tracking-widest text-[#FAF9F6] hover:bg-[#C5A059] hover:text-white transition-all duration-300 uppercase"
                    onClick={() => handleNavClick('contact')}
                >
                    Contact Us
                </a>
            </nav>
        </div>
    )
}

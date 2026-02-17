import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/FooterBg.png"
                    alt="Jungle Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Top Section: Socials & Whatsapp */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-12 gap-8">

                    {/* Follow Us */}
                    <div className="flex items-center gap-6">
                        <span className="font-playfair text-2xl tracking-wide">Follow Us On</span>
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <img src="/Instagram.png" alt="Instagram" className="w-8 h-8 filter brightness-0 invert" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <img src="/Youtube.png" alt="YouTube" className="w-8 h-8 filter brightness-0 invert" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <img src="/Facebook.png" alt="Facebook" className="w-8 h-8 filter brightness-0 invert" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-center md:text-right">
                            <span className="block font-playfair text-2xl tracking-wide">Connect with us on</span>
                            <span className="block font-playfair text-2xl tracking-wide">Whatsapp</span>
                        </div>

                        <a
                            href="https://wa.me/917543959399"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#5E7153] px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-colors group"
                        >
                            <img src="/WhatsappGreen.png" alt="Whatsapp" className="w-6 h-6" />
                            <span className="font-montserrat font-semibold text-lg text-[#5E7153]">+91 75439 59399</span>
                            <span className="bg-black rounded-full p-1 ml-2 group-hover:translate-x-1 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    <div className="md:col-span-4 space-y-6 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <img src="/PrataapVatikaLogoWhite.png" alt="Pratap Vatika Logo" className="h-28 w-auto mb-4" />


                            <h3 className="font-playfair text-3xl font-bold tracking-wider mb-1">Pratap Vatika</h3>
                            <p className="font-playfair italic text-sm text-gray-400 mb-6">Luxury in the Heart of Nature</p>
                        </div>

                        <p className="font-montserrat text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                            A serene retreat nestled in nature, where lush greenery and open landscapes come together to create a peaceful and unforgettable experience at Pratap Vatika, near Saranda Forest, Jharkhand.
                        </p>
                    </div>

                    <div className="md:col-span-4 md:pl-12 text-center md:text-left">
                        <h4 className="font-playfair text-xl tracking-widest mb-8 border-b border-white/20 inline-block pb-2">INFORMATION</h4>
                        <ul className="space-y-4 font-montserrat text-sm text-gray-300">
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Terms and Conditions</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Personal Data Processing Policy</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Reservation Policy</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Gym Policy</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Write to Us (Complaints, Claims & Suggestions – PQRS)</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Frequently Asked Questions</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 text-center md:text-left">
                        <h4 className="font-playfair text-xl tracking-widest mb-8 border-b border-white/20 inline-block pb-2">CONTACT</h4>
                        <ul className="space-y-6 font-montserrat text-sm text-gray-300">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <span className="font-semibold text-white">Email:</span>
                                <a href="mailto:info@pratapvatika.com" className="hover:text-[#C5A059] transition-colors">info@pratapvatika.com</a>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <span className="font-semibold text-white">Phone:</span>
                                <a href="tel:+917543959399" className="hover:text-[#C5A059] transition-colors">+91 754395 9399</a>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <span className="font-semibold text-white shrink-0">Address:</span>
                                <a href="https://maps.app.goo.gl/RtysGCNnSVU7EHDq9?g_st=iw" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                                    Pratap Vatika Jungle Resort,<br />9599+HW, Gopipur,<br />Jharkhand, India
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center font-montserrat text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Pratap Vatika. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pt-8">
                    {/* Brand & Connect Section */}
                    <div className="lg:col-span-5 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="flex flex-col items-center lg:items-start">
                            <img src="/PrataapVatikaLogoWhite.png" alt="Pratap Vatika Logo" className="h-28 w-auto mb-6" />
                            <h3 className="font-playfair text-3xl font-bold tracking-wider mb-2 text-[#C5A059]">Pratap Vatika</h3>
                            <p className="font-playfair italic text-sm text-gray-400 mb-6">Luxury in the Heart of Nature</p>
                        </div>

                        <p className="font-montserrat text-gray-300 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                            A serene retreat nestled in nature, where lush greenery and open landscapes come together to create a peaceful and unforgettable experience at <span className="text-[#C5A059] font-medium">Pratap Vatika</span>, near Saranda Forest, Jharkhand.
                        </p>

                        {/* WhatsApp CTA */}
                        <div className="pt-6 border-t border-white/10 w-full max-w-md">
                            <span className="block font-playfair text-lg tracking-widest text-white mb-6 uppercase text-center lg:text-left">Connect With Us</span>
                            <a
                                href="https://wa.me/917543959399"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#5E7153] px-6 py-3.5 rounded-full flex items-center justify-center lg:justify-start gap-4 hover:bg-gray-100 transition-all duration-300 group w-fit mx-auto lg:mx-0 shadow-lg hover:shadow-white/20"
                            >
                                <img src="/WhatsappGreen.png" alt="Whatsapp" className="w-6 h-6" />
                                <span className="font-montserrat font-bold text-base text-[#5E7153]">Chat on WhatsApp</span>
                                <span className="bg-[#5E7153] rounded-full p-1.5 ml-1 group-hover:translate-x-1 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Spacer for Desktop */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Contact Section */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start pt-2 lg:pt-0">
                        <h4 className="font-playfair text-xl tracking-widest mb-10 border-b border-[#C5A059]/40 inline-block pb-3 text-white uppercase sm:mx-auto lg:mx-0 text-center">Contact Information</h4>

                        <ul className="space-y-10 font-montserrat text-sm text-gray-300 w-full max-w-md">
                            {/* Phone Numbers */}
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                                <div className="bg-gradient-to-br from-[#C5A059] to-[#8C6D34] p-3.5 rounded-full shrink-0 shadow-lg shadow-[#C5A059]/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 items-center sm:items-start w-full">
                                    <span className="font-semibold text-white tracking-widest text-xs uppercase opacity-80">Reservations & Enquiries</span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full text-center sm:text-left">
                                        <a href="tel:+917543959399" className="hover:text-[#C5A059] transition-colors text-base font-medium flex items-center justify-center sm:justify-start gap-2">
                                            <span>+91 75439 59399</span>
                                        </a>
                                        <a href="tel:+919471736437" className="hover:text-[#C5A059] transition-colors text-base font-medium flex items-center justify-center sm:justify-start gap-2">
                                            <span>+91 94717 36437</span>
                                        </a>
                                        <a href="tel:+919341473062" className="hover:text-[#C5A059] transition-colors text-base font-medium flex items-center justify-center sm:justify-start gap-2">
                                            <span>+91 93414 73062</span>
                                        </a>
                                        <a href="tel:+917858044428" className="hover:text-[#C5A059] transition-colors text-base font-medium flex items-center justify-center sm:justify-start gap-2">
                                            <span>+91 78580 44428</span>
                                        </a>
                                    </div>
                                </div>
                            </li>

                            {/* Address */}
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-4 sm:pt-2 border-t border-white/5 sm:border-none">
                                <div className="bg-gradient-to-br from-[#C5A059] to-[#8C6D34] p-3.5 rounded-full shrink-0 shadow-lg shadow-[#C5A059]/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2 text-center sm:text-left">
                                    <span className="font-semibold text-white tracking-widest text-xs uppercase opacity-80 mb-1">Our Location</span>
                                    <a href="https://maps.app.goo.gl/RtysGCNnSVU7EHDq9?g_st=iw" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors leading-relaxed text-base">
                                        <strong className="text-white font-semibold flex-shrink-0">Pratap Vatika</strong> Jungle Resort,<br />
                                        9599+HW, Gopipur,<br />
                                        Jharkhand, India
                                    </a>
                                </div>
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

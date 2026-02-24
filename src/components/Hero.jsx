import React from 'react';

export default function Hero() {
    return (
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            <div className="absolute inset-0">
                <img
                    className="object-cover w-full h-full opacity-60"
                    src="/HeroElementBaclground.png"
                    alt="Jungle Resort Background"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            </div>

            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full lg:w-2/3 xl:w-1/2">
                        <h1 className="font-playfair text-xl font-normal tracking-tight text-white/80">
                            Experience Saranda Forest, Jharkhand
                        </h1>
                        <p className="mt-6 tracking-tighter text-white">
                            <span className="font-montserrat font-normal text-5xl sm:text-6xl md:text-7xl">Welcome to</span><br />
                            <span className="font-playfair italic font-normal text-6xl sm:text-7xl md:text-8xl text-[#C5A059]">Pratap Vatika</span>
                        </p>
                        <p className="mt-8 font-montserrat text-base font-light leading-7 text-white/70 max-w-lg">
                            Discover the enchanting beauty of the <strong>Saranda Forest in Jharkhand</strong>. As the premier luxury resort in the "Land of Seven Hundred Hills," <span className="text-[#C5A059] font-medium">Pratap Vatika</span> offers a serene escape amidst India's largest Sal forest.
                        </p>
                        <p className="mt-8 font-montserrat text-xl font-medium text-[#C5A059]">Plan your trip today!</p>

                        <div className="flex items-center mt-8 space-x-3 sm:space-x-4">
                            <a
                                href="/events"
                                title="Explore"
                                className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    font-montserrat
                    text-base
                    font-semibold
                    transition-all
                    duration-200
                    bg-[#C5A059]
                    border-2 border-[#C5A059]
                    rounded-full
                    text-white
                    hover:bg-transparent hover:text-[#C5A059]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A059]
                "
                                role="button"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

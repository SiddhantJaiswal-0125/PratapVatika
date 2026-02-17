import React, { useEffect, useRef } from 'react';

const eventsContent = [
    {
        id: 'weddings',
        label: 'WEDDINGS',
        title: 'Just Say "I Do"',
        description: "Imagine stunning mountains and the glory of nature bearing witness to your perfect wedding. Our sublime civil wedding setting brings majesty and beauty together as you bring unity and wonder to your new life. Love was never so enchanting.",
        image: "/Events-Images/Event Celebration at Vibrant venue.png",
        thumbnail: "/Events-Images/Flowered Enterance.png",
        layout: "right"
    },
    {
        id: 'celebrations',
        label: 'CELEBRATIONS',
        title: "Where Generations Meet",
        description: "From milestone birthdays to silver anniversaries, every family gathering deserves a setting as timeless as your memories. Pratap Vatika provides the perfect backdrop for laughter, joy, and the coming together of hearts across generations.",
        image: "/Events-Images/Garden Celebrations.png",
        thumbnail: "/Events-Images/Garden Banquet.png",
        layout: "left"
    },
    {
        id: 'garden-parties',
        label: 'GARDEN PARTIES',
        title: "Soirees Under the Stars",
        description: "Host an elegant afternoon tea or a vibrant evening cocktail party in our meticulously landscaped gardens. Let the fresh forest breeze and the gentle rustle of leaves create an atmosphere of relaxed sophistication for your guests.",
        image: "/Events-Images/Event Garden Gathering.png",
        thumbnail: "/Events-Images/Garden Paviliion.png",
        layout: "right"
    }
];

const EventSection = ({ event }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const isRightLayout = event.layout === 'right';

    return (
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000 ease-out py-20 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isRightLayout ? '' : 'lg:flex-row-reverse'}`}>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <span className="font-montserrat text-sm tracking-[0.2em] text-gray-500 uppercase block mb-2">
                        {event.label}
                    </span>
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#5E7153] tracking-wide">
                        {event.title}
                    </h2>

                    {/* Thumbnail Image (Mobile/Desktop variation) */}
                    <div className="flex justify-center lg:justify-start py-6">
                        <div className="w-32 h-40 overflow-hidden shadow-lg border-4 border-white transform rotate-3 transition-transform hover:rotate-0 duration-500">
                            <img src={event.thumbnail} alt="Detail" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <p className="font-montserrat text-gray-700 leading-loose text-lg font-light max-w-lg mx-auto lg:mx-0">
                        {event.description}
                    </p>

                    {/* <div className="pt-4">
                        <a href="#contact" className="inline-block border-b border-[#C5A059] text-[#C5A059] font-montserrat text-sm tracking-widest uppercase hover:text-[#5E7153] hover:border-[#5E7153] transition-colors pb-1">
                            Plan Your Event
                        </a>
                    </div> */}
                </div>

                {/* Main Large Image */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group overflow-hidden shadow-2xl h-[500px] lg:h-[700px] w-full">
                        <img
                            src={event.image}
                            alt={event.label}
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default function EventsPage() {

    // SEO / Meta update (Simple effect for now)
    useEffect(() => {
        document.title = "Events & Weddings | Pratap Vatika - Saranda Forest Resort";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FAF9F6] min-h-screen">

            {/* Hero Section */}
            <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
                <img
                    src="/Events-Images/Garden Walkway With Lights at Night.png"
                    alt="Events at Pratap Vatika"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    {/* <p className="font-montserrat text-white/90 tracking-[0.3em] text-xs md:text-sm uppercase mb-4 animate-fade-in-up">
                        Overview
                    </p> */}
                    <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white italic tracking-wide animate-fade-in-up delay-100">
                        Meet & Celebrate
                    </h1>
                </div>
            </div>

            {/* Tagline Interstitial */}
            <div className="bg-[#FAF9F6] py-24 text-center px-4">
                <h2 className="font-playfair text-2xl md:text-4xl text-[#5E7153] tracking-wider leading-relaxed">
                    A ONE-OF-A-KIND DESTINATION<br />
                    <span className="italic text-[#C5A059] text-3xl md:text-5xl pr-3">Unforgettable</span>
                    FOR EVENTS<br />
                    <span className="block mt-6 text-base md:text-lg font-montserrat font-normal tracking-[0.2em] text-gray-500">
                        SINCE 2023
                    </span>
                </h2>
            </div>

            {/* Event Sections Loop */}
            <div className="space-y-0">
                {eventsContent.map(event => (
                    <EventSection key={event.id} event={event} />
                ))}
            </div>

            {/* Final CTA Strip */}
            <div className="bg-[#5E7153] py-20 text-center text-white px-6">
                <h3 className="font-playfair text-3xl md:text-4xl italic mb-6">Start planning your dream event</h3>
                <p className="font-montserrat text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Whether it's an intimate gathering or a grand celebration, our team is dedicated to bringing your vision to life amidst the beauty of Saranda Forest.
                </p>
                <a
                    href="https://wa.me/917543959399"
                    className="inline-block px-10 py-4 bg-transparent border border-[#C5A059] text-white font-montserrat tracking-[0.2em] text-xs hover:bg-[#C5A059] hover:text-white transition-all duration-300"
                >
                    ENQUIRE NOW
                </a>
            </div>

        </div>
    );
}

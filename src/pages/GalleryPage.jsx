import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlidingBanner from '../components/SlidingBanner';

const allGalleryItems = [
    { id: 1, type: 'image', src: '/Gallery/Luxury hotel at dusk with planters.png', category: 'HOTEL', colSpan: 'col-span-1 md:col-span-1' },
    { id: 2, type: 'image', src: '/Gallery/Cozy hotel room with warm lighting.png', category: 'ROOMS', colSpan: 'col-span-1 md:col-span-1' },
    { id: 3, type: 'image', src: '/Gallery/Garden Walkway With Lights at Night.png', category: 'NATURE', colSpan: 'col-span-1 md:col-span-2 lg:col-span-1' },
    { id: 4, type: 'image', src: '/Gallery/Event Celebration at Vibrant venue.png', category: 'EVENTS', colSpan: 'col-span-1 md:col-span-2 lg:col-span-2' },
    { id: 5, type: 'cta', colSpan: 'col-span-1 md:col-span-1' },
    { id: 6, type: 'image', src: '/Gallery/Charming garden dining retreat.png', category: 'DINING', colSpan: 'col-span-1 md:col-span-1' },
    { id: 7, type: 'image', src: '/Gallery/Modern bathroom with chrome accents.png', category: 'ROOMS', colSpan: 'col-span-1 md:col-span-1' },
    { id: 8, type: 'image', src: '/Gallery/Elegant red brick guest lodge by day.png', category: 'HOTEL', colSpan: 'col-span-1 md:col-span-2 lg:col-span-2' },
    { id: 9, type: 'image', src: '/Gallery/Garden Celebrations.png', category: 'EVENTS', colSpan: 'col-span-1 md:col-span-1' },
    { id: 10, type: 'image', src: '/Gallery/Outdoor wicker seating with lush greenery.png', category: 'NATURE', colSpan: 'col-span-1 md:col-span-1' },
    { id: 11, type: 'image', src: '/Gallery/Cozy hotel room with warm lighting (1).png', category: 'ROOMS', colSpan: 'col-span-1 md:col-span-1' },
    { id: 12, type: 'image', src: '/Gallery/Garden Banquet.png', category: 'DINING', colSpan: 'col-span-1 md:col-span-2 lg:col-span-2' },
    { id: 13, type: 'image', src: '/Gallery/Charming garden swing on a sunny day.png', category: 'NATURE', colSpan: 'col-span-1 md:col-span-1' },
    { id: 14, type: 'image', src: '/Gallery/Marble bust in tropical garden.png', category: 'NATURE', colSpan: 'col-span-1 md:col-span-1' },
    { id: 15, type: 'image', src: '/Gallery/Rustic wishing well in garden.png', category: 'NATURE', colSpan: 'col-span-1 md:col-span-1' },
];

const categories = ['OVERVIEW', 'HOTEL', 'ROOMS & SUITES', 'EVENTS', 'NATURE', 'DINING'];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('OVERVIEW');
    const [filteredItems, setFilteredItems] = useState(allGalleryItems);

    useEffect(() => {
        document.title = "Gallery | Pratap Vatika - Luxury Forest Resort";
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeCategory === 'OVERVIEW') {
            setFilteredItems(allGalleryItems);
        } else {
            const catPrefix = activeCategory === 'ROOMS & SUITES' ? 'ROOMS' : activeCategory;
            setFilteredItems(
                allGalleryItems.filter(item => item.type === 'cta' || item.category === catPrefix)
            );
        }
    }, [activeCategory]);

    return (
        <div className="bg-[#FAF9F6] min-h-screen pt-24 font-montserrat">

            <div className="mb-8">
                <SlidingBanner />
            </div>

            {/* Header / Intro Section - Full Width */}
            <div className="max-w-[1600px] mx-auto px-0 border-t border-b border-[#e8e3d8] overflow-hidden">

                {/* Masonry Layout using CSS Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-[1px] bg-[#e8e3d8]">

                    {/* First Cell: Title & Filters */}
                    <div className="bg-[#FAF9F6] p-10 lg:p-14 xl:p-20 flex flex-col justify-center break-inside-avoid mb-[1px]">
                        <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight mb-8 text-[#5E7153]">
                            <span className="italic text-[#C5A059]">Pratap Vatika</span>—Immerse yourself in the grandeur of our forest resort.
                        </h1>

                        <div className="flex flex-wrap gap-3 mt-4">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full border border-[#C5A059] text-xs font-montserrat tracking-widest uppercase transition-all duration-300
                                        ${activeCategory === cat
                                            ? 'bg-[#C5A059] text-white'
                                            : 'bg-transparent text-[#C5A059] hover:bg-[#C5A059]/10'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Items */}
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => {
                            if (item.type === 'cta') {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        key={`cta-${item.id}`}
                                        className="bg-[#5E7153] min-h-[400px] p-10 lg:p-16 flex flex-col items-center justify-center text-center text-white break-inside-avoid mb-[1px]"
                                    >
                                        <h2 className="font-playfair text-2xl lg:text-3xl xl:text-4xl tracking-wide mb-8 leading-relaxed uppercase max-w-sm mx-auto">
                                            Experience our special offers and enjoy an unforgettable time at <span className="text-[#C5A059]">Pratap Vatika</span>.
                                        </h2>
                                        {/* <a href="/events" className="uppercase text-xs tracking-widest font-montserrat font-semibold border-b border-white pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors duration-300">
                                            ALL PACKAGES
                                        </a> */}
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    key={`img-${item.id}`}
                                    className="bg-[#FAF9F6] p-8 lg:p-12 xl:p-16 flex items-center justify-center group overflow-hidden break-inside-avoid mb-[1px]"
                                >
                                    <div className="w-full h-fit relative overflow-hidden flex items-center justify-center">
                                        <img
                                            src={item.src}
                                            alt={`${item.category} at Pratap Vatika`}
                                            className="w-full h-auto object-cover shadow-md transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-[10px] tracking-widest text-[#5E7153] uppercase font-semibold">
                                            {item.category}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="bg-[#FAF9F6] py-20 px-6 lg:px-12 border-t border-[#e8e3d8]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="font-playfair text-3xl md:text-4xl text-[#5E7153] italic">Discover Absolute Luxury in Saranda Forest</h2>
                    <p className="font-montserrat font-light text-gray-600 leading-loose text-sm md:text-base">
                        Welcome to the official gallery of <strong className="text-[#C5A059]">Pratap Vatika</strong>, the premier luxury resort nestled deep within the verdant landscapes of Saranda Forest.
                        Our photo gallery offers a glimpse into an extraordinary world where nature meets elegance. Browse through our curated collection of images showcasing our
                        opulent <strong>hotel rooms and suites</strong>, breathtaking <strong>garden dining</strong> retreats, and majestic <strong>wedding venues</strong>.
                        Whether you are planning a serene getaway or a vibrant celebration, <span className="text-[#C5A059] font-medium">Pratap Vatika</span> provides a stunning backdrop that promises
                        unforgettable memories. Immerse yourself in our visual journey and experience the distinctive charm that makes us the ultimate destination for luxury stays and events.
                    </p>
                </div>
            </div>

        </div>
    );
}

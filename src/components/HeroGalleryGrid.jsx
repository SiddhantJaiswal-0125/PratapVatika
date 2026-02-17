import React, { useState } from 'react';

const initialGalleryItems = [
    {
        id: 1,
        title: "Outdoor Event Hall",
        image: "/Courtyard.png",
        featured: true,
    },
    {
        id: 2,
        title: "Outdoor Seating",
        image: "/ClosedDining.png",
        featured: false,
    },
    {
        id: 3,
        title: "The Celebration Walkway",
        image: "/BeautifulAlley.png",
        featured: false,
    },
    {
        id: 4,
        title: "The Green Canopy Court",
        image: "/The Green Canopy Court.png",
        featured: false,
    },
    {
        id: 5,
        title: "Garden Path",
        image: "/Graden Path.png",
        featured: false,
    },
];

export default function HeroGalleryGrid() {
    const [items, setItems] = useState(initialGalleryItems);
    const [animatingIndex, setAnimatingIndex] = useState(null);

    const handleImageSwap = (clickedIndexRaw) => {
        if (animatingIndex !== null) return;

        setAnimatingIndex(clickedIndexRaw);

        setTimeout(() => {
            // The items in the right grid are sliced from index 1, so we add 1 to get the real index in 'items' array
            // actually, we can just pass the mapped index + 1
            const realIndex = clickedIndexRaw + 1;

            const newItems = [...items];
            // Swap the main image (index 0) with the clicked image
            [newItems[0], newItems[realIndex]] = [newItems[realIndex], newItems[0]];

            setItems(newItems);
            setAnimatingIndex(null);
        }, 500); // Wait for slide out
    };

    return (
        <section className="py-16 bg-[#FAF9F6]">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl text-[#C5A059] tracking-widest uppercase font-semibold">
                        Our Event Spaces
                    </h2>
                    <div className="w-24 h-1 bg-[#5E7153]/20 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[500px]">

                    <div className="relative group overflow-hidden h-[350px] lg:h-full w-full bg-gray-100">
                        <img
                            src={items[0].image}
                            alt={items[0].title}
                            className={`w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-105 ${animatingIndex !== null ? 'translate-x-[110%] opacity-50' : 'translate-x-0 opacity-100'}`}
                        />
                        <div className={`absolute bottom-8 left-8 bg-white px-8 py-4 shadow-lg transform transition-all duration-500 delay-100 ${animatingIndex !== null ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100 group-hover:-translate-y-2'}`}>
                            <h3 className="font-playfair text-[#C5A059] text-base font-bold tracking-wider uppercase">
                                {items[0].title}
                            </h3>
                        </div>
                    </div>

                    {/* Right Side Grid (2x2) */}
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                        {items.slice(1).map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => handleImageSwap(index)}
                                className="relative group overflow-hidden h-[180px] sm:h-[250px] lg:h-auto cursor-pointer bg-gray-100"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110 ${animatingIndex === index ? 'translate-x-[110%] opacity-50' : 'translate-x-0 opacity-100'}`}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                                {/* Label */}
                                <div className={`absolute bottom-6 left-6 bg-white px-5 py-2 shadow-md transform transition-all duration-500 delay-75 ${animatingIndex === index ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100 group-hover:-translate-y-1'}`}>
                                    <h3 className="font-playfair text-[#C5A059] text-xs font-bold tracking-wider uppercase">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

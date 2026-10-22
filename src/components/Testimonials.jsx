import React, { useRef } from 'react';

const testimonials = [
    {
        id: 1,
        content: <>The serenity of Saranda Forest combined with the luxury of <span className="text-[#C5A059] font-medium">Pratap Vatika</span> made our weekend unforgettable. The service was impeccable and the food was divine. A true jungle paradise.</>,
        author: "Anjali Sharma",
        role: "Nature Enthusiast",
        date: "October 12, 2026",
        rating: 5
    },
    {
    id: 10,
    content: <>प्रकृति के बीच <span className="text-[#C5A059] font-medium">Pratap Vatika</span> में बिताया गया समय बेहद शानदार रहा। खूबसूरत माहौल, स्वादिष्ट खाना और बेहतरीन सर्विस ने हमारी ट्रिप को यादगार बना दिया।</>,
    author: "Rahul Verma",
    role: "Family Guest",
    date: "October 18, 2026",
    rating: 5
},
    {
        id: 2,
        content: "A hidden gem in Jharkhand! The outdoor dining experience near the Sal forest was magical. The attention to detail in the resort's design is remarkable. Highly recommended for peace seekers.",
        author: "Rahul Verma",
        role: "Travel Blogger",
        date: "September 24, 2026",
        rating: 5
    },
    {
        id: 3,
        content: "Perfect destination for a family getaway. The staff went above and beyond to ensure our comfort. The rooms are spacious, elegant, and offer breathtaking views of the forest.",
        author: "Priya Singh",
        role: "Architect",
        date: "August 17, 2026",
        rating: 4
    },
    {
        id: 4,
        content: <>An extraordinary escape from the hustle of everyday life. The peaceful surroundings of Saranda Forest and the elegance of <span className="text-[#C5A059] font-medium">Pratap Vatika</span> created the perfect retreat. Every moment felt special.</>,
        author: "Aarav Mehta",
        role: "Travel Enthusiast",
        date: "July 29, 2026",
        rating: 5
    },
    {
        id: 5,
        content: "The perfect blend of nature, comfort, and hospitality. Waking up to the refreshing forest air and spending evenings surrounded by greenery was an experience worth cherishing.",
        author: "Sneha Kapoor",
        role: "Lifestyle Blogger",
        date: "June 14, 2026",
        rating: 3
    },
    {
    id: 11,
    content: <>अगर आप शांति और सुकून के साथ कुछ अच्छा समय बिताना चाहते हैं, तो <span className="text-[#C5A059] font-medium">Pratap Vatika</span> एक बेहतरीन जगह है। यहाँ की हर चीज़ बहुत अच्छी लगी। ज़रूर विज़िट करें!</>,
    author: "Priya Singh",
    role: "Weekend Traveler",
    date: "October 20, 2026",
    rating: 5
},
    {
        id: 6,
        content: <>From the beautifully designed spaces to the warm hospitality, everything at <span className="text-[#C5A059] font-medium">Pratap Vatika</span> felt thoughtfully curated. A wonderful destination for anyone seeking tranquility and a touch of luxury.</>,
        author: "Vikram Malhotra",
        role: "Business Professional",
        date: "May 22, 2026",
        rating: 5
    },
    {
        id: 7,
        content: "We were captivated by the natural beauty surrounding the resort. The peaceful atmosphere, delicious food, and attentive staff made our stay relaxing and memorable. We would love to return.",
        author: "Neha Agarwal",
        role: "Photographer",
        date: "October 5, 2026",
        rating: 4
    },
    {
        id: 8,
        content: "A beautiful destination for celebrating special moments with loved ones. The lush greenery, elegant ambience, and exceptional hospitality made the entire experience feel truly premium.",
        author: "Karan Sinha",
        role: "Entrepreneur",
        date: "April 19, 2026",
        rating: 5
    },
    {
        id: 9,
        content: <>If you're looking for a peaceful getaway surrounded by nature, <span className="text-[#C5A059] font-medium">Pratap Vatika</span> is worth exploring. The serene setting, inviting atmosphere, and thoughtful service make it a memorable retreat in Jharkhand.</>,
        author: "Ritika Das",
        role: "Weekend Traveler",
        date: "August 3, 2026",
        rating: 4
    }
];

export default function Testimonials() {
     const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -350 : 350,
                behavior: "smooth"
            });
        }
    };
    return (
        <section className="py-20 bg-[#FAF9F6] relative overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="font-montserrat text-sm font-medium text-[#C5A059] tracking-widest uppercase mb-3">
                        Guest Experiences
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl text-[#5E7153] font-bold tracking-wide">
                        What humble hearts say about us
                    </h2>
                    <div className="w-24 h-1 bg-[#C5A059]/30 mt-6"></div>
                </div>

                {/* Decorative Background Blob - Adjusted colors for premium feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full pointer-events-none">
                    <div className="w-full h-full opacity-20 blur-3xl rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.3) 0%, rgba(94,113,83,0.1) 70%, transparent 100%)' }}>
                    </div>
                </div>

                {/* Grid */}
            


{/* Scrollable Testimonials */}

{/* Scrollable Testimonials */}
<div className="relative">

    {/* Navigation Buttons */}
    <div className="flex justify-end gap-3 mb-6">
        <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous testimonials"
            className="w-11 h-11 flex items-center justify-center border border-[#C5A059]/50 text-[#5E7153] hover:bg-[#5E7153] hover:text-white transition duration-300"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>

        <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next testimonials"
            className="w-11 h-11 flex items-center justify-center border border-[#C5A059]/50 text-[#5E7153] hover:bg-[#5E7153] hover:text-white transition duration-300"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    </div>

    {/* Keep your existing scrollable div here */}
    <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
        style={{ scrollbarWidth: "thin" }}
    >
        {/* Keep your existing testimonials.map(...) here */}
    {/* </div> */}

        {testimonials.map((review) => (
            <div
                key={review.id}
                className="flex flex-col flex-none w-[85%] sm:w-[60%] lg:w-[calc(33.333%-16px)] snap-start overflow-hidden bg-white/80 backdrop-blur-sm rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#5E7153]/10"
            >
                <div className="flex flex-col justify-between flex-1 p-8">
                    <div className="flex-1">
                        {/* Stars */}
                        <div className="flex items-center space-x-1 mb-6">
                            {[...Array(review.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-[#C5A059]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Review */}
                        <blockquote>
                            <p className="font-playfair text-lg leading-relaxed text-[#5E7153] italic">
                                “{review.content}”
                            </p>
                        </blockquote>
                    </div>

                    {/* Author */}
                    <div className="flex items-center mt-8 border-t border-[#5E7153]/10 pt-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5E7153] flex items-center justify-center text-white font-playfair font-bold text-xl">
                            {review.author.charAt(0)}
                        </div>
                        
<div className="ml-4 flex-1">
    <p className="text-base font-bold text-[#5E7153] font-montserrat">
        {review.author}
    </p>
    <p className="mt-0.5 text-xs font-montserrat tracking-wide text-[#C5A059] uppercase">
        {review.role}
    </p>
    <p className="mt-2 text-xs text-gray-500 font-montserrat">
        {review.date}
    </p>
</div>

                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


            </div>
        </section>
    );
}

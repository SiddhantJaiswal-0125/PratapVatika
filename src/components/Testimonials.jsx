import React from 'react';

const testimonials = [
    {
        id: 1,
        content: "The serenity of Saranda Forest combined with the luxury of Pratap Vatika made our weekend unforgettable. The service was impeccable and the food was divine. A true jungle paradise.",
        author: "Anjali Sharma",
        role: "Nature Enthusiast",
        rating: 5
    },
    {
        id: 2,
        content: "A hidden gem in Jharkhand! The outdoor dining experience near the Sal forest was magical. The attention to detail in the resort's design is remarkable. Highly recommended for peace seekers.",
        author: "Rahul Verma",
        role: "Travel Blogger",
        rating: 5
    },
    {
        id: 3,
        content: "Perfect destination for a family getaway. The staff went above and beyond to ensure our comfort. The rooms are spacious, elegant, and offer breathtaking views of the forest.",
        author: "Priya Singh",
        role: "Architect",
        rating: 5
    }
];

export default function Testimonials() {
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
                <div className="relative grid max-w-lg grid-cols-1 gap-8 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                    {testimonials.map((review) => (
                        <div key={review.id} className="flex flex-col overflow-hidden bg-white/80 backdrop-blur-sm rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#5E7153]/10">
                            <div className="flex flex-col justify-between flex-1 p-8">
                                <div className="flex-1">
                                    {/* Stars */}
                                    <div className="flex items-center space-x-1 mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-[#C5A059]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <blockquote className="flex-1">
                                        <p className="font-playfair text-lg leading-relaxed text-[#5E7153] italic">
                                            “{review.content}”
                                        </p>
                                    </blockquote>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center mt-8 border-t border-[#5E7153]/10 pt-6">
                                    {/* Placeholder Avatar - Elegant Initial */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5E7153] flex items-center justify-center text-white font-playfair font-bold text-xl">
                                        {review.author.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-bold text-[#5E7153] font-montserrat">{review.author}</p>
                                        <p className="mt-0.5 text-xs font-montserrat tracking-wide text-[#C5A059] uppercase">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

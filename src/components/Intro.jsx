import React from 'react';

export default function Intro() {
    return (
        <section className="py-16 md:py-24 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    <div className="w-full md:w-[55%]">
                        <div className="rounded-sm overflow-hidden shadow-2xl relative group h-[500px]">
                            <img
                                src="/OutsideDining.jpeg"
                                alt="Outdoor dining at Pratap Vatika Resort, Saranda Forest"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#5E7153]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        <div className="hidden md:block absolute -left-4 -bottom-4 w-24 h-24 bg-[#C5A059]/20 -z-10 rounded-full blur-2xl"></div>
                    </div>

                    <div className="w-full md:w-[45%] space-y-8 text-center md:text-left">
                        <h2 className="font-playfair text-3xl md:text-4xl text-[#C5A059] tracking-widest leading-tight uppercase relative inline-block">
                            Disconnect And Rediscover Nature
                            <span className="block h-1 w-24 bg-[#5E7153]/30 mt-4 mx-auto md:mx-0"></span>
                        </h2>

                        <div className="space-y-6 font-montserrat text-gray-700 leading-relaxed text-base md:text-lg font-light">
                            <p>
                                Experience the untouched beauty of <strong className="font-semibold text-[#5E7153]">Saranda Forest, Jharkhand</strong>, at <span className="text-[#C5A059] font-medium">Pratap Vatika</span> — your serene retreat nestled close to Asia's largest Sal forest. Surrounded by lush greenery, fresh forest air, and peaceful landscapes, our resort offers the perfect balance of comfort and nature.
                            </p>

                            <p>
                                Wake up to the soothing sounds of birds, enjoy quiet mornings under the trees, and spend your days exploring the scenic trails and natural charm of <strong className="font-semibold text-[#5E7153]">Saranda Forest</strong>. Whether you're planning a relaxing weekend getaway, a family vacation, or a nature escape in West Singhbhum, Pratap Vatika provides a warm and authentic forest stay.
                            </p>

                            <div className="font-playfair font-bold text-xl md:text-2xl text-gray-900 pt-4 border-l-4 border-[#C5A059] pl-6 md:ml-0 inline-block text-left">
                                <p>Step away from the noise.</p>
                                <p>Reconnect with nature.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

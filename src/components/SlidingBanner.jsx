import React from 'react';
import { motion } from 'framer-motion';

export default function SlidingBanner() {
    return (
        <div className="w-full bg-[#5E7153] text-[#C5A059] py-3 overflow-hidden border-y border-[#C5A059]/30 flex whitespace-nowrap z-40 relative">
            <motion.div
                className="flex w-max items-center font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
                <div className="flex items-center shrink-0">
                    <span className="mx-4 md:mx-12">✦ Bookings are now open for Grand Receptions, Majestic Marriages, and Milestone Birthdays</span>
                    <span className="mx-4 md:mx-12">✦ Experience unparalleled luxury at Pratap Vatika</span>
                    <span className="mx-4 md:mx-12">✦ Unforgettable moments await in the Saranda Forest</span>
                </div>

                {/* Exact Duplicate for seamless loop (-50% transform matches one exact full child grouping) */}
                <div className="flex items-center shrink-0">
                    <span className="mx-4 md:mx-12">✦ Bookings are now open for Grand Receptions, Majestic Marriages, and Milestone Birthdays</span>
                    <span className="mx-4 md:mx-12">✦ Experience unparalleled luxury at Pratap Vatika</span>
                    <span className="mx-4 md:mx-12">✦ Unforgettable moments await in the Saranda Forest</span>
                </div>
            </motion.div>
        </div>
    );
}

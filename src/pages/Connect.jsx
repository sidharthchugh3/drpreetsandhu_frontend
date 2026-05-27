import React from 'react';
import BookingSection from '../components/connect/BookingSection';
import SocialFeed from '../components/connect/SocialFeed';
import { connectContent } from '../data/connectData';

export default function Connect() {
    const { heroPoster } = connectContent;

    return (
        <main id="main-connect" className="pt-[84px] bg-white min-h-screen" style={{ fontFamily: '"Jost", sans-serif' }}>
            
            <section className="w-full">
                <img 
                    src={heroPoster.src} 
                    alt={heroPoster.alt} 
                    className="w-full h-auto object-cover border-b border-gray-100"
                />
            </section>

            <BookingSection />
            <SocialFeed />
            
        </main>
    );
}
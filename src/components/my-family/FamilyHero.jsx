import React from 'react';
import { familyContent } from '../../data/familyData';

export default function FamilyHero() {
    const { hero } = familyContent;
    return (
        <section
            className="relative flex flex-col justify-center items-center w-full min-h-[200px] md:min-h-[350px] px-4 overflow-hidden"
            style={{
                backgroundColor: '#F1F5F6',
                backgroundImage: `url("${hero.bgImage}")`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}
        >
            <div className="absolute inset-0 bg-[#404040] opacity-[0.45]"></div>
            <div className="relative z-10 text-center max-w-md mx-auto">
                <h2
                    className="m-0 text-[35px] md:text-[65px]"
                    style={{ 
                        fontFamily: '"Fira Sans", sans-serif', 
                        color: '#262897', 
                        fontWeight: '700',
                        textShadow: '0 0 0.8px #262897, 0 0 0.8px #262897'
                    }}
                >
                    {hero.title}
                </h2>
            </div>
        </section>
    );
}
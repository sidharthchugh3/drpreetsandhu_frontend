import React, { useState, useEffect } from 'react';
import { sliderData } from '../../data/blogData';

export default function BlogSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliderData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderData.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

    return (
        <section className="relative w-full h-[450px] md:h-[600px] overflow-hidden bg-black">
            {sliderData.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[5000ms]"
                        style={{ 
                            backgroundImage: `url(${slide.image})`,
                            transform: index === current ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    
                    <div className="relative h-full flex items-center justify-center text-center px-6">
                        <div className="max-w-5xl">
                            <h3 className="mb-6 leading-tight drop-shadow-xl">
                                <a href={slide.link} className="text-white !text-white text-3xl md:text-5xl lg:text-6xl font-medium block cursor-pointer">
                                    {slide.title}
                                </a>
                            </h3>
                            
                            <div className="text-white !text-white text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-normal opacity-90 drop-shadow-md">
                                <p>{slide.excerpt}</p>
                            </div>

                            <div className="flex justify-center">
                                <a 
                                    href={slide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border border-white/50 bg-white/10 backdrop-blur-md text-white !text-white px-12 py-4 rounded-md font-normal hover:bg-white hover:!text-black transition-all duration-300 uppercase text-sm tracking-[2px] cursor-pointer"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-white transition-all opacity-50 hover:opacity-100 cursor-pointer">
                <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-white transition-all opacity-50 hover:opacity-100 cursor-pointer">
                <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
                {sliderData.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${i === current ? 'w-16 bg-white' : 'w-8 bg-white/30'}`} />
                ))}
            </div>
        </section>
    );
}
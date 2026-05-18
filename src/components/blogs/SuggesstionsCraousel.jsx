import React, { useState } from 'react';
import { suggestionData } from '../../data/blogData';

export default function SuggestionsCarousel() {
    const [sliderIndex, setSliderIndex] = useState(0);

    const nextSuggestion = () => {
        if (sliderIndex < suggestionData.length - 3) {
            setSliderIndex((prev) => prev + 1);
        }
    };

    const prevSuggestion = () => {
        if (sliderIndex > 0) {
            setSliderIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16 border-t border-gray-100 mt-12">
            <div className="text-left mb-8 border-b border-gray-100 pb-3">
                <h2 className="text-2xl font-bold text-[#150d43] tracking-wide relative inline-block">
                    You May Also Like
                    <span className="absolute bottom-[-13px] left-0 w-16 h-[2px] bg-[#262897]"></span>
                </h2>
            </div>
            
            <div className="relative overflow-hidden">
                <div 
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${sliderIndex * (100 / 3)}%)` }}
                >
                    {suggestionData.map((post, idx) => (
                        <div key={idx} className="min-w-[calc(33.333%-16px)] w-[calc(33.333%-16px)] flex-shrink-0 flex flex-col bg-white">
                            <div className="relative aspect-[420/200] overflow-hidden mb-4">
                                <span className="absolute top-3 left-3 bg-[#262897] text-white text-[10px] font-bold px-2.5 py-1 uppercase z-10 tracking-wider">
                                    BLOGS
                                </span>
                                <a href={post.link} className="block w-full h-full">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                    />
                                </a>
                            </div>
                            <h3 className="text-[17px] font-bold text-[#150d43] hover:text-[#262897] transition-colors leading-snug mb-3 line-clamp-2">
                                <a href={post.link}>{post.title}</a>
                            </h3>
                            <div className="flex items-center gap-4 text-[12px] text-gray-400 font-normal">
                                <div>{post.date}</div>
                                <div>•</div>
                                <div>{post.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
                <button 
                    onClick={prevSuggestion}
                    disabled={sliderIndex === 0}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[#262897] text-gray-500 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-500 transition-colors cursor-pointer"
                >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    onClick={nextSuggestion}
                    disabled={sliderIndex >= suggestionData.length - 3}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[#262897] text-gray-500 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-500 transition-colors cursor-pointer"
                >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
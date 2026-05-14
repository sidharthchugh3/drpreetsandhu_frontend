import { useState } from 'react';

const tabs = [
    {
        id: 'educational',
        number: '01',
        icon: 'fa-solid fa-graduation-cap',
        title: 'Educational Background',
        image: '/assets/images/about-1.jpg',
        imageAlt: 'Dr. Preet Sandhu – Education',
        paragraphs: [
            'I started out knee-deep in physics, but somewhere between formulas, I found myself getting hooked on business and big ideas.',
            'So, I swapped my lab coat for an MBA and, just for fun, wrapped it up with a doctorate from a Swiss university.',
            'Those twists shaped how I see the world — and gave me the itch to solve real problems, not just equations.',
        ],
    },
    {
        id: 'endeavors',
        number: '02',
        icon: 'fa-solid fa-rocket',
        title: 'Current Endeavors',
        image: '/assets/images/about-2.jpg',
        imageAlt: 'Dr. Preet Sandhu – Award',
        paragraphs: [
            'AVPL International is where I geek out about tech that truly helps people — think drones and fresh ideas!',
            "As a versatile soul, I'm not just a drone entrepreneur but also deeply connected to the spiritual field, creating soulful music that heals and inspires.",
            'At Startup Stairs, I work shoulder-to-shoulder with young entrepreneurs, cheering them on and turning "maybe" into "heck yes!"',
        ],
    },
];

export default function About() {
    const [active, setActive] = useState('educational');
    const tab = tabs.find((t) => t.id === active);

    return (
        <section id="about" className="section-py bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{
                            background: 'rgba(38,40,151,0.08)',
                            color: '#262897',
                        }}
                    >
                        About Me
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#150d43]"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                        The Story Behind The Journey
                    </h2>
                </div>

                {/* Tab buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            id={`about-tab-${t.id}`}
                            onClick={() => setActive(t.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                                active === t.id
                                    ? 'bg-[#262897] text-white shadow-lg'
                                    : 'bg-gray-100 text-[#150d43] hover:bg-gray-200'
                            }`}
                        >
                            <span className="text-xs font-bold opacity-60">
                                {t.number}
                            </span>
                            <i className={t.icon} />
                            {t.title}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div
                    key={tab.id}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up"
                >
                    {/* Image side */}
                    <div
                        className={`${active === 'educational' ? 'order-last lg:order-last' : 'order-last lg:order-first'}`}
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 rounded-2xl opacity-10"
                                style={{
                                    background:
                                        'linear-gradient(135deg, #262897, #6366f1)',
                                    transform: 'rotate(-2deg) scale(1.02)',
                                }}
                            />
                            <img
                                src={tab.image}
                                alt={tab.imageAlt}
                                className="relative w-full rounded-2xl object-cover shadow-xl"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>
                    </div>

                    {/* Text side */}
                    <div
                        className={`${active === 'educational' ? 'order-first lg:order-first' : 'order-first lg:order-last'}`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: 'rgba(38,40,151,0.1)' }}
                            >
                                <i className={`${tab.icon} text-[#262897]`} />
                            </div>
                            <span
                                className="text-4xl font-bold text-[#262897]/20"
                                style={{ fontFamily: 'Jost, sans-serif' }}
                            >
                                {tab.number}
                            </span>
                        </div>
                        <h3
                            className="text-2xl font-bold text-[#150d43] mb-6"
                            style={{ fontFamily: 'Jost, sans-serif' }}
                        >
                            {tab.title}
                        </h3>
                        <div className="space-y-4">
                            {tab.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-[#6a6874] leading-relaxed text-justify"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

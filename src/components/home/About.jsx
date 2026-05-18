import { Monitor, Contact2 } from 'lucide-react';

export default function About() {
    const sections = [
        {
            number: '01',
            icon: Monitor, 
            title: 'Educational Background',
            description: 'I started out knee-deep in physics, but somewhere between formulas, I found myself getting hooked on business and big ideas. So, I swapped my lab coat for an MBA and, just for fun, wrapped it up with a doctorate from a Swiss university. Those twists shaped how I see the world—and gave me the itch to solve real problems, not just equations.',
            image: 'assets/images/about-1.jpg',
            reverse: false
        },
        {
            number: '02',
            icon: Contact2, 
            title: 'Current Endeavors',
            description: 'AVPL International is where I geek out about tech that truly helps people—think drones and fresh ideas! As a versatile soul, I’m not just a drone entrepreneur but also deeply connected to the spiritual field, creating soulful music that heals and inspires. At Startup Stairs, I work shoulder-to-shoulder with young entrepreneurs, cheering them on, swapping stories, and turning “maybe” into “heck yes!” Balancing innovation with inner harmony, I bring both technology and spirituality together in a way that uplifts lives.',
            image: 'assets/images/gallery/Women-Award-1-1536x1390.jpg',
            reverse: true
        }
    ];

    return (
        <section id="about" className="w-full bg-white overflow-hidden">
            <div className="flex flex-col">
                {sections.map((item, index) => (
                    <div 
                        key={index} 
                        className="w-full py-24 lg:py-16 bg-white border-b border-gray-50"
                    >
                        {/* Full Width Row padding - Ensuring large screens stay wide */}
                        <div className="w-full px-6 lg:px-20 xl:px-32 2xl:px-48">
                            <div 
                                className={`flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32 
                                ${item.reverse ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* CONTENT COLUMN - Locked at 55% to prevent congestion */}
                                <div className="w-full lg:w-[55%] flex flex-col items-start">
                                    
                                    {/* HEADER ROW: Icon and Number */}
                                    <div className="w-full relative flex items-center justify-between mb-12">
                                        {/* ICON */}
                                        <div className="w-[76px] h-[76px] rounded-2xl bg-[#f1f5f6] flex items-center justify-center shadow-sm">
                                            <item.icon 
                                                size={36} 
                                                strokeWidth={1.2} 
                                                className="text-[#262897]" 
                                            />
                                        </div>

                                        {/* NUMBER: Pinned to the right of the content box */}
                                        <div 
                                            className="select-none pointer-events-none"
                                            style={{ 
                                                fontFamily: '"Jost", sans-serif',
                                                fontSize: '120px',
                                                fontWeight: '700',
                                                lineHeight: '0.8',
                                                WebkitTextStroke: '1px rgba(38, 40, 151, 0.12)',
                                                color: 'transparent'
                                            }}
                                        >
                                            {item.number}
                                        </div>
                                    </div>

                                    {/* TEXT AREA */}
                                    <div className="flex flex-col items-start w-full">
                                        <h3 
                                            className="text-2xl lg:text-[32px] font-bold text-[#150d43] mb-8 tracking-tight"
                                            style={{ fontFamily: '"Jost", sans-serif' }}
                                        >
                                            {item.title}
                                        </h3>
                                        
                                        <p 
                                            className="text-[#6a6874] text-[16px] lg:text-[19px] leading-[2.1] italic font-normal w-full max-w-[700px]"
                                            style={{ fontFamily: '"Jost", sans-serif' }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* IMAGE COLUMN - Locked at 45% with specific inset */}
                                <div 
                                    className={`w-full lg:w-[45%] flex justify-center 
                                    ${!item.reverse ? 'lg:justify-end' : 'lg:justify-start'}`}
                                >
                                    <div className="relative w-full max-w-[500px]">
                                        {/* Deep shadow for premium look */}
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-auto rounded-[24px] shadow-[0_35px_80px_rgba(0,0,0,0.14)] transition-transform duration-700 hover:scale-[1.02]"
                                            style={{ aspectRatio: '420/380', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
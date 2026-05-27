import React from 'react';

export default function Hero() {
    const handleScrollToReachOut = (e) => {
        e.preventDefault();
        const reachOutSection = document.getElementById('reach-out-section');
        if (reachOutSection) {
            reachOutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden antialiased bg-[#f1f5f6]"
        >
            <div className="container relative z-10 mx-auto px-6 lg:max-w-[1140px] pt-[90px] md:pt-[110px] lg:pt-[140px] pb-12 lg:pb-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    <div className="w-full lg:w-[53%] order-2 lg:order-1 flex flex-col items-start justify-center">
                        <div className="w-full max-w-[620px]">
                            
                            <div className="flex items-center gap-4 mb-4">
                                <h3 
                                    className="text-[14px] lg:text-[15px] font-bold tracking-wide"
                                    style={{ 
                                        fontFamily: '"Fira Sans", sans-serif', 
                                        color: '#54595F',
                                        textTransform: 'capitalize' 
                                    }}
                                >
                                    Founder And Promoter Of Avpl International And Startup Stairs
                                </h3>
                                <div className="h-[2px] w-12 bg-[#343a40] opacity-60 shrink-0 hidden sm:block"></div>
                            </div>

                            <h1 
                                className="m-0 text-[38px] md:text-[52px] lg:text-[60px] tracking-tight mb-6"
                                style={{ 
                                    fontFamily: '"Fira Sans", sans-serif', 
                                    color: '#262897', 
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                }}
                            >
                                Dr. Preet Sandhu
                            </h1>

                            <div 
                                className="mb-10 text-justify space-y-4"
                                style={{ 
                                    color: '#54595F', 
                                    fontFamily: '"Fira Sans", sans-serif', 
                                    fontSize: '16px', 
                                    lineHeight: '1.6', 
                                    fontWeight: '400', 
                                    fontStyle: 'italic'
                                }}
                            >
                                <p>
                                    "Hey there, I’m Dr. Preet Sandhu! Welcome to My Digital Living Room. Pull up a virtual chair and let’s get real for a moment. If you wandered onto this website in search of innovation, impact, or maybe just a friendly (if slightly geeky) face, you’re in the right place. I get equally excited about both new gadgets and heartfelt conversations— especially when they both happen at the same time."
                                </p>
                                <p>
                                    "I truly believe that innovation isn’t about trendy headlines or overhyped launches— it’s about real people. If a new idea doesn’t make someone’s life better, what’s the point? My mission is simple: bridging the gap between creative ideas and the people who need them most with a little humor (and lots of coffee) along the way."
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-6">
                                <a 
                                    href="#milestones" 
                                    className="group inline-flex items-center justify-center border-2 px-7 py-2.5 rounded-[4px] font-bold text-[15px] transition-all duration-300 hover:bg-[#262897]"
                                    style={{ borderColor: '#262897', color: '#262897' }}
                                >
                                    <span className="transition-colors duration-300 group-hover:text-white">Know More</span>
                                </a>

                                <a 
                                    href="#reach-out-section" 
                                    onClick={handleScrollToReachOut} 
                                    className="font-bold text-[15px] transition-all duration-300 hover:opacity-75 flex items-center gap-2 cursor-pointer"
                                    style={{ color: '#54595F' }}
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        className="w-[18px] h-[18px]" 
                                        viewBox="0 0 512 512" 
                                        fill="#54595F"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38.3 405.7 10.5 425.6 9.4 426.4c-4.4 3.1-6.2 8.5-4.4 13.5s6.6 8.5 11.9 8.1c64.1-4.7 117.6-30.1 144.1-44.5C186.2 411.2 220.2 416 256 416c141.4 0 256-93.1 256-208S397.4 32 256 32zm-80 224c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                                    </svg>
                                    Let's Connect
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="w-full lg:w-[47%] order-1 lg:order-2 flex justify-center lg:justify-end relative pt-0">
                        <div className="leading-[0] relative group">
                            <img 
                                src="assets/images/gallery/bg-shape.png" 
                                alt=""
                                aria-hidden="true"
                                className="absolute -z-10 w-[120%] h-[110%] max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-contain opacity-80 mix-blend-multiply"
                            />
                            <img
                                src="assets/images/hero.png"
                                alt="Dr. Preet Sandhu"
                                className="w-full h-auto max-w-[470px] block relative z-10"
                                style={{
                                    imageRendering: '-webkit-optimize-contrast',
                                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.04))'
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
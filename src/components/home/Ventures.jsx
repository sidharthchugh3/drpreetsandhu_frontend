import React from 'react';

const venturesData = [
    { 
        name: 'Startup Stairs', 
        logo: '/assets/images/logos/farmers-city.png', 
        url: '#' 
    },
    { 
        name: 'Drone Planet', 
        logo: '/assets/images/logos/avpl.png', 
        url: '#' 
    },
    { 
        name: 'SPH Aviation', 
        logo: '/assets/images/logos/startup-stairs.png', 
        url: '#' 
    },
    { 
        name: 'Farmer\'s city', 
        logo: '/assets/images/logos/drone-planet.png', 
        url: '#' 
    },
    { 
        name: 'AVPL International', 
        logo: '/assets/images/logos/sph-web.png', 
        url: 'https://avplinternational.com' 
    },
];

export default function Ventures() {
    const brandBlue = '#262897';

    return (
        <section id="ventures" className="py-24 bg-white overflow-hidden">
            <div className="w-full">
                
                <div className="text-center mb-20 px-6">
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <div className="h-[1px] w-16 bg-gray-300"></div>
                        <span className="text-[14px] font-bold text-gray-500 uppercase tracking-[3px]" style={{ fontFamily: 'Jost, sans-serif' }}>
                            Core Areas
                        </span>
                        <div className="h-[1px] w-16 bg-gray-300"></div>
                    </div>
                    
                    <h2 className="text-4xl lg:text-[50px] font-[1000] tracking-tight" 
                        style={{ color: brandBlue, fontFamily: 'Jost, sans-serif' }}>
                        Interest & Investments
                    </h2>
                </div>

                <div className="relative flex w-full">
                    <div 
                        className="flex w-max animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused]"
                    >
                        <style>{`
                            @keyframes scroll {
                                from { transform: translateX(0); }
                                to { transform: translateX(-33.33%); }
                            }
                        `}</style>

                        {[...venturesData, ...venturesData, ...venturesData].map((v, i) => (
                            <div key={i} className="flex-none px-5">
                                <a 
                                    href={v.url}
                                    target={v.url !== '#' ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] bg-white rounded-[30px] border border-gray-100 flex items-center justify-center p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group"
                                >
                                    <img 
                                        src={v.logo} 
                                        alt={v.name} 
                                        className="max-h-full max-w-full object-contain transition-all duration-700 opacity-100 scale-90 group-hover:scale-100" 
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
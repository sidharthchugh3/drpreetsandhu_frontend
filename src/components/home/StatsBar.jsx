import { Medal, Send, Headset, Trophy } from 'lucide-react';

export default function StatsBar() {
    const stats = [
        { label: 'Experience', value: '13+ Years', icon: Medal },
        { label: 'Candidates Trained', value: '1 Lac+', icon: Send },
        { label: 'Mentored', value: '50+ Ideas', icon: Headset },
        { label: 'Funded', value: '10+ Startup', icon: Trophy }
    ];

    return (
        <section
            id="stats-bar"
            className="relative z-20 -mt-20 bg-white border-b border-gray-100 overflow-visible transition-all duration-500 ease-in-out"
            style={{ 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.08)' 
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <div className="max-w-[1140px] mx-auto px-4 py-8 lg:py-15">
                <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`flex-1 flex items-center justify-center min-w-[250px] lg:min-w-0 py-6 lg:py-0 group
                                ${i !== stats.length - 1 ? 'lg:border-r border-gray-200' : ''}
                            `}
                        >
                            <div className="flex items-center gap-5">
                                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <s.icon 
                                        size={36} 
                                        strokeWidth={1.2} 
                                        color="#262897" 
                                        style={{ opacity: 0.9 }}
                                    />
                                </div>
                                
                                {/* Text Alignment */}
                                <div className="flex flex-col items-start justify-center">
                                    <p
                                        className="text-[#1a1a1a] text-xl lg:text-[22px] font-semibold leading-none tracking-tight"
                                        style={{ fontFamily: '"Jost", sans-serif' }}
                                    >
                                        {s.value}
                                    </p>
                                    <p 
                                        className="text-[#6a6874] text-sm lg:text-[15px] font-medium leading-none mt-2"
                                        style={{ fontFamily: '"Jost", sans-serif' }}
                                    >
                                        {s.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import { stats } from '../../data/stats';

export default function StatsBar() {
    return (
        <section
            id="stats-bar"
            className="relative z-10 -mt-1 bg-[#262897] py-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            id={`stat-${i}`}
                            className="flex items-center gap-4 group"
                        >
                            {/* Icon bubble */}
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                                <i
                                    className={`fa-solid ${s.icon} text-white text-lg`}
                                />
                            </div>
                            <div>
                                <p
                                    className="text-white text-2xl font-bold leading-none"
                                    style={{ fontFamily: 'Jost, sans-serif' }}
                                >
                                    {s.value}
                                </p>
                                <p className="text-white/70 text-xs mt-0.5">
                                    {s.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

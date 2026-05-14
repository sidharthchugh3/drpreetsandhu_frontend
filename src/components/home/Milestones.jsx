const milestones = [
    {
        id: 'avpl',
        number: '01',
        icon: 'fa-solid fa-drone',
        iconFallback: 'fa-solid fa-plane-departure',
        title: 'Building AVPL International',
        subtitle: '(a.k.a. Impact, Unleashed)',
        description:
            'Founded AVPL International — a drone technology company transforming agriculture, surveillance, and delivery across India. From a bold idea to a nationally recognised enterprise.',
        color: '#262897',
    },
    {
        id: 'startup-stairs',
        number: '02',
        icon: 'fa-solid fa-stairs',
        iconFallback: 'fa-solid fa-stairs',
        title: 'Launching Startup Stairs',
        subtitle: '(Where Dreams Take Off)',
        description:
            'A platform for early-stage entrepreneurs to get mentoring, funding connections, and community. 10+ startups funded. 50+ ideas mentored to life.',
        color: '#4a4cc7',
    },
    {
        id: 'awards',
        number: '03',
        icon: 'fa-solid fa-trophy',
        iconFallback: 'fa-solid fa-trophy',
        title: 'Women Leadership Awards',
        subtitle: '(Recognised, Celebrated)',
        description:
            'Recipient of multiple women entrepreneurship and leadership awards, recognising impact in technology, education, and community development.',
        color: '#6366f1',
    },
    {
        id: 'music',
        number: '04',
        icon: 'fa-solid fa-music',
        iconFallback: 'fa-solid fa-music',
        title: 'Spiritual Music Creator',
        subtitle: '(Healing through Sound)',
        description:
            'Beyond technology, creating soulful spiritual music that bridges innovation and inner harmony — uplifting minds and inspiring hearts.',
        color: '#7c3aed',
    },
];

export default function Milestones() {
    return (
        <section
            id="milestones"
            className="section-py"
            style={{ background: '#f8f9ff' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{
                            background: 'rgba(38,40,151,0.08)',
                            color: '#262897',
                        }}
                    >
                        Achievements
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#150d43] mb-4"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                        Feathers in My Cap: Milestones &amp; Meaningful Impact
                    </h2>
                    <p className="text-[#6a6874] max-w-2xl mx-auto leading-relaxed">
                        If I had a trophy shelf (and it was big enough), here's
                        what you'd find — every milestone a story, every
                        achievement proof that with a bit of courage, you can
                        spark real change.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {milestones.map((m) => (
                        <article
                            key={m.id}
                            id={`milestone-${m.id}`}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Accent top bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                style={{
                                    background: `linear-gradient(90deg, ${m.color}, ${m.color}88)`,
                                }}
                            />

                            {/* Number */}
                            <span
                                className="absolute top-4 right-4 text-5xl font-bold opacity-[0.06]"
                                style={{
                                    fontFamily: 'Jost, sans-serif',
                                    color: m.color,
                                }}
                            >
                                {m.number}
                            </span>

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                                style={{ background: `${m.color}15` }}
                            >
                                <i
                                    className={`${m.icon || m.iconFallback} text-xl`}
                                    style={{ color: m.color }}
                                />
                            </div>

                            <h3
                                className="text-base font-bold text-[#150d43] mb-1"
                                style={{ fontFamily: 'Jost, sans-serif' }}
                            >
                                {m.title}
                            </h3>
                            <p className="text-xs text-[#262897] font-medium mb-3 italic">
                                {m.subtitle}
                            </p>
                            <p className="text-sm text-[#6a6874] leading-relaxed">
                                {m.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

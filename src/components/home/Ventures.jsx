import { ventures } from '../../data/ventures';

export default function Ventures() {
    return (
        <section
            id="ventures"
            className="section-py bg-white border-t border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{
                            background: 'rgba(38,40,151,0.08)',
                            color: '#262897',
                        }}
                    >
                        Ventures &amp; Partnerships
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-brand-dark"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                        Organisations I've Built &amp; Backed
                    </h2>
                </div>

                {/* Logo grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {ventures.map((v) => (
                        <a
                            key={v.name}
                            href={v.url}
                            target={v.url !== '#' ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            id={`venture-${v.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            title={v.description}
                        >
                            <div className="h-16 flex items-center justify-center">
                                <img
                                    src={v.logo}
                                    alt={v.name}
                                    className="max-h-full max-w-30 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <p className="text-xs font-semibold text-brand-dark text-center group-hover:text-brand-primary transition-colors">
                                {v.name}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background:
                    'linear-gradient(135deg, #f1f5f6 0%, #e8edf5 50%, #f1f5f6 100%)',
            }}
        >
            {/* Decorative background circle */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, #262897 0%, transparent 70%)',
                    transform: 'translate(30%, -30%)',
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, #150d43 0%, transparent 70%)',
                    transform: 'translate(-30%, 30%)',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Text */}
                    <div className="animate-fade-up">
                        {/* Eyebrow */}
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
                            style={{
                                background: 'rgba(38,40,151,0.1)',
                                color: '#262897',
                            }}
                        >
                            Founder &amp; Promoter of AVPL International and
                            Startup Stairs
                        </span>

                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2"
                            style={{
                                fontFamily: 'Jost, sans-serif',
                                color: '#150d43',
                            }}
                        >
                            Dr. Preet
                        </h1>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            style={{
                                fontFamily: 'Jost, sans-serif',
                                background:
                                    'linear-gradient(90deg, #262897 0%, #6366f1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Sandhu
                        </h1>

                        <p className="text-lg text-[#6a6874] leading-relaxed mb-8 max-w-lg">
                            Welcome to My Digital Living Room! I'm a drone
                            entrepreneur, spiritual music creator, startup
                            mentor, and doctorate holder — weaving technology
                            and humanity together, one idea at a time.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/#about"
                                id="hero-know-more"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById('about')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                                className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                style={{
                                    background:
                                        'linear-gradient(135deg, #262897 0%, #4a4cc7 100%)',
                                }}
                            >
                                Know More
                            </a>
                            <Link
                                to="/connect"
                                id="hero-lets-connect"
                                className="px-7 py-3 rounded-full font-semibold text-sm border-2 border-[#262897] text-[#262897] hover:bg-[#262897] hover:text-white transition-all duration-200 flex items-center gap-2"
                            >
                                <i className="fa-regular fa-comment-dots" />
                                Let's Connect
                            </Link>
                        </div>
                    </div>

                    {/* Right — Hero image */}
                    <div className="flex justify-center lg:justify-end animate-fade-right">
                        <div className="relative">
                            {/* Glow ring */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
                                style={{
                                    background:
                                        'linear-gradient(135deg, #262897 0%, #6366f1 100%)',
                                    transform: 'scale(1.05)',
                                }}
                            />
                            <img
                                src="/assets/images/hero.png"
                                alt="Dr. Preet Sandhu"
                                className="relative w-full max-w-sm lg:max-w-md rounded-3xl object-cover shadow-2xl"
                                style={{
                                    transform: 'scale(1.02)',
                                    transition: 'transform 0.4s ease',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform =
                                        'scale(1.06)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform =
                                        'scale(1.02)')
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6a6874] text-xs animate-bounce">
                <span className="tracking-widest uppercase">Scroll</span>
                <i className="fa-solid fa-chevron-down" />
            </div>
        </section>
    );
}

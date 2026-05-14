import ContactForm from '../components/home/ContactForm';
import { social } from '../data/social';

export default function Connect() {
    return (
        <main id="main-connect" className="pt-24">
            {/* Hero banner */}
            <section
                className="py-20 text-white text-center relative overflow-hidden"
                style={{
                    background:
                        'linear-gradient(135deg, #150d43 0%, #262897 50%, #4a4cc7 100%)',
                }}
            >
                <div className="relative max-w-3xl mx-auto px-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/10">
                        Let's Connect
                    </span>
                    <h1
                        className="text-4xl sm:text-5xl font-bold mb-4"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                        Start a Conversation
                    </h1>
                    <p className="text-white/70 text-lg">
                        Whether you have an idea, a collaboration in mind, or
                        just want to say hello — I'm here for it.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section className="section-py">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Left — Info panel */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Profile card */}
                            <div className="flex items-center gap-4">
                                <img
                                    src="/assets/images/profile.png"
                                    alt="Dr. Preet Sandhu"
                                    className="w-16 h-16 rounded-2xl object-cover shadow"
                                />
                                <div>
                                    <p
                                        className="font-bold text-[#150d43]"
                                        style={{
                                            fontFamily: 'Jost, sans-serif',
                                        }}
                                    >
                                        Dr. Preet Sandhu
                                    </p>
                                    <p className="text-sm text-[#6a6874]">
                                        Entrepreneur · Mentor · Innovator
                                    </p>
                                </div>
                            </div>

                            {/* Contact cards */}
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: 'fa-solid fa-envelope',
                                        label: 'Email',
                                        value: 'contact@drpreetsandhu.com',
                                        href: 'mailto:contact@drpreetsandhu.com',
                                    },
                                    {
                                        icon: 'fa-brands fa-instagram',
                                        label: 'Instagram',
                                        value: '@drpreetsandhuu',
                                        href: 'https://www.instagram.com/drpreetsandhuu/',
                                    },
                                    {
                                        icon: 'fa-brands fa-linkedin-in',
                                        label: 'LinkedIn',
                                        value: 'linkedin.com/in/preetsandhuu',
                                        href: 'https://www.linkedin.com/in/preetsandhuu/',
                                    },
                                ].map((c) => (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        target={
                                            c.href.startsWith('http')
                                                ? '_blank'
                                                : '_self'
                                        }
                                        rel="noopener noreferrer"
                                        id={`connect-info-${c.label.toLowerCase()}`}
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#262897]/30 hover:shadow-md transition-all duration-200 group"
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{
                                                background:
                                                    'rgba(38,40,151,0.08)',
                                            }}
                                        >
                                            <i
                                                className={`${c.icon} text-[#262897]`}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#6a6874]">
                                                {c.label}
                                            </p>
                                            <p className="text-sm font-medium text-[#150d43] group-hover:text-[#262897] transition-colors">
                                                {c.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social links */}
                            <div>
                                <p className="text-sm font-semibold text-[#150d43] mb-3">
                                    Follow Along
                                </p>
                                <div className="flex gap-3">
                                    {social.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            id={`connect-social-${s.label.toLowerCase()}`}
                                            aria-label={s.label}
                                            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#6a6874] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                                            style={{
                                                ':hover': {
                                                    background: s.color,
                                                },
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background =
                                                    s.color;
                                                e.currentTarget.style.color =
                                                    'white';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background =
                                                    '';
                                                e.currentTarget.style.color =
                                                    '';
                                            }}
                                        >
                                            <i
                                                className={`${s.icon} text-sm`}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8">
                            <h2
                                className="text-xl font-bold text-[#150d43] mb-1"
                                style={{ fontFamily: 'Jost, sans-serif' }}
                            >
                                Send a Message
                            </h2>
                            <p className="text-sm text-[#6a6874] mb-6">
                                I read every message and reply within 48 hours.
                            </p>
                            <ContactForm compact />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

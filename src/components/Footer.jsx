import { Link } from 'react-router-dom';
import { social } from '../data/social';
import { navigation } from '../data/navigation';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="site-footer" className="bg-brand-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand column */}
                    <div>
                        <Link to="/">
                            <img
                                src="/assets/images/logo.png"
                                alt="Dr. Preet Sandhu"
                                className="h-12 w-auto object-contain brightness-0 invert mb-4"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Entrepreneur, mentor, and innovator. Building
                            technology that uplifts lives and turning "maybe"
                            into "heck yes!"
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3 mt-6">
                            {social.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id={`footer-social-${s.label.toLowerCase()}`}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-primary hover:text-white transition-all duration-200"
                                >
                                    <i className={`${s.icon} text-sm`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-white font-semibold text-base mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    {item.type === 'route' ? (
                                        <Link
                                            to={item.href}
                                            id={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-white/60 text-sm hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            id={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-white/60 text-sm hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/connect"
                                    id="footer-link-connect"
                                    className="text-white/60 text-sm hover:text-white transition-colors"
                                >
                                    Let's Connect
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-base mb-4">
                            Get In Touch
                        </h3>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-envelope mt-0.5 text-brand-primary" />
                                <a
                                    href="mailto:contact@drpreetsandhu.com"
                                    className="hover:text-white transition-colors"
                                >
                                    contact@drpreetsandhu.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-brands fa-instagram mt-0.5 text-brand-primary" />
                                <a
                                    href="https://www.instagram.com/drpreetsandhuu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    @drpreetsandhuu
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-brands fa-linkedin-in mt-0.5 text-brand-primary" />
                                <a
                                    href="https://www.linkedin.com/in/preetsandhuu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    linkedin.com/in/preetsandhuu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
                    <p>© {year} Dr. Preet Sandhu. All rights reserved.</p>
                    <p>Built with ❤️ — AVPL International</p>
                </div>
            </div>
        </footer>
    );
}

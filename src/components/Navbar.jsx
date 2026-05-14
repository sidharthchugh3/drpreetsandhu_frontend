import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigation, ctaLink } from '../data/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    /* ── Scroll shadow ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── Close menu on outside click ── */
    useEffect(() => {
        const handler = (e) => {
            if (
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [menuOpen]);

    /* ── Close menu on route change ── */
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    /* ── Handle nav link click ── */
    const handleNavClick = (e, item) => {
        if (item.type === 'anchor') {
            e.preventDefault();
            setMenuOpen(false);
            const hash = item.href.split('#')[1];
            if (location.pathname === '/') {
                document
                    .getElementById(hash)
                    ?.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    document
                        .getElementById(hash)
                        ?.scrollIntoView({ behavior: 'smooth' });
                }, 350);
            }
        } else {
            setMenuOpen(false);
        }
    };

    const isActive = (item) => {
        if (item.type === 'anchor') return false;
        return location.pathname === item.href;
    };

    return (
        <header
            id="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white shadow-lg py-2'
                    : 'bg-white/95 backdrop-blur-sm py-3'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" id="navbar-logo" className="flex-shrink-0">
                        <img
                            src="/assets/images/logo.png"
                            alt="Dr. Preet Sandhu"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav
                        id="desktop-nav"
                        className="hidden lg:flex items-center gap-6"
                    >
                        {navigation.map((item) =>
                            item.type === 'route' ? (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={`font-medium text-sm transition-colors duration-200 hover:text-brand-primary relative group ${
                                        isActive(item)
                                            ? 'text-brand-primary'
                                            : 'text-brand-dark'
                                    }`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-200 ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                    />
                                </Link>
                            ) : (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className="font-medium text-sm text-[#150d43] transition-colors duration-200 hover:text-[#262897] relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 h-0.5 bg-[#262897] w-0 group-hover:w-full transition-all duration-200" />
                                </a>
                            ),
                        )}
                        <Link
                            to={ctaLink.href}
                            id="nav-lets-connect"
                            className="ml-2 px-5 py-2 rounded-full border-2 border-[#262897] text-[#262897] font-semibold text-sm hover:bg-[#262897] hover:text-white transition-all duration-200"
                        >
                            {ctaLink.label}
                        </Link>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="lg:hidden flex flex-col gap-1.5 p-2 rounded"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-[#150d43] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-[#150d43] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-[#150d43] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <nav className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
                    {navigation.map((item) =>
                        item.type === 'route' ? (
                            <Link
                                key={item.href}
                                to={item.href}
                                id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`py-2.5 px-3 rounded-lg font-medium text-sm transition-colors ${
                                    isActive(item)
                                        ? 'bg-[#262897]/10 text-[#262897]'
                                        : 'text-[#150d43] hover:bg-gray-50'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a
                                key={item.href}
                                href={item.href}
                                id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="py-2.5 px-3 rounded-lg font-medium text-sm text-[#150d43] hover:bg-gray-50"
                            >
                                {item.label}
                            </a>
                        ),
                    )}
                    <Link
                        to={ctaLink.href}
                        id="mobile-nav-lets-connect"
                        className="mt-2 py-2.5 px-3 rounded-full bg-[#262897] text-white font-semibold text-sm text-center"
                    >
                        {ctaLink.label}
                    </Link>
                </nav>
            </div>
        </header>
    );
}

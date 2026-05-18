import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigation, ctaLink } from '../data/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (e, item) => {
        const isAbout = item.label.toLowerCase() === 'about';
        const targetId = isAbout ? 'milestones' : item.href.split('#')[1];

        if (item.type === 'anchor' || isAbout) {
            e.preventDefault();
            if (location.pathname === '/') {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }, 350);
            }
        }
        setMenuOpen(false);
    };

    return (
        <>
            <header
                id="masthead"
                className={`fixed top-0 left-0 w-full z-[999] bg-white transition-all duration-300 ${
                    scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : 'border-b border-[#f3f3f3]'
                }`}
                style={{ fontFamily: '"Jost", sans-serif' }}
            >
                <div className="w-full max-w-[1140px] mx-auto px-[15px]">
                    <div className="flex items-center justify-between h-[84px]">
                        <div className="flex-shrink-0">
                            <Link to="/" className="block">
                                <img
                                    src="https://drpreetsandhu.com/wp-content/uploads/2025/07/cropped-Preet-Maam-3.png"
                                    alt="Dr Preet Sandhu"
                                    className="h-[64px] w-auto object-contain"
                                />
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <nav className="hidden lg:block">
                                <ul className="flex items-center gap-[36px] m-0 p-0 list-none">
                                    {navigation.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                to={item.href}
                                                onClick={(e) => handleNavClick(e, item)}
                                                style={{
                                                    color: location.pathname === item.href ? '#262897' : '#150d43',
                                                    fontFamily: 'Jost, sans-serif',
                                                }}
                                                className="relative text-[16.5px] font-[600] leading-none transition-colors duration-300 hover:text-[#262897]"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="hidden lg:block ml-[36px]">
                                <Link
                                    to={ctaLink.href}
                                    className="inline-flex items-center justify-center px-[34px] h-[48px] rounded-[5px] text-[17.5px] font-[600] leading-none transition-all duration-300 hover:bg-[#262897] hover:!text-white"
                                    style={{ 
                                        fontFamily: 'Jost, sans-serif',
                                        color: '#262897',
                                        borderColor: '#262897',
                                        borderWidth: '1.5px',
                                        borderStyle: 'solid'
                                    }}
                                >
                                    {ctaLink.label}
                                </Link>
                            </div>

                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden ml-5 text-[#262897]"
                            >
                                <span className="text-2xl font-bold">☰</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[1001] transform transition-transform duration-300 lg:hidden shadow-[-4px_0_20px_rgba(0,0,0,0.08)] ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-end p-5">
                    <button onClick={() => setMenuOpen(false)} className="text-[#262897] text-3xl">×</button>
                </div>

                <div className="flex flex-col px-8 pt-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            onClick={(e) => handleNavClick(e, item)}
                            className="py-4 border-b border-b-[#f3f3f3] text-[17px] font-[600] text-[#150d43]"
                            style={{ fontFamily: 'Jost, sans-serif' }}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        to={ctaLink.href}
                        onClick={() => setMenuOpen(false)}
                        className="mt-8 inline-flex items-center justify-center h-[48px] rounded-[5px] text-[17.5px] font-[600] transition-all duration-300 hover:bg-[#262897] hover:!text-white"
                        style={{ 
                            fontFamily: 'Jost, sans-serif',
                            color: '#262897',
                            borderColor: '#262897',
                            borderWidth: '1.5px',
                            borderStyle: 'solid'
                        }}
                    >
                        {ctaLink.label}
                    </Link>
                </div>
            </div>

            {menuOpen && (
                <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/30 z-[1000] lg:hidden" />
            )}
        </>
    );
}
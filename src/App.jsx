import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyFamily from './pages/MyFamily';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Connect from './pages/Connect';

/* ── Scroll to top on route change ── */
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

/* ── 404 page ── */
function NotFound() {
    return (
        <main
            className="min-h-screen flex items-center justify-center pt-24"
            id="main-404"
        >
            <div className="text-center px-4">
                <p
                    className="text-8xl font-bold text-[#262897]/20"
                    style={{ fontFamily: 'Jost, sans-serif' }}
                >
                    404
                </p>
                <h1 className="text-3xl font-bold text-[#150d43] mt-4 mb-3">
                    Page Not Found
                </h1>
                <p className="text-[#6a6874] mb-6">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <a
                    href="/"
                    className="px-7 py-3 rounded-full font-semibold text-sm text-white inline-block"
                    style={{
                        background:
                            'linear-gradient(135deg, #262897 0%, #4a4cc7 100%)',
                    }}
                >
                    Back to Home
                </a>
            </div>
        </main>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-family" element={<MyFamily />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

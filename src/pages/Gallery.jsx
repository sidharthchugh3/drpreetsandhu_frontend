import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
    return (
        <main id="main-gallery" className="pt-[90px] sm:pt-[110px] pb-12 bg-white">
            <div className="text-center mb-12 max-w-md mx-auto px-4">
                <h1 
                    className="m-0 text-[40px] md:text-[60px]" 
                    style={{ 
                        fontFamily: '"Fira Sans", sans-serif',
                        color: '#262897',
                        fontWeight: '800',
                        lineHeight: '1.4',
                        textTransform: 'capitalize',
                        transition: 'all .3s ease'
                    }}
                >
                    Gallery
                </h1>
            </div>
            <GalleryGrid />
        </main>
    );
}
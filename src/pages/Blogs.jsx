import React from 'react';
import BlogSlider from '../components/blogs/BlogSlider';
import FeaturedGrid from '../components/blogs/FeaturedGrid';
import BlogContent from '../components/blogs/BlogContent';
import SuggestionsCarousel from '../components/blogs/SuggesstionsCraousel';


export default function Blogs() {
    return (
        <main id="main-blogs" className="pt-20 bg-white min-h-screen" style={{ fontFamily: 'Jost, sans-serif' }}>
            <BlogSlider />
            <FeaturedGrid />
            <BlogContent />
            <SuggestionsCarousel />
        </main>
    );
}
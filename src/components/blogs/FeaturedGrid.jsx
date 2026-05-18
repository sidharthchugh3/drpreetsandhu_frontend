import React from 'react';
import { sliderData } from '../../data/blogData';

export default function FeaturedGrid() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {sliderData.slice(0, 3).map((post, idx) => (
                    <article key={idx} className="relative h-[320px] overflow-hidden rounded-sm group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110" style={{ backgroundImage: `url(${post.image})` }} />
                        <div className="absolute inset-0 bg-black/45" />
                        <div className="absolute bottom-0 p-6 w-full text-white">
                            <span className="bg-[#262897] text-[11px] px-2.5 py-1 font-bold uppercase mb-4 inline-block tracking-wider">BLOGS</span>
                            <h4 className="text-xl font-bold leading-tight mb-5 hover:text-white/80 cursor-pointer text-white !text-white">{post.title}</h4>
                            <div className="flex items-center gap-5 text-[13px] font-normal opacity-100">
                                <div className="flex items-center gap-2"><i className="fa-regular fa-calendar text-sm" /> {post.date}</div>
                                <div className="flex items-center gap-2"><i className="fa-regular fa-user text-sm" /> {post.author}</div>
                                <div className="flex items-center gap-2"><i className="fa-regular fa-comment text-sm" /> {post.comments}</div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
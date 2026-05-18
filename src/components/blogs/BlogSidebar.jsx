import React from 'react';
import { sliderData } from '../../data/blogData';

export default function BlogSidebar() {
    return (
        <aside className="lg:w-1/3 w-full lg:sticky lg:top-24 flex flex-col gap-12 self-start">
            <div>
                <h4 className="text-base font-bold text-[#150d43] uppercase tracking-widest border-b pb-3 mb-5">Search</h4>
                <div className="flex h-12">
                    <input type="text" className="w-full border p-3 bg-gray-50 outline-none text-base" />
                    <button className="bg-[#2d2d2d] text-white px-6 text-sm font-bold cursor-pointer">Search</button>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-gray-200" />
                    <h4 className="text-[12px] font-black text-[#150d43] uppercase tracking-[4px]">Recent Posts</h4>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>
                <ul className="flex flex-col gap-5">
                    {sliderData.slice(0, 5).map((post, idx) => (
                        <li key={idx} className="text-[14px] text-gray-700 hover:text-[#262897] cursor-pointer font-medium leading-snug border-b border-gray-50 pb-3">{post.title}</li>
                    ))}
                </ul>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-gray-200" />
                    <h4 className="text-[12px] font-black text-[#150d43] uppercase tracking-[4px]">Recent Comments</h4>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="text-sm leading-relaxed text-[#6a6874] antialiased">
                    <span className="font-semibold text-[#150d43] block mb-1">
                        internationalavpl11@gmail.com
                    </span>
                    <span className="text-gray-400">on </span>
                    <a 
                        href="https://drpreetsandhu.com/2025/06/21/success-doesnt-happen-overnight-its-built-slowly-day-by-day-with-discipline-focus-and-consistency/"
                        className="hover:text-[#262897] transition-colors font-medium text-[#4a4a4a]"
                    >
                        Success doesn’t happen overnight. It’s built slowly day by day with discipline, focus, and consistency.
                    </a>
                </div>
            </div>
        </aside>
    );
}
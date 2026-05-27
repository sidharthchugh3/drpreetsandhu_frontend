import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogSidebar from './BlogSidebar';
import { mainFeedData } from '../../data/blogData';

export default function BlogContent() {
    const { pageNumber } = useParams();
    const navigate = useNavigate();
    const currentPage = parseInt(pageNumber) || 1;

    const blogsPerPage = 10;
    const startIndex = (currentPage - 1) * blogsPerPage;
    const paginatedBlogs = mainFeedData.slice(startIndex, startIndex + blogsPerPage);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-12 relative items-start">
            <div className="lg:w-2/3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {paginatedBlogs.map((item, idx) => (
                        <article key={idx} className="flex flex-col">
                            <div className="relative h-60 mb-5 overflow-hidden">
                                <a href={item.link} className="block w-full h-full">
                                    <img src={item.image} className="w-full h-full object-cover hover:opacity-90 cursor-pointer transition-opacity" alt="" />
                                </a>
                            </div>
                            <span className="text-[#262897] text-sm font-bold uppercase mb-2">BLOGS</span>
                            <h3 className="text-2xl font-bold text-[#150d43] hover:text-[#262897] cursor-pointer transition-colors leading-snug mb-4">
                                <a href={item.link}>{item.title}</a>
                            </h3>
                            <div className="flex items-center gap-5 text-[12px] text-gray-500 mb-5 border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-2"><i className="fa-regular fa-calendar text-sm" /> {item.date}</div>
                                <div className="flex items-center gap-2"><i className="fa-regular fa-user text-sm" /> {item.author}</div>
                                <div className="flex items-center gap-2"><i className="fa-regular fa-comment text-sm" /> Comment</div>
                            </div>
                            <p className="text-base text-gray-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
                        </article>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-16 border-t pt-10">
                    <button 
                        onClick={() => navigate('/blogs/page/1')} 
                        className={`w-12 h-12 flex items-center justify-center border text-lg font-medium ${currentPage === 1 ? 'bg-[#150d43] text-white' : 'hover:bg-gray-100 text-gray-600 cursor-pointer'}`}
                    >
                        1
                    </button>
                    <button 
                        onClick={() => navigate('/blogs/page/2')} 
                        className={`w-12 h-12 flex items-center justify-center border text-lg font-medium ${currentPage === 2 ? 'bg-[#150d43] text-white' : 'hover:bg-gray-100 text-gray-600 cursor-pointer'}`}
                    >
                        2
                    </button>
                    <button 
                        onClick={() => navigate(`/blogs/page/${currentPage === 1 ? 2 : 2}`)} 
                        className="px-6 h-12 border rounded-sm hover:bg-gray-100 text-gray-600 cursor-pointer font-medium text-base"
                    >
                        Next
                    </button>
                </div>
            </div>

            <BlogSidebar />
        </div>
    );
}
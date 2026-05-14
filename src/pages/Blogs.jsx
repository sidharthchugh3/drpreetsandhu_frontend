import { blogs } from '../data/blogs';

export default function Blogs() {
    return (
        <main id="main-blogs" className="pt-24">
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
                        Knowledge Hub
                    </span>
                    <h1
                        className="text-4xl sm:text-5xl font-bold mb-4"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                        Ideas Worth Sharing
                    </h1>
                    <p className="text-white/70 text-lg">
                        Thoughts on entrepreneurship, drone technology,
                        leadership, and life from the trenches.
                    </p>
                </div>
            </section>

            {/* Blog grid */}
            <section className="section-py">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {blogs.map((post) => (
                            <article
                                key={post.slug}
                                id={`blog-${post.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Cover image */}
                                <div className="relative overflow-hidden h-44 bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span
                                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                                        style={{
                                            background: 'rgba(38,40,151,0.85)',
                                        }}
                                    >
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs text-[#6a6874] mb-3">
                                        <span>
                                            <i className="fa-regular fa-calendar mr-1" />
                                            {post.date}
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-clock mr-1" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2
                                        className="text-base font-bold text-[#150d43] mb-2 leading-snug group-hover:text-[#262897] transition-colors"
                                        style={{
                                            fontFamily: 'Jost, sans-serif',
                                        }}
                                    >
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-[#6a6874] leading-relaxed flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <button
                                            id={`blog-read-${post.slug}`}
                                            className="text-sm font-semibold text-[#262897] hover:text-[#150d43] flex items-center gap-1.5 transition-colors"
                                            onClick={() =>
                                                alert('Full blog coming soon!')
                                            }
                                        >
                                            Read Article
                                            <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div
                        className="mt-16 rounded-3xl p-10 text-white text-center"
                        style={{
                            background:
                                'linear-gradient(135deg, #150d43 0%, #262897 100%)',
                        }}
                    >
                        <h3
                            className="text-2xl font-bold mb-3"
                            style={{ fontFamily: 'Jost, sans-serif' }}
                        >
                            Never Miss a Post
                        </h3>
                        <p className="text-white/70 mb-6 max-w-md mx-auto">
                            Subscribe to get new articles on entrepreneurship,
                            drones, and leadership delivered to your inbox.
                        </p>
                        <form
                            id="newsletter-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert('Newsletter subscription coming soon!');
                            }}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        >
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 rounded-xl text-sm text-[#150d43] focus:outline-none focus:ring-2 focus:ring-white/50"
                                id="newsletter-email"
                                required
                            />
                            <button
                                type="submit"
                                id="newsletter-submit"
                                className="px-6 py-3 rounded-xl text-sm font-semibold bg-white text-[#262897] hover:bg-white/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

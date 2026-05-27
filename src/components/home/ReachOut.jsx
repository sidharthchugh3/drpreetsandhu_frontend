import React, { useState } from 'react';

function ReachOut() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="reach-out-section" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 scroll-mt-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-3">
                            <span className="text-[13px] font-bold tracking-[2px]" style={{ fontFamily: 'Jost, sans-serif', color: 'rgb(87,108,131)' }}>REACH OUT</span>
                            <div className="h-[1.5px] w-10" style={{ backgroundColor: 'rgb(87,108,131)' }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Jost, sans-serif', color: 'rgb(38,40,151)' }}>
                            Get In Touch !
                        </h2>
                    </div>

                    <p className="text-base md:text-[17px] leading-relaxed max-w-xl font-normal" style={{ fontFamily: 'Jost, sans-serif', color: 'rgb(87,108,131)' }}>
                        I would love to hear from you! For speaking engagements, collaborations, or media enquiries, you can fill out the contact form. Connect with me and the AVPL International team through our social media channels.
                    </p>

                    <ul className="flex flex-col gap-4 my-2 list-none p-0" style={{ fontFamily: 'Jost, sans-serif' }}>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/drpreetsandhuu/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3.5 font-medium text-base md:text-[17px] transition-colors hover:opacity-80"
                                style={{ color: 'rgb(87,108,131)' }}
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="rgb(38,40,151)" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                                <span>linkedin.com/in/drpreetsandhuu/</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="mailto:preet@avplinternational.com"
                                className="flex items-center gap-3.5 font-medium text-base md:text-[17px] transition-colors hover:opacity-80"
                                style={{ color: 'rgb(87,108,131)' }}
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="rgb(38,40,151)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <span>preet@avplinternational.com</span>
                            </a>
                        </li>
                    </ul>

                    <div className="relative w-full max-w-xl aspect-video rounded-sm overflow-hidden shadow-sm group bg-gray-100">
                        <img 
                            src="public/assets/images/gallery/DSC02082-1536x1024.jpg" 
                            alt="National Conclave On Rural Entrepreneurship" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/15" />
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="absolute inset-0 flex items-center justify-center w-full h-full bg-transparent border-none outline-none"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 transform group-hover:scale-110 cursor-pointer">
                                <svg className="w-5 h-5 ml-1" fill="rgb(38,40,151)" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:pt-4">
                    <div className="w-full bg-white rounded-sm p-8 md:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6" style={{ fontFamily: 'Jost, sans-serif' }}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold uppercase tracking-wider" style={{ color: 'rgb(87,108,131)' }}>Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name" 
                                    className="w-full border-b border-gray-200 py-3 text-base outline-none transition-colors rounded-none"
                                    style={{ color: 'rgb(87,108,131)' }}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold uppercase tracking-wider" style={{ color: 'rgb(87,108,131)' }}>Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email" 
                                    className="w-full border-b border-gray-200 py-3 text-base outline-none transition-colors rounded-none"
                                    style={{ color: 'rgb(87,108,131)' }}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold uppercase tracking-wider" style={{ color: 'rgb(87,108,131)' }}>Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject of interest" 
                                    className="w-full border-b border-gray-200 py-3 text-base outline-none transition-colors rounded-none"
                                    style={{ color: 'rgb(87,108,131)' }}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold uppercase tracking-wider" style={{ color: 'rgb(87,108,131)' }}>Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4" 
                                    placeholder="Write your message here..." 
                                    className="w-full border border-gray-200 rounded-sm p-4 text-base outline-none transition-colors resize-none"
                                    style={{ color: 'rgb(87,108,131)' }}
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors mt-2 cursor-pointer text-sm"
                                style={{ backgroundColor: 'rgb(38,40,151)' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-[#150d43]/40 z-50 flex items-center justify-center p-4 backdrop-blur-md transition-opacity duration-300">
                    <div className="w-full max-w-3xl bg-white rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 flex flex-col">
                        
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                            <a 
                                href="https://www.youtube.com/watch?v=07vHi-Xa7Zk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-gray-200 hover:border-[rgb(38,40,151)] text-[12px] px-4 py-2 font-bold uppercase rounded-sm transition-colors tracking-[1px] bg-white no-underline"
                                style={{ fontFamily: 'Jost, sans-serif', color: 'rgb(38,40,151)' }}
                            >
                                <svg className="w-4 h-4 fill-current text-red-600" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                Watch on YouTube
                            </a>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-none outline-none p-1 flex items-center justify-center cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="w-full aspect-video bg-black">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/07vHi-Xa7Zk?autoplay=1"
                                title="Video Preview"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}

export default ReachOut;
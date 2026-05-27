import React, { useState } from 'react';
import { connectContent } from '../../data/connectData';

export default function BookingSection() {
    const { header } = connectContent;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="max-w-[1140px] mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16 w-full">
                
                <div className="w-full md:w-1/2 flex flex-col gap-8">
                    <h1 
                        className="text-3xl md:text-[40px] font-bold leading-tight tracking-tight m-0 text-left"
                        style={{ fontFamily: '"Fira Sans", sans-serif', color: 'rgb(38,40,164)' }}
                    >
                        {header.title}
                    </h1>

                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 w-full shadow-sm">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#150d43]/70">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        className="w-full border border-gray-200 bg-white p-3.5 rounded-lg outline-none text-sm transition-all focus:border-[#262897]" 
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#150d43]/70">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        className="w-full border border-gray-200 bg-white p-3.5 rounded-lg outline-none text-sm transition-all focus:border-[#262897]" 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold uppercase tracking-wider text-[#150d43]/70">Message / Purpose</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4" 
                                    required 
                                    className="w-full border border-gray-200 bg-white p-3.5 rounded-lg outline-none text-sm transition-all focus:border-[#262897] resize-none" 
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full sm:w-auto bg-[#262897] hover:bg-[#150d43] text-white text-xs font-bold py-3.5 px-8 rounded-lg transition-colors duration-300 self-start cursor-pointer uppercase tracking-wider"
                            >
                                Schedule Meeting
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-start items-start md:pt-3">
                    <p className="text-gray-500 text-base leading-relaxed m-0 text-left">
                        {header.description}
                    </p>
                </div>

            </div>
        </section>
    );
}
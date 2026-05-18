import React from 'react';
import { connectContent } from '../../data/connectData';

export default function SocialFeed() {
    const { socialSection } = connectContent;

    return (
        <section className="max-w-[1140px] mx-auto px-6 pb-24">
            <div className="text-center mb-16">
                <h2 
                    className="text-4xl md:text-5xl font-black tracking-wide relative inline-block m-0"
                    style={{ fontFamily: '"Fira Sans", sans-serif', color: 'rgb(38,40,164)' }}
                >
                    {socialSection.title}
                    <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#262897]" />
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {socialSection.reels.map((embedUrl, idx) => (
                    <div key={idx} className="w-full max-w-[360px] rounded-xl overflow-hidden border border-gray-100 shadow-md bg-white">
                        <iframe
                            src={embedUrl}
                            className="w-full h-[650px]"
                            allowTransparency="true"
                            allowFullScreen={true}
                            frameBorder="0"
                            scrolling="no"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
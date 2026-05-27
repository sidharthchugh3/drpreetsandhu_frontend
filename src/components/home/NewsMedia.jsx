import React from 'react';

const newsData = [
    {
        title: "ET MSME Awards 2024",
        image: "/assets/images/gallery/Et-1536x1208.jpg",
        link: "https://www.aninews.in/news/business/avpl-international-wins-indias-fastest-growing-msme-small-enterprise-at-et-msme-awards-202420250322122044/"
    },
    {
        title: "AVPL ties up with IIT Kanpur",
        image: "/assets/images/gallery/WhatsApp-Image-2024-07-02-at-10.27-3-1536x1208.jpg",
        link: "https://yourstory.com/hindi/iit-kanpur-and-avpl-international-partner-to-propel-advanced-technology-drones"
    },
    {
        title: "AVPL International Honoured with Award of Excellence from HSRLM",
        image: "/assets/images/gallery/Screenshot-2024-08-10-112117.png",
        link: "https://www.theweek.in/wire-updates/business/2024/06/29/dcm26-avpl-international.html"
    },
    {
        title: "AVPL selected by DPIIT to represent Indian startup ecosystem in Cyprus",
        image: "/assets/images/gallery/Screenshot-2025-09-20-143528.png",
        link: "https://cxotoday.com/media-coverage/avpl-is-selected-by-dpiit-as-a-pioneer-in-the-drone-tech-industry-to-represent-indian-startup-ecosystem-in-cyprus/"
    },
    {
        title: "APVL to train agri drone operators to work in Australia, Brazil, Spain",
        image: "/assets/images/gallery/NIK_3881-scaled.webp",
        link: "https://www.thehindubusinessline.com/economy/agri-business/avpl-to-train-agri-drone-operators-to-work-in-australia-brazil-spain/article68297474.ece",
        className: "object-top"
    },
    {
        title: "APVL's Innovation Conclave in Partnership With NSDC",
        image: "/assets/images/gallery/188A7269-2-scaled.jpg",
        link: "https://www.businesstoday.in/bt-tv/video/avpls-innovation-conclave-in-partnership-with-nsdc-436080-2024-07-05",
        className: "" 
    },
    {
        title: "Brainstorming on use of drone technology in agriculture",
        image: "/assets/images/profile.png",
        link: "https://www.youtube.com/watch?v=umTep2Qpmuw",
        className: "object-top" 
    }
];

const NewsCard = ({ item }) => (
    <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative block overflow-hidden w-full h-[320px] lg:h-[380px] rounded-xl shadow-md transition-all duration-500 hover:shadow-2xl"
    >
        <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${item.className || 'object-center'}`} 
        />
        
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
            <h3 
                className="text-white text-xl lg:text-2xl font-black mb-6 leading-tight drop-shadow-2xl" 
                style={{ fontFamily: 'Jost, sans-serif', color: '#ffffff' }}
            >
                {item.title}
            </h3>
            
            <span 
                className="text-white text-[12px] font-black tracking-[4px] border-b-2 border-white pb-1.5 uppercase drop-shadow-md"
                style={{ color: '#ffffff', borderColor: '#ffffff' }}
            >
                Read More
            </span>
        </div>
    </a>
);

export default function NewsMedia() {
    const brandBlue = '#262897';

    return (
        <section className="w-full bg-white py-12 lg:py-16 px-4 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 items-center">
                <NewsCard item={newsData[0]} />
                
                <div className="flex flex-col items-center justify-center text-center p-6">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-[1px] w-8 bg-gray-200" />
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[4px]">Latest Buzz</span>
                        <div className="h-[1px] w-8 bg-gray-200" />
                    </div>
                    <h2 className="text-4xl lg:text-[56px] font-[1000] tracking-tight mb-5" style={{ color: brandBlue, fontFamily: 'Jost, sans-serif', lineHeight: 1 }}>
                        News & Media
                    </h2>
                    <p className="text-gray-500 text-base lg:text-lg italic max-w-xs">
                        The Inspiring Journey of Preet Sandhu: A Tale of Experience and Achievement
                    </p>
                </div>

                <NewsCard item={newsData[1]} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <NewsCard item={newsData[2]} />
                <NewsCard item={newsData[3]} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <NewsCard item={newsData[4]} />
                <NewsCard item={newsData[5]} />
                <NewsCard item={newsData[6]} />
            </div>
        </section>
    );
}
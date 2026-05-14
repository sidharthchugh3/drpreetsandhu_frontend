import React from 'react';

export default function Gallery() {
    const column1Images = [
        'WhatsApp-Image-2025-09-20-at-2.24.22-PM-1536x1024.jpeg',
        'Screenshot-2025-09-20-145315.png',
        'Screenshot-2025-09-20-143528.png',
        'Event-1.1-1536x1536.jpg',
        'DSC02082-1536x1024.jpg',
    ];

    const column2Images = [
        'WhatsApp-Image-2024-07-02-at-10.27-3-1536x1208.jpg',
        'Women-Award-1-1536x1390.jpg',
        'WhatsApp-Image-2025-09-20-at-2.23.23-PM-1536x1024.jpeg',
        '188A7269-2-scaled.jpg',
        'SK-17-1536x1024.jpg',
    ];

    const column3Images = [
        'WhatsApp-Image-2025-09-20-at-2.23.05-PM-1536x1024.jpeg',
        'Et-1536x1208.jpg',
        'WhatsApp-Image-2025-09-20-at-2.28.48-PM.jpeg',
        'e15-1536x1350.jpg',
        'Screenshot-2024-08-10-112117.png',
    ];

    return (
        <main
            id="main-gallery"
            className="pt-[60px] sm:pt-[76px] pb-12 bg-white"
        >
            {/* Hero Banner with pd.jpeg background */}
            <section
                className="relative flex flex-col justify-center items-center w-full min-h-[200px] md:min-h-[350px] px-4 overflow-hidden mb-12"
                style={{
                    backgroundColor: '#F1F5F6',
                    backgroundImage: 'url("/assets/images/family/pd.jpeg")',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#404040] opacity-[0.45]"></div>

                {/* Title */}
                <div className="relative z-10 text-center">
                    <h2
                        className="m-0 font-extrabold text-[35px] md:text-[65px] text-[#262897]"
                        style={{ fontFamily: '"Fira Sans", sans-serif' }}
                    >
                        Gallery
                    </h2>
                </div>
            </section>

            {/* Gallery Masonry/Grid */}
            <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[15px] pb-[30px]">
                <div className="flex flex-col md:flex-row w-full gap-5">
                    {/* Column 1 */}
                    <div className="flex flex-col w-full md:w-[33.3333%] gap-5">
                        {column1Images.map((img, idx) => (
                            <div key={`col1-${idx}`} className="w-full">
                                <img
                                    src={`/assets/images/gallery/${img}`}
                                    alt={`Gallery Image 1-${idx + 1}`}
                                    className="w-full h-auto rounded-[8px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col w-full md:w-[33.3333%] gap-5">
                        {column2Images.map((img, idx) => (
                            <div key={`col2-${idx}`} className="w-full">
                                <img
                                    src={`/assets/images/gallery/${img}`}
                                    alt={`Gallery Image 2-${idx + 1}`}
                                    className="w-full h-auto rounded-[8px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col w-full md:w-[33.3333%] gap-5">
                        {column3Images.map((img, idx) => (
                            <div key={`col3-${idx}`} className="w-full">
                                <img
                                    src={`/assets/images/gallery/${img}`}
                                    alt={`Gallery Image 3-${idx + 1}`}
                                    className="w-full h-auto rounded-[8px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

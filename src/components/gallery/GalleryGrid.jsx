import React from 'react';
import { galleryImages } from '../../data/galleryData';

export default function GalleryGrid() {
    return (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[15px] pb-[30px]">
            <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="flex flex-col w-full md:w-[33.3333%] gap-5">
                    {galleryImages.column1.map((img, idx) => (
                        <div key={`col1-${idx}`} className="w-full">
                            <img
                                src={`/assets/images/gallery/${img}`}
                                alt={`Gallery 1-${idx + 1}`}
                                className="w-full h-auto rounded-[8px] object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col w-full md:w-[33.3333%] gap-5">
                    {galleryImages.column2.map((img, idx) => (
                        <div key={`col2-${idx}`} className="w-full">
                            <img
                                src={`/assets/images/gallery/${img}`}
                                alt={`Gallery 2-${idx + 1}`}
                                className="w-full h-auto rounded-[8px] object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col w-full md:w-[33.3333%] gap-5">
                    {galleryImages.column3.map((img, idx) => (
                        <div key={`col3-${idx}`} className="w-full">
                            <img
                                src={`/assets/images/gallery/${img}`}
                                alt={`Gallery 3-${idx + 1}`}
                                className="w-full h-auto rounded-[8px] object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
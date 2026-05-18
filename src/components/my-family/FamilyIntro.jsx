import React from 'react';
import { familyContent } from '../../data/familyData';

export default function FamilyIntro() {
    const { intro } = familyContent;
    return (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[15px] pt-[30px] md:pt-[70px] pb-[30px]">
            <div className="flex flex-col md:flex-row items-start md:gap-[80px] gap-8">
                <div className="text-left w-full md:w-[50.673%] md:text-left text-center">
                    <div className="flex items-center gap-2 mb-2 md:justify-start justify-center">
                        <span className="hidden md:block w-[50px] h-[2px] bg-[#575757]"></span>
                        <h3 className="text-[#575757] text-[16px] font-medium m-0" style={{ fontFamily: '"Fira Sans", sans-serif' }}>
                            {intro.tagline}
                        </h3>
                        <span className="w-[50px] h-[2px] bg-[#575757]"></span>
                    </div>
                    <h1 className="text-[30px] md:text-[40px] font-bold leading-[1.1] m-0" style={{ fontFamily: '"Fira Sans", sans-serif', color: 'rgb(38,40,151)' }}>
                        {intro.heading}
                    </h1>
                </div>
                <div className="w-full md:w-[49.327%] text-justify md:text-left text-center">
                    <p className="text-[#6A6874] text-[17px] font-normal leading-[1.5] m-0 text-justify" style={{ fontFamily: '"Jost", sans-serif' }}>
                        {intro.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
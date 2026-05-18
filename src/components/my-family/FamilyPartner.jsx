import React from 'react';
import { familyContent } from '../../data/familyData';

export default function FamilyPartner() {
    const { partnerCard } = familyContent;
    return (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[15px] pb-[30px]">
            <div className="flex flex-col lg:flex-row items-center w-full">
                <div
                    className="relative z-10 w-full lg:w-[40%] bg-[#F0F0F0] rounded-[10px] p-6 sm:p-8 lg:p-[50px] border-[6px] flex flex-col justify-center"
                    style={{ borderColor: 'rgb(38,40,151)' }}
                >
                    <h2
                        className="text-[25px] font-semibold mb-4 text-start"
                        style={{ fontFamily: '"Roboto", "Fira Sans", sans-serif', color: 'rgb(38,40,151)' }}
                    >
                        {partnerCard.title}
                    </h2>
                    <p className="text-[#696868] text-[17px] font-normal text-justify m-0" style={{ fontFamily: '"Jost", sans-serif' }}>
                        {partnerCard.description}
                    </p>
                </div>
                <div className="relative w-full lg:w-[60%] flex flex-col justify-center mt-6 lg:mt-0 lg:-ml-[50px] z-0">
                    <div className="w-full text-center">
                        <img
                            src={partnerCard.image}
                            alt={partnerCard.title}
                            className="w-full h-auto rounded-[5px] shadow-sm max-w-[720px] inline-block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
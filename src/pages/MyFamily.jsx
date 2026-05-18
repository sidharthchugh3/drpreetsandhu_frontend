import React from 'react';
import FamilyHero from '../components/my-family/FamilyHero';
import FamilyIntro from '../components/my-family/FamilyIntro';
import FamilyPartner from '../components/my-family/FamilyPartner';


export default function MyFamily() {
    return (
        <main id="main-my-family" className="pt-[60px] sm:pt-[76px] pb-12 bg-white overflow-hidden">
            <FamilyHero />
            <FamilyIntro />
            <FamilyPartner />
        </main>
    );
}
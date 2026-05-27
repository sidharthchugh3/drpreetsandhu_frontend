const milestones = [
    {
        id: 'avpl',
        number: '01',
        title: 'Building AVPL International',
        subtitle: '(a.k.a. Impact, Unleashed)',
        description: 'Back in 2016, I took a wild leap and started AVPL International with a simple purpose: empower people—not just with inspiration, but with actual skills, knowledge, and tech that opens new doors. Fast forward, and we’ve trained more than 130,000 students (big families have nothing on us). Next up? Turning 1,50,000 dreamers into Village Level Entrepreneurs and shaking up lives in 12 states. Rural India, get ready: this is just the beginning.',
        column: 1
    },
    {
        id: 'startup-stairs',
        number: '02',
        title: 'Startup Stairs',
        subtitle: 'My Favorite Launchpad',
        description: 'Startup Stairs is my playground for wild ideas, entrepreneurial energy, and occasional happy chaos. Helping early-stage startups in drones, agri-tech, AI, robotics, and EVs take off? That’s my kind of fun. There’s nothing better than cheering on visionaries as they turn wild “what ifs” into “look what we did!”',
        column: 2
    },
    {
        id: 'awards',
        number: '03',
        title: 'Breaking A Few Glass Ceilings',
        subtitle: '(And Maybe A Drone Propeller Or Two)',
        description: 'I’m extra-proud to be the first woman entrepreneur collaborating with legends like IIT Kanpur, HSDM, and NSDC International. It means our mission for innovation is getting louder, prouder, and more people are joining the party.',
        column: 1
    },
    {
        id: 'music',
        number: '04',
        title: 'Rural Roots & Rocket Science',
        subtitle: '',
        description: 'No matter how high we fly, rural development keeps me grounded. Whether it’s through projects like WISH and GISH or getting drones buzzing over farms, we’re not just improving yields—we’re sparking new dreams for the next generation.',
        column: 2
    },
];

export default function Milestones() {
    const brandBlue = '#262897';
    const bodyGray = '#6a6874';

    return (
        <section id="milestones" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-3xl md:text-[42px] font-[1000] mb-6 tracking-tight leading-tight" 
                        style={{ color: brandBlue, fontFamily: '"Jost", sans-serif' }}>
                        Feathers In My Cap: Milestones & Meaningful Impact
                    </h2>
                    <p className="max-w-[800px] mx-auto text-[16px] lg:text-[17px] leading-[1.8] font-medium"
                       style={{ color: bodyGray, fontFamily: '"Jost", sans-serif' }}>
                        If I had a trophy shelf (and it was big enough), here’s what you’d find—every milestone a story, every achievement proof that with a bit of courage, you can spark real change.
                    </p>
                </div>

                {/* Asymmetric Masonry-Style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    
                    {/* Left Column (Cards 01 and 03) */}
                    <div className="flex flex-col gap-8">
                        {milestones.filter(m => m.column === 1).map((m) => (
                            <MilestoneCard key={m.id} m={m} />
                        ))}
                    </div>

                    {/* Right Column (Cards 02 and 04) - Staggered down on desktop */}
                    <div className="flex flex-col gap-8 md:mt-16">
                        {milestones.filter(m => m.column === 2).map((m) => (
                            <MilestoneCard key={m.id} m={m} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function MilestoneCard({ m }) {
    const brandBlue = '#262897';
    const headingColor = '#150d43';
    const bodyGray = '#6a6874';

    return (
        <article
            className="p-8 lg:p-12 rounded-[15px] bg-[#f1f5f6] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
        >
            <div className="mb-6 pb-6 border-b border-white/60">
                <h3 className="text-[22px] lg:text-2xl font-bold mb-3 tracking-tight leading-tight" 
                    style={{ color: brandBlue, fontFamily: '"Jost", sans-serif' }}>
                    {m.title}
                </h3>
                {m.subtitle && (
                    <h4 className="text-[13px] font-bold uppercase tracking-widest opacity-60"
                        style={{ color: headingColor, fontFamily: '"Jost", sans-serif' }}>
                        {m.subtitle}
                    </h4>
                )}
            </div>
            
            <p className="text-[15px] lg:text-[16px] leading-[1.9] text-justify font-normal"
               style={{ color: bodyGray, fontFamily: '"Jost", sans-serif' }}>
                {m.description}
            </p>
        </article>
    );
}
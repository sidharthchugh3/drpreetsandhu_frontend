export default function MyFamily() {
    return (
        <main
            id="main-my-family"
            className="pt-[60px] sm:pt-[76px] pb-12 bg-white overflow-hidden"
        >
            {/* Hero Banner with pd.jpeg background */}
            <section
                className="relative flex flex-col justify-center items-center w-full min-h-[200px] md:min-h-[350px] px-4 overflow-hidden"
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
                        My Family
                    </h2>
                </div>
            </section>

            {/* Intro Content */}
            <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[15px] pt-[30px] md:pt-[70px] pb-[30px]">
                <div className="flex flex-col md:flex-row items-start md:gap-[80px] gap-8">
                    {/* Left Side (Heading) */}
                    <div className="text-left w-full md:w-[50.673%] md:text-left text-center">
                        {/* Subtitle with border lines */}
                        <div className="flex items-center gap-2 mb-2 md:justify-start justify-center">
                            <span className="hidden md:block w-[50px] h-[2px] bg-[#575757]"></span>
                            <h3
                                className="text-[#575757] text-[16px] font-medium m-0"
                                style={{
                                    fontFamily: '"Fira Sans", sans-serif',
                                }}
                            >
                                Leading with Purpose, Grounded in Passion
                            </h3>
                            <span className="w-[50px] h-[2px] bg-[#575757]"></span>
                        </div>

                        {/* Main heading */}
                        <h1
                            className="text-[#262897] text-[30px] md:text-[40px] font-bold leading-[1.1] m-0"
                            style={{ fontFamily: '"Fira Sans", sans-serif' }}
                        >
                            An Entrepreneur, Visionary Leader and Family Person
                        </h1>
                    </div>

                    {/* Right Side (Text) */}
                    <div className="w-full md:w-[49.327%] text-justify md:text-left text-center">
                        <p
                            className="text-[#6A6874] text-[17px] font-normal leading-[1.5] m-0 text-justify"
                            style={{ fontFamily: '"Jost", sans-serif' }}
                        >
                            I juggle a few roles: passionate entrepreneur,
                            loving mother, sometimes a mentor and always the
                            loudest cheerleader for my family. Side-by-side with
                            Deep, we turned a shared dream into AVPL
                            International and Startup Stairs—because we believe
                            rural youth deserve the same shot at the future as
                            anyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners section with overlap layout */}
            <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[15px] pb-[30px]">
                <div className="flex flex-col lg:flex-row items-center w-full">
                    {/* Text Box (40% width on desktop) */}
                    <div
                        className="relative z-10 w-full lg:w-[40%] bg-[#F0F0F0] rounded-[10px] p-6 sm:p-8 lg:p-[50px] border-[6px] border-[#262897] flex flex-col justify-center"
                        style={{
                            marginTop: '0px',
                            marginBottom: '0px',
                            marginLeft: '0px',
                            marginRight: '0px',
                        }}
                    >
                        <h2
                            className="text-[#262897] text-[25px] font-semibold mb-4 text-start"
                            style={{
                                fontFamily: '"Roboto", "Fira Sans", sans-serif',
                            }}
                        >
                            Partners in Life and Business
                        </h2>
                        <p
                            className="text-[#696868] text-[17px] font-normal text-justify m-0"
                            style={{ fontFamily: '"Jost", sans-serif' }}
                        >
                            Mine and Deep’s partnership is built on trust,
                            mutual respect, and a shared vision. We complement
                            each other’s strengths as well as weaknesses, making
                            our personal and professional relationship a true
                            success story.
                        </p>
                    </div>

                    {/* Image Box (60% width on desktop) */}
                    <div className="relative w-full lg:w-[60%] flex flex-col justify-center mt-6 lg:mt-0 lg:-ml-[50px] z-0">
                        <div className="w-full text-center">
                            <img
                                src="/assets/images/family/Preet-Maam-Deep-Sir-768x512.jpg"
                                alt="Partners in Life and Business"
                                className="w-full h-auto rounded-[5px] shadow-sm max-w-[720px] inline-block"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

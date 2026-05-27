import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import About from '../components/home/About';
import Milestones from '../components/home/Milestones';
import Ventures from '../components/home/Ventures';
import NewsMedia  from '../components/home/NewsMedia';
import ReachOut from '../components/home/ReachOut';


export default function Home() {
    return (
        <main id="main-home">
            <Hero />
            <StatsBar />
            <About />
            <Milestones />
            <Ventures />
            <NewsMedia/>
            <ReachOut />
        </main>
    );
}

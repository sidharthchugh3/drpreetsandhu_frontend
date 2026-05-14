import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import About from '../components/home/About';
import Milestones from '../components/home/Milestones';
import Ventures from '../components/home/Ventures';
import ContactForm from '../components/home/ContactForm';

export default function Home() {
    return (
        <main id="main-home">
            <Hero />
            <StatsBar />
            <About />
            <Milestones />
            <Ventures />
            <ContactForm />
        </main>
    );
}

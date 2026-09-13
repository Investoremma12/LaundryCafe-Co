import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Mission from './components/Mission';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-200 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2.5 focus:text-white"
			>
				Skip to content
			</a>
			<Navbar />
			<main id="main">
				<Hero />
				<Services />
				<About />
				<Mission />
				<WhyChooseUs />
				<Testimonials />
				<Pricing />
				<Booking />
			</main>
			<Footer />
		</>
	);
}

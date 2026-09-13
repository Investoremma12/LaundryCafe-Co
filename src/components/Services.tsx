import Reveal from './Reveal';
import ServiceCard from './ServiceCard';
import SectionIntro from './SectionIntro';
import { cleaningServices, laundryServices } from '../data';

export default function Services() {
	return (
		<section id="services" className="bg-bg-soft py-24">
			<div className="mx-auto max-w-310 px-6 md:px-8">
				<SectionIntro
					eyebrow="Our services"
					title={
						<>
							Clean clothes.
							<br />
							Fresh spaces.
						</>
					}
					description="From everyday laundry to professional cleaning, we've got you covered."
					className="mb-14"
				/>

				<div className="mb-14">
					<Reveal className="mb-7 text-center">
						<h3 className="font-serif-display text-2xl font-semibold text-navy">
							Laundry Services
						</h3>
						<p className="mx-auto mt-1.5 max-w-120 text-[15.5px] text-ink-soft">
							Professional care for your clothes, fabrics, and everyday laundry.
						</p>
					</Reveal>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{laundryServices.map((service, i) => (
							<Reveal
								key={service.title}
								delay={i * 0.08}
								as="article"
								mode="scale"
							>
								<ServiceCard service={service} variant="laundry" />
							</Reveal>
						))}
					</div>
				</div>

				<div>
					<Reveal className="mb-7 text-center">
						<h3 className="font-serif-display text-2xl font-semibold text-navy">
							Professional Cleaning
						</h3>
						<p className="mx-auto mt-1.5 max-w-120 text-[15.5px] text-ink-soft">
							Professional cleaning for homes, offices, furniture, and spaces
							that deserve extra care.
						</p>
					</Reveal>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{cleaningServices.map((service, i) => (
							<Reveal key={service.title} delay={i * 0.08} as="article">
								<ServiceCard service={service} variant="cleaning" />
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

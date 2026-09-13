import Reveal from './Reveal';
import Button from './Button';
import SectionIntro from './SectionIntro';

export default function Pricing() {
	return (
		<section id="pricing" className="bg-green-pale py-22">
			<div className="mx-auto max-w-170 px-6 text-center">
				<SectionIntro
					eyebrow="Pricing"
					title="Pricing built around your needs."
					description={
						<>
							Every load, home, and office is different, so we quote based on
							the service and scope you need rather than a one-size-fits-all
							price list. Tell us what you&rsquo;re looking for and we&rsquo;ll
							get back to you with a clear, fair quote.
						</>
					}
					className="max-w-none"
				/>
				<Reveal delay={0.15}>
					<Button href="#contact">Get a quote</Button>
				</Reveal>
			</div>
		</section>
	);
}

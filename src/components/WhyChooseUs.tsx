import Reveal from './Reveal';
import SectionIntro from './SectionIntro';
import { whyChooseUs } from '../data';

export default function WhyChooseUs() {
	return (
		<section className="bg-bg py-24">
			<div className="mx-auto max-w-310 px-6 md:px-8">
				<SectionIntro
					eyebrow="Why choose us"
					title={
						<>
							Why people trust
							<br />
							The Laundry Cafe &amp; Co.
						</>
					}
					className="mb-4"
				/>

				<div className="mt-10 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
					{whyChooseUs.map((item, i) => {
						const Icon = item.icon;
						return (
							<Reveal key={item.title} delay={(i % 3) * 0.08}>
								<span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-soft text-green-dark">
									<Icon size={22} strokeWidth={1.8} />
								</span>
								<h4 className="font-serif-display text-lg font-semibold text-navy">
									{item.title}
								</h4>
								<p className="mt-1.5 max-w-75 text-[14.5px] text-ink-soft">
									{item.description}
								</p>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}

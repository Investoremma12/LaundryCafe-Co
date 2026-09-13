import Reveal from './Reveal';
import { trustItems } from '../data';

export default function About() {
	return (
		<section id="about" className="bg-beige py-24">
			<div className="mx-auto grid max-w-310 grid-cols-1 gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
				<Reveal className="relative">
					<img
						src="/images/about-team.jpg"
						alt="The Laundry Cafe and Co. team folding fresh linens"
						className="h-90 w-full rounded-[26px] object-cover shadow-card sm:h-115"
					/>
					<span className="mt-4 inline-block max-w-42.5 rounded-2xl bg-white px-5 py-4 font-serif-display text-[14.5px] italic leading-snug text-navy shadow-card md:absolute md:-bottom-5 md:-right-4 md:mt-0">
						&ldquo;Clean clothes, happier days.&rdquo;
					</span>
				</Reveal>

				<Reveal delay={0.1}>
					<p className="mb-3.5 text-[13px] font-semibold tracking-wide text-green-dark">
						About Us
					</p>
					<h2 className="font-serif-display text-[32px] font-semibold leading-tight text-navy sm:text-[40px]">
						Care in every clean.
					</h2>
					<p className="mt-5 max-w-130 text-base text-ink">
						At The Laundry Cafe &amp; Co., we believe that clean clothes and a
						clean environment make life easier, healthier, and more enjoyable.
					</p>
					<p className="mt-4 max-w-130 text-base text-ink">
						We provide premium laundry and professional cleaning services for
						individuals, families, homes, offices, and commercial spaces &mdash;
						from everyday laundry to deep cleaning and upholstery care.
					</p>
					<p className="mt-4 max-w-130 text-base text-ink">
						We handle every item and every space with the care it deserves, so
						your clothes stay fresh and your environment stays clean and
						comfortable.
					</p>

					<div className="mt-8 flex flex-wrap gap-6">
						{trustItems.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.title}
									className="flex flex-1 basis-37.5 items-start gap-3"
								>
									<span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full bg-green-pale text-green-dark">
										<Icon size={18} strokeWidth={1.8} />
									</span>
									<div>
										<p className="text-[14.5px] font-semibold text-navy">
											{item.title}
										</p>
										<p className="mt-0.5 text-[13.5px] text-ink-soft">
											{item.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</Reveal>
			</div>
		</section>
	);
}

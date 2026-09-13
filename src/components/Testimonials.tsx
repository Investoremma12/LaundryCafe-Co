import Reveal from './Reveal';
import SectionIntro from './SectionIntro';
import { testimonials } from '../data';

export default function Testimonials() {
	return (
		<section className="bg-bg-soft py-24">
			<div className="mx-auto max-w-310 px-6 md:px-8">
				<SectionIntro
					eyebrow="Testimonials"
					title={
						<>
							Real people.
							<br />
							Real freshness.
						</>
					}
					description={
						<>
							Example reviews shown below for illustration &mdash; swap these
							for real customer feedback as it comes in.
						</>
					}
					className="mb-4"
				/>

				<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
					{testimonials.map((t, i) => (
						<Reveal key={t.name} delay={i * 0.08} as="article">
							<div className="rounded-[22px] bg-white p-7 shadow-card">
								<div className="mb-3.5 text-[15px] tracking-[2px] text-[#D6A94F]">
									&#9733;&#9733;&#9733;&#9733;&#9733;
								</div>
								<p className="min-h-18 text-[15px] text-ink">
									&ldquo;{t.copy}&rdquo;
								</p>
								<div className="mt-5 flex items-center gap-3">
									<span
										className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
										style={{ backgroundColor: t.color }}
									>
										{t.initials}
									</span>
									<div>
										<p className="text-[14.5px] font-semibold text-navy">
											{t.name}
										</p>
										<p className="mt-0.5 text-[12.5px] text-ink-soft">
											Placeholder review
										</p>
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

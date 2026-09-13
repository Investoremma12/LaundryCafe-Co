import Reveal from './Reveal';

export default function Mission() {
	return (
		<section className="relative overflow-hidden bg-navy py-24">
			<div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
			<Reveal
				className="relative mx-auto max-w-170 px-6 text-center"
				mode="scale"
			>
				<p className="mb-3.5 text-[13px] font-semibold tracking-wide text-[#B7D2B4]">
					Our Mission
				</p>
				<h2 className="font-serif-display text-[32px] font-semibold leading-tight text-white sm:text-[40px]">
					Making clean feel easy.
				</h2>
				<p className="mx-auto mt-4 max-w-140 text-[17px] text-[#C9D6D2]">
					Our mission is to provide reliable, convenient, and high-quality
					laundry and cleaning services that save our customers time while
					giving them confidence in the cleanliness of their clothes and spaces.
				</p>
			</Reveal>
		</section>
	);
}

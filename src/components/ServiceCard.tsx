import type { ServiceItem } from '../data';

interface ServiceCardProps {
	service: ServiceItem;
	variant?: 'laundry' | 'cleaning';
}

export default function ServiceCard({
	service,
	variant = 'laundry',
}: ServiceCardProps) {
	const Icon = service.icon;

	return (
		<article className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
			<span className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-green-pale/70 transition-transform duration-700 group-hover:scale-[2.5]" />
			<div
				className={`relative mb-4.5 flex h-14 w-14 items-center justify-center rounded-2xl text-navy transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 ${
					variant === 'cleaning' ? 'bg-green-pale' : 'bg-bg-soft'
				}`}
			>
				<Icon size={26} strokeWidth={1.8} />
			</div>
			<h4 className="relative font-serif-display text-[19px] font-semibold text-navy">
				{service.title}
			</h4>
			<p className="relative mt-2 text-[14.5px] leading-relaxed text-ink-soft">
				{service.description}
			</p>
		</article>
	);
}

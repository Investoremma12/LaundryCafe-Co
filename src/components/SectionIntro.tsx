import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionIntroProps {
	eyebrow: string;
	title: ReactNode;
	description?: ReactNode;
	align?: 'left' | 'center';
	className?: string;
}

export default function SectionIntro({
	eyebrow,
	title,
	description,
	align = 'center',
	className = '',
}: SectionIntroProps) {
	const isCentered = align === 'center';

	return (
		<Reveal
			className={`max-w-160 ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}
		>
			<p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-green-dark">
				{eyebrow}
			</p>
			<h2 className="font-serif-display text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-navy sm:text-[46px]">
				{title}
			</h2>
			{description && (
				<p className="mt-5 max-w-140 text-[16px] leading-relaxed text-ink-soft">
					{description}
				</p>
			)}
			{isCentered && (
				<span className="mx-auto mt-6 block h-1 w-14 rounded-full bg-gold" />
			)}
		</Reveal>
	);
}

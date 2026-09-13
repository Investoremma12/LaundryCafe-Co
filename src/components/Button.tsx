import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode;
	variant?: 'solid' | 'outline' | 'ghost';
	showArrow?: boolean;
}

const variants = {
	solid:
		'bg-green text-white shadow-[0_18px_34px_-18px_rgba(73,106,75,0.9)] hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-[0_22px_40px_-18px_rgba(73,106,75,0.9)]',
	outline:
		'border border-navy/15 bg-white/60 text-navy hover:-translate-y-0.5 hover:border-navy/40 hover:bg-white',
	ghost: 'text-navy hover:text-green-dark',
};

export default function Button({
	children,
	variant = 'solid',
	showArrow = true,
	className = '',
	...props
}: ButtonProps) {
	return (
		<a
			className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold transition-[transform,background-color,border-color,box-shadow,color] duration-300 ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
			{showArrow && (
				<ArrowUpRight
					size={16}
					strokeWidth={2.2}
					className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			)}
		</a>
	);
}

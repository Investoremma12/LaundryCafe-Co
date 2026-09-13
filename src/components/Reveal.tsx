import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
	children: ReactNode;
	delay?: number;
	className?: string;
	as?: 'div' | 'article';
	mode?: 'rise' | 'scale' | 'slide';
}

/**
 * Fades and slides content up into view once it enters the viewport.
 * Falls back to a static, fully-visible render when the user has
 * requested reduced motion.
 */
export default function Reveal({
	children,
	delay = 0,
	className,
	as = 'div',
	mode = 'rise',
}: RevealProps) {
	const shouldReduceMotion = useReducedMotion();

	const hiddenState = {
		rise: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
		scale: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 },
		slide: { opacity: 0, x: shouldReduceMotion ? 0 : -22 },
	}[mode];

	const variants: Variants = {
		hidden: hiddenState,
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const MotionTag = motion[as];

	return (
		<MotionTag
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
			variants={variants}
		>
			{children}
		</MotionTag>
	);
}

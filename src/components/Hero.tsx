import { motion } from 'framer-motion';
import { ArrowDown, Check, Sparkles } from 'lucide-react';
import Button from './Button';

export default function Hero() {
	return (
		<section id="home" className="hero-shell">
			<div className="hero-orb hero-orb-gold" aria-hidden="true" />
			<div className="hero-orb hero-orb-green" aria-hidden="true" />
			<div className="hero-spark hero-spark-one" aria-hidden="true" />
			<div className="hero-spark hero-spark-two" aria-hidden="true" />
			<div className="hero-content relative z-10 mx-auto grid max-w-310 grid-cols-1 items-center gap-10 px-6 py-16 md:min-h-[calc(100vh-73px)] md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-8 md:py-20">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="relative z-10 max-w-135"
				>
					<p className="eyebrow-rule mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-green-dark">
						The clean feeling, delivered
					</p>
					<h1 className="text-balance max-w-155 font-serif-display text-[48px] font-semibold leading-[0.96] tracking-[-0.04em] text-navy sm:text-[66px] lg:text-[82px]">
						Freshness,
						<br />
						without the
						<br />
						<span className="italic text-green-dark">chore.</span>
					</h1>
					<p className="mt-7 max-w-117.5 text-[17px] leading-relaxed text-ink">
						Premium laundry and professional cleaning for the clothes you wear,
						the spaces you share, and the time you want back.
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-3">
						<Button href="#contact">Book a pickup</Button>
						<Button href="#services" variant="outline">
							See what we clean
						</Button>
					</div>
					<div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-navy-2">
						<span className="inline-flex items-center gap-1.5">
							<Check size={14} className="text-green-dark" /> Careful handling
						</span>
						<span className="inline-flex items-center gap-1.5">
							<Check size={14} className="text-green-dark" /> Reliable
							turnaround
						</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="hero-care-rail"
				>
					<div className="hero-care-intro">
						<span className="hero-live-dot" />
						<span>Care in motion</span>
					</div>
					<div className="hero-care-items">
						<span>
							<strong>01</strong> Sort with intention
						</span>
						<span>
							<strong>02</strong> Clean with care
						</span>
						<span>
							<strong>03</strong> Return it fresh
						</span>
					</div>
					<div className="hero-care-line" aria-hidden="true">
						<span />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 28, scale: 0.97 }}
					animate={{ opacity: 1, x: 0, scale: 1 }}
					transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
					className="hero-image-frame relative z-10"
					whileHover={{ y: -6 }}
					whileTap={{ scale: 0.995 }}
				>
					<motion.img
						initial={{ opacity: 0, scale: 1.04 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
						src="/images/hero-laundry.jpg"
						alt="Bright, modern laundry interior with washing machines"
						className="hero-image absolute inset-0 h-full w-full object-cover"
					/>
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.65, duration: 0.6 }}
						className="absolute bottom-6 left-6 z-10 max-w-57.5 rounded-2xl border border-white/30 bg-navy/85 p-4 text-white shadow-2xl backdrop-blur-md sm:bottom-8 sm:left-8"
					>
						<div className="mb-3 flex items-center justify-between">
							<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy">
								<Sparkles size={15} />
							</span>
							<span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
								The clean standard
							</span>
						</div>
						<p className="font-serif-display text-lg leading-tight">
							A little more care in every cycle.
						</p>
					</motion.div>
					<div className="absolute right-6 top-6 z-10 hidden h-20 w-20 items-center justify-center rounded-full border border-white/45 bg-white/15 text-white backdrop-blur-sm sm:flex">
						<ArrowDown size={22} className="animate-bounce" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/logos/logo-icon.png';
import { NAV_LINKS } from '../data';
import Button from './Button';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeHref, setActiveHref] = useState('#home');

	useEffect(() => {
		const sections = NAV_LINKS.map((link) =>
			document.querySelector(link.href),
		).filter((el): el is Element => el !== null);

		function onScroll() {
			const offset = 120;
			let current = sections[0];
			for (const section of sections) {
				const top = (section as HTMLElement).offsetTop;
				if (window.scrollY >= top - offset) current = section;
			}
			if (current) setActiveHref(`#${current.id}`);
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header className="sticky top-0 z-50 border-b border-black/5 bg-bg/90 backdrop-blur-md">
			<div className="mx-auto flex max-w-310 items-center justify-between gap-2 px-4 py-3.5 sm:gap-6 sm:px-6 sm:py-4 md:px-8">
				<a
					href="#home"
					aria-label="The Laundry Cafe & Co. home"
					className="flex min-w-0 items-center gap-2 sm:gap-2.5"
				>
					<img src={logoIcon} alt="" className="h-8 w-auto shrink-0 sm:h-9" />
					<span className="truncate font-serif-display text-[16px] font-semibold text-navy sm:text-lg">
						The Laundry Cafe <span className="italic text-green">&amp;</span>{' '}
						Co.
					</span>
				</a>

				<nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`relative py-1.5 text-[14.5px] font-medium text-navy-2 transition-colors hover:text-green-dark ${
								activeHref === link.href
									? 'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-green'
									: ''
							}`}
						>
							{link.label}
						</a>
					))}
				</nav>

				<Button
					href="#contact"
					className="hidden! lg:inline-flex!"
					showArrow={false}
				>
					Book Now
				</Button>

				<button
					type="button"
					aria-label={isOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={isOpen}
					aria-controls="mobile-menu"
					onClick={() => setIsOpen((prev) => !prev)}
					className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy transition-colors hover:bg-green-pale lg:hidden"
				>
					{isOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						id="mobile-menu"
						aria-label="Mobile"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: 'easeInOut' }}
						className="overflow-hidden border-t border-black/5 lg:hidden"
					>
						<div className="flex flex-col gap-1 px-4 pb-6 pt-2 sm:px-6">
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="border-b border-black/5 py-3 font-medium text-navy-2"
								>
									{link.label}
								</a>
							))}
							<Button
								href="#contact"
								onClick={() => setIsOpen(false)}
								className="mt-4"
							>
								Book Now
							</Button>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}

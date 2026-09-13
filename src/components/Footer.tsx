import logoIcon from '../assets/logos/logo-icon.png';
import { CONTACT_EMAIL, NAV_LINKS } from '../data';

const allServices = [
	'Laundry & Dry Cleaning',
	'Wash & Fold',
	'Pickup & Delivery',
	'Sofa & Upholstery Cleaning',
	'Residential Cleaning',
	'Office Cleaning',
	'Deep Cleaning',
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-navy pt-16 text-[#D9E2DE]">
			<div className="mx-auto grid max-w-310 grid-cols-1 gap-10 px-6 pb-12 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1.4fr_1fr]">
				<div>
					<a href="#home" className="flex items-center gap-2.5">
						<img src={logoIcon} alt="" className="h-9 w-auto" />
						<span className="font-serif-display text-lg font-semibold text-white">
							The Laundry Cafe &amp; Co.
						</span>
					</a>
					<p className="mt-3.5 max-w-70 text-[13.5px] leading-relaxed text-[#AFC0BA]">
						Premium laundry and professional cleaning services designed to keep
						your clothes and spaces fresh, clean, and beautifully maintained.
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<h5 className="mb-1.5 font-serif-display text-[15px] font-semibold text-white">
						Quick Links
					</h5>
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-[13.5px] text-[#AFC0BA] transition-colors hover:text-white"
						>
							{link.label}
						</a>
					))}
				</div>

				<div className="flex flex-col gap-2.5">
					<h5 className="mb-1.5 font-serif-display text-[15px] font-semibold text-white">
						Services
					</h5>
					{allServices.map((service) => (
						<a
							key={service}
							href="#services"
							className="text-[13.5px] text-[#AFC0BA] transition-colors hover:text-white"
						>
							{service}
						</a>
					))}
				</div>

				<div className="flex flex-col gap-2.5">
					<h5 className="mb-1.5 font-serif-display text-[15px] font-semibold text-white">
						Get In Touch
					</h5>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="text-[13.5px] text-[#AFC0BA] transition-colors hover:text-white"
					>
						{CONTACT_EMAIL}
					</a>
				</div>
			</div>

			<div className="border-t border-white/10 px-6 py-5.5 text-center md:px-8">
				<p className="text-[12.5px] text-[#93A69F]">
					&copy; {year} The Laundry Cafe &amp; Co. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

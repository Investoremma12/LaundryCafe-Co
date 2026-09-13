import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionIntro from './SectionIntro';
import { CONTACT_EMAIL, SERVICE_TYPE_OPTIONS } from '../data';

interface FormState {
	fullName: string;
	email: string;
	phone: string;
	serviceType: string;
	message: string;
}

const initialState: FormState = {
	fullName: '',
	email: '',
	phone: '',
	serviceType: '',
	message: '',
};

export default function Booking() {
	const [form, setForm] = useState<FormState>(initialState);

	function update<K extends keyof FormState>(key: K, value: FormState[K]) {
		setForm((prev) => ({ ...prev, [key]: value }));
	}

	// This form isn't wired to an email service (e.g. EmailJS) or backend yet.
	// On submit we open the visitor's email client with the details pre-filled
	// so nothing is falsely presented as "sent" until a real service is connected.
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const subject = encodeURIComponent(
			`Booking Request: ${form.serviceType || 'General enquiry'}`,
		);
		const body = encodeURIComponent(
			`Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Type: ${form.serviceType}\n\nMessage:\n${form.message}`,
		);
		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
	}

	const inputClasses =
		'w-full rounded-xl border-[1.5px] border-black/10 bg-[#FBFCFA] px-3.5 py-3 text-[14.5px] text-ink transition-colors focus:border-green focus:outline-none';
	const labelClasses = 'mb-1.5 block text-[13.5px] font-semibold text-navy';

	return (
		<section id="contact" className="bg-bg py-24">
			<div className="mx-auto grid max-w-310 grid-cols-1 gap-14 px-6 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8">
				<Reveal>
					<SectionIntro
						eyebrow="Book now"
						title={
							<>
								Ready for a cleaner,
								<br />
								fresher routine?
							</>
						}
						align="left"
					/>
					<p className="mb-6.5 mt-4 max-w-120 text-[17px] text-ink-soft">
						Whether you need your clothes professionally cared for or your home
						and workspace cleaned, we&rsquo;re here to help.
					</p>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="inline-block border-b-[1.5px] border-green pb-0.5 text-base font-semibold text-green-dark"
					>
						{CONTACT_EMAIL}
					</a>
				</Reveal>

				<Reveal delay={0.1}>
					<form
						onSubmit={handleSubmit}
						className="relative overflow-hidden rounded-[26px] border border-white bg-white/85 p-9 shadow-card backdrop-blur-sm sm:p-10"
					>
						<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-pale/80" />
						<div className="mb-4.5">
							<label htmlFor="fullName" className={labelClasses}>
								Full Name
							</label>
							<input
								id="fullName"
								name="fullName"
								type="text"
								required
								autoComplete="name"
								className={inputClasses}
								value={form.fullName}
								onChange={(e) => update('fullName', e.target.value)}
							/>
						</div>

						<div className="mb-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="email" className={labelClasses}>
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									autoComplete="email"
									className={inputClasses}
									value={form.email}
									onChange={(e) => update('email', e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="phone" className={labelClasses}>
									Phone Number
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									required
									autoComplete="tel"
									className={inputClasses}
									value={form.phone}
									onChange={(e) => update('phone', e.target.value)}
								/>
							</div>
						</div>

						<div className="mb-4.5">
							<label htmlFor="serviceType" className={labelClasses}>
								Service Type
							</label>
							<select
								id="serviceType"
								name="serviceType"
								required
								className={inputClasses}
								value={form.serviceType}
								onChange={(e) => update('serviceType', e.target.value)}
							>
								<option value="" disabled>
									Select a service
								</option>
								{Object.entries(SERVICE_TYPE_OPTIONS).map(
									([group, options]) => (
										<optgroup label={group} key={group}>
											{options.map((option) => (
												<option key={option} value={option}>
													{option}
												</option>
											))}
										</optgroup>
									),
								)}
							</select>
						</div>

						<div className="mb-4.5">
							<label htmlFor="message" className={labelClasses}>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								placeholder="Tell us a bit about what you need..."
								className={`${inputClasses} resize-y`}
								value={form.message}
								onChange={(e) => update('message', e.target.value)}
							/>
						</div>

						<button
							type="submit"
							className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_34px_-18px_rgba(73,106,75,0.9)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-[0_22px_40px_-18px_rgba(73,106,75,0.9)]"
						>
							Send Request{' '}
							<ArrowRight
								size={16}
								className="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</button>
						<p className="mt-3.5 text-[12.5px] leading-relaxed text-ink-soft">
							This form isn&rsquo;t connected to an email service yet &mdash;
							submitting will open your email app with the details pre-filled so
							you can send them to us directly.
						</p>
					</form>
				</Reveal>
			</div>
		</section>
	);
}

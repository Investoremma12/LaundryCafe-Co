import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Reveal from './Reveal';
import SectionIntro from './SectionIntro';
import { CONTACT_EMAIL, SERVICE_TYPE_OPTIONS } from '../data';

interface BookingFormValues {
	full_name: string;
	email: string;
	phone: string;
	service_type: string;
	preferred_date: string;
	message: string;
}

export default function Booking() {
	const [submitMessage, setSubmitMessage] = useState('');
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<BookingFormValues>({ mode: 'onBlur' });

	function submitBooking(data: BookingFormValues) {
		const subject = encodeURIComponent(
			`Booking Request: ${data.service_type || 'General enquiry'}`,
		);
		const body = encodeURIComponent(
			`Name: ${data.full_name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService Type: ${data.service_type}\nPreferred Date: ${data.preferred_date}\n\nMessage:\n${data.message}`,
		);

		window.open(
			`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
			'_self',
		);
		reset();
		setSubmitMessage('Your email app is opening with the booking details.');
	}

	const today = new Date().toISOString().split('T')[0];

	const inputClasses =
		'w-full rounded-xl border-[1.5px] border-black/10 bg-[#FBFCFA] px-3.5 py-3 text-[14.5px] text-ink transition-colors focus:border-green focus:outline-none';
	const labelClasses = 'mb-1.5 block text-[13.5px] font-semibold text-navy';
	const errorClasses = 'mt-1.5 text-[12.5px] font-medium text-red-700';

	return (
		<section id="contact" className="bg-bg py-24">
			<div className="mx-auto grid max-w-310 grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
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
						onSubmit={handleSubmit(submitBooking)}
						className="relative overflow-hidden rounded-[26px] border border-white bg-white/85 p-9 shadow-card backdrop-blur-sm sm:p-10"
					>
						<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-pale/80" />
						<div className="mb-4.5">
							<label htmlFor="fullName" className={labelClasses}>
								Full Name
							</label>
							<input
								id="fullName"
								type="text"
								autoComplete="name"
								className={inputClasses}
								{...register('full_name', {
									required: 'Please enter your full name.',
								})}
							/>
							{errors.full_name && (
								<p className={errorClasses}>{errors.full_name.message}</p>
							)}
						</div>

						<div className="mb-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="email" className={labelClasses}>
									Email
								</label>
								<input
									id="email"
									type="email"
									autoComplete="email"
									className={inputClasses}
									{...register('email', {
										required: 'Please enter your email address.',
										pattern: {
											value: /^\S+@\S+\.\S+$/,
											message: 'Please enter a valid email address.',
										},
									})}
								/>
								{errors.email && (
									<p className={errorClasses}>{errors.email.message}</p>
								)}
							</div>
							<div>
								<label htmlFor="phone" className={labelClasses}>
									Phone Number
								</label>
								<input
									id="phone"
									type="tel"
									autoComplete="tel"
									className={inputClasses}
									{...register('phone', {
										required: 'Please enter your phone number.',
									})}
								/>
								{errors.phone && (
									<p className={errorClasses}>{errors.phone.message}</p>
								)}
							</div>
						</div>

						<div className="mb-4.5">
							<label htmlFor="serviceType" className={labelClasses}>
								Service Type
							</label>
							<select
								id="serviceType"
								className={inputClasses}
								{...register('service_type', {
									required: 'Please select a service.',
								})}
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
							{errors.service_type && (
								<p className={errorClasses}>{errors.service_type.message}</p>
							)}
						</div>

						<div className="mb-4.5">
							<label htmlFor="preferredDate" className={labelClasses}>
								Preferred Date
							</label>
							<input
								id="preferredDate"
								type="date"
								min={today}
								className={inputClasses}
								{...register('preferred_date', {
									required: 'Please choose a preferred date.',
								})}
							/>
							{errors.preferred_date && (
								<p className={errorClasses}>{errors.preferred_date.message}</p>
							)}
						</div>

						<div className="mb-4.5">
							<label htmlFor="message" className={labelClasses}>
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								placeholder="Tell us a bit about what you need..."
								className={`${inputClasses} resize-y`}
								{...register('message')}
							/>
						</div>

						{submitMessage && (
							<p
								className="mb-4 rounded-xl bg-green-pale px-4 py-3 text-[13px] font-semibold text-green-dark"
								role="status"
							>
								{submitMessage}
							</p>
						)}
						<button
							type="submit"
							disabled={isSubmitting}
							className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_34px_-18px_rgba(73,106,75,0.9)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-[0_22px_40px_-18px_rgba(73,106,75,0.9)]"
						>
							{isSubmitting ? 'Preparing...' : 'Open Email App'}{' '}
							<ArrowRight
								size={16}
								className="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</button>
						<p className="mt-3.5 text-[12.5px] leading-relaxed text-ink-soft">
							Note: submitting will
							open your email app with the details pre-filled so you can send
							them to us directly.
						</p>
					</form>
				</Reveal>
			</div>
		</section>
	);
}

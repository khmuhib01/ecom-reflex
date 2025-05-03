import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {FaEnvelope, FaPhoneAlt, FaCalendarAlt} from 'react-icons/fa';
import {FaMapMarkerAlt, FaClock} from 'react-icons/fa';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | EcomReflex</title>
				<meta
					name="description"
					content="Get in touch with EcomReflex for eCommerce development, consulting, and support. We're here to help grow your online business."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
							Let's Build Something Amazing Together
						</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Whether you're ready to start your eCommerce project or just have questions, our team is here to help.
							Reach out today and let's discuss how we can grow your business.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#contact-form"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Send Us a Message
							</a>
							<a
								href="tel:+18005551234"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center flex items-center justify-center"
							>
								<i className="fas fa-phone-alt mr-2"></i> Call Us Now
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Contact methods */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">How Would You Like to Connect?</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Choose the most convenient way to get in touch with our eCommerce experts.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{/* Contact Card 1 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md text-center transition duration-300">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaEnvelope className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Email Us</h3>
							<p className="text-gray-600 mb-4">
								Send us your questions or project details and we'll respond within 24 hours.
							</p>
							<a href="mailto:hello@ecomreflex.com" className="text-indigo-600 font-medium hover:text-indigo-800">
								hello@ecomreflex.com
							</a>
						</div>

						{/* Contact Card 2 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md text-center transition duration-300">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaPhoneAlt className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Call Us</h3>
							<p className="text-gray-600 mb-4">
								Speak directly with our team during business hours (9am–5pm PST, Mon–Fri).
							</p>
							<a href="tel:+18005551234" className="text-purple-600 font-medium hover:text-purple-800">
								+1 (800) 555-1234
							</a>
						</div>

						{/* Contact Card 3 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md text-center transition duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaCalendarAlt className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Schedule a Call</h3>
							<p className="text-gray-600 mb-4">Book a free 30-minute consultation with our eCommerce specialists.</p>
							<a href="#contact-form" className="text-blue-600 font-medium hover:text-blue-800">
								Book Consultation
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section id="contact-form" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row">
						{/* Contact Form */}
						<div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<div className="p-8 md:p-12">
									<h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
									<form className="space-y-4">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
													Name*
												</label>
												<input
													type="text"
													id="name"
													name="name"
													required
													className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
											<div>
												<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
													Company
												</label>
												<input
													type="text"
													id="company"
													name="company"
													className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
													Email*
												</label>
												<input
													type="email"
													id="email"
													name="email"
													required
													className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
											<div>
												<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
													Phone
												</label>
												<input
													type="tel"
													id="phone"
													name="phone"
													className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
										</div>

										<div>
											<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
												Subject*
											</label>
											<select
												id="subject"
												name="subject"
												required
												className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
											>
												<option value="">Select a subject</option>
												<option value="new-project">New Project Inquiry</option>
												<option value="existing-project">Existing Project Question</option>
												<option value="partnership">Partnership Opportunity</option>
												<option value="careers">Careers</option>
												<option value="other">Other</option>
											</select>
										</div>

										<div>
											<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
												Message*
											</label>
											<textarea
												id="message"
												name="message"
												rows="4"
												required
												className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
											></textarea>
										</div>

										<div className="flex items-start">
											<div className="flex items-center h-5">
												<input
													id="agree"
													name="agree"
													type="checkbox"
													required
													className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
												/>
											</div>
											<div className="ml-3 text-sm">
												<label htmlFor="agree" className="font-medium text-gray-700">
													I agree to the{' '}
													<a href="#" className="text-indigo-600 hover:text-indigo-500">
														privacy policy
													</a>
												</label>
											</div>
										</div>

										<button
											type="submit"
											className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Send Message
										</button>
									</form>
								</div>
							</div>
						</div>

						{/* Map & Address */}
						<div className="lg:w-1/2 lg:pl-8">
							<div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
								<div className="map-container">
									<iframe
										title="Google Maps location of our office"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.787889045717!2d-122.40384392412903!3d37.78577277197103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d10af6e51%3A0x1122879c36e6f3b3!2s123%20Commerce%20St%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2s!4v1690832484164!5m2!1sen!2s"
										width="100%"
										height="100%"
										style={{border: 0}}
										allowFullScreen=""
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
								<div className="p-8">
									<h3 className="text-xl font-bold mb-4">Our Office</h3>
									<address className="not-italic text-gray-600">
										<p className="flex items-start mb-3">
											<FaMapMarkerAlt className="text-indigo-600 mt-1 mr-3" />
											<span>
												123 Commerce St, Suite 500
												<br />
												San Francisco, CA 94107
											</span>
										</p>
										<p className="flex items-center mb-3">
											<FaPhoneAlt className="text-indigo-600 mr-3" />
											<a href="tel:+18005551234" className="hover:text-indigo-600">
												+1 (800) 555-1234
											</a>
										</p>
										<p className="flex items-center mb-3">
											<FaEnvelope className="text-indigo-600 mr-3" />
											<a href="mailto:hello@ecomreflex.com" className="hover:text-indigo-600">
												hello@ecomreflex.com
											</a>
										</p>
										<p className="flex items-start">
											<FaClock className="text-indigo-600 mt-1 mr-3" />
											<span>
												Monday-Friday: 9am-5pm PST
												<br />
												Weekends: Closed
											</span>
										</p>
									</address>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your eCommerce Business?</h2>
						<p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
							Whether you're just starting out or looking to scale, we have the expertise to help you succeed online.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="get-started.html"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Get Started
							</a>
							<a
								href="tel:+18005551234"
								className=" flex border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								<FaPhoneAlt className="mr-2" />
								Call Now
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

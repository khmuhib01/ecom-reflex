import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {FaExclamation, FaProjectDiagram, FaBoxes, FaBiking, FaChartLine, FaStar} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import {FaStarHalfAlt} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export default function CaseStudiesPage() {
	const caseStudies = [
		{
			id: 1,
			image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tag: 'Food Delivery',
			tagColor: 'bg-purple-100 text-purple-800',
			title: 'BistroExpress: 3x Delivery Volume',
			slug: 'bistroexpress-3x-delivery-volume',
			description: 'How a local restaurant chain expanded their delivery radius while improving efficiency',
			stat: '185% ROI in 6 months',
		},
		{
			id: 2,
			image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tag: 'ePOS/mPOS',
			tagColor: 'bg-yellow-100 text-yellow-800',
			title: 'StyleHub: Omnichannel Retail',
			slug: 'stylehub-omnichannel-retail',
			description: 'Fashion retailer unified online and in-store inventory with mobile checkout',
			stat: '40% faster checkout',
		},
		{
			id: 3,
			image:
				'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tag: 'Virtual Classroom',
			tagColor: 'bg-indigo-100 text-indigo-800',
			title: 'EduNext: Scaling Online Learning',
			slug: 'edunext-scaling-online-learning',
			description: 'Education provider expanded capacity 5x with reliable group video platform',
			stat: '98% uptime',
		},
		{
			id: 4,
			image:
				'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tag: 'Ride Sharing',
			tagColor: 'bg-red-100 text-red-800',
			title: 'CityRide: Local Transportation',
			slug: 'cityride-local-transportation',
			description: 'Municipal ride-sharing program reduced traffic congestion by 18%',
			stat: '15,000+ rides/month',
		},
		{
			id: 5,
			image:
				'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tag: 'Booking System',
			tagColor: 'bg-green-100 text-green-800',
			title: 'SpaRelax: Online Reservations',
			slug: 'sparelax-online-reservations',
			description: 'Wellness center increased bookings by 65% with automated scheduling',
			stat: '75% less no-shows',
		},
		{
			id: 6,
			image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tag: 'eCommerce',
			tagColor: 'bg-blue-100 text-blue-800',
			title: 'CraftMarket: Global Expansion',
			slug: 'craftmarket-global-expansion',
			description: 'Artisan marketplace scaled to 12 new countries with localized payment',
			stat: '3x international sales',
		},
	];

	const testimonials = [
		{
			name: 'Michael Rodriguez',
			role: 'CEO, BistroExpress',
			image: 'https://randomuser.me/api/portraits/men/32.jpg',
			feedback:
				"Implementing NexaSuite's food delivery platform was a game-changer. Our order volume tripled while operational headaches decreased. The integrated kitchen display system alone saved us 15 hours per week in manual coordination.",
			rating: 5,
		},
		{
			name: 'Jennifer Lee',
			role: 'Operations Director, StyleHub',
			image: 'https://randomuser.me/api/portraits/women/68.jpg',
			feedback:
				"The transition to NexaSuite's ePOS system was seamless. Our associates love the mobile checkout capability, and we've seen a 30% increase in average order value since implementing the personalized recommendations feature.",
			rating: 4.5,
		},
		{
			name: 'David Kim',
			role: 'CTO, EduNext',
			image: 'https://randomuser.me/api/portraits/men/75.jpg',
			feedback:
				"After struggling with unreliable video platforms, NexaSuite's virtual classroom solution provided the stability we needed. The breakout room functionality and interactive whiteboard have transformed our online teaching experience.",
			rating: 5,
		},
	];

	const renderStars = (rating) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		return (
			<>
				{Array(fullStars)
					.fill()
					.map((_, i) => (
						<FaStar key={i} className="text-yellow-300" />
					))}
				{hasHalfStar && <FaStarHalfAlt className="text-yellow-300" />}
			</>
		);
	};

	return (
		<>
			<Head>
				<title>Case Studies | NexaSuite - Real-World Business Transformations</title>
				<meta
					name="description"
					content="Explore how NexaSuite solutions helped businesses achieve remarkable results through our case studies and success stories."
				/>
			</Head>

			{/* Hero Section */}
			<section class="hero-gradient text-white">
				<div class="container mx-auto px-4 py-20 md:py-28">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">Real-World Success Stories</h1>
						<p class="text-xl text-indigo-100 mb-8">
							Discover how businesses transformed their operations with NexaSuite solutions
						</p>
						<div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<Link
								href="/contact"
								class="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Get Free Consultation
							</Link>
							<a
								href="#all-cases"
								class="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								Browse All Cases
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Case Study */}
			{/* <section id="featured-case" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="solution-tag bg-purple-100 text-purple-800 mb-4 inline-block px-3 py-1 rounded-full text-sm font-semibold">
							Food Delivery + ePOS
						</span>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">UrbanEats: Scaling a Cloud Kitchen Operation</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							How a delivery-only restaurant increased revenue by 220% while reducing operational costs
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
						<div className="lg:col-span-2">
							<div className="bg-gray-50 rounded-xl p-8 mb-12">
								<h3 className="text-2xl font-bold mb-6">The Challenge</h3>
								<p className="text-gray-600 mb-6">
									UrbanEats, a fast-growing cloud kitchen in Chicago, was struggling to manage their rapid expansion.
									Operating three virtual brands from a single kitchen, they faced:
								</p>
								<ul className="space-y-4 mb-6">
									{[
										{
											title: 'Disjointed Systems',
											desc: 'Separate platforms for orders, inventory, and POS leading to data inconsistencies',
										},
										{
											title: 'Delivery Coordination',
											desc: 'Difficulty managing multiple delivery providers and driver assignments',
										},
										{
											title: 'Inventory Waste',
											desc: '30% ingredient waste due to poor cross-brand utilization tracking',
										},
									].map((item, index) => (
										<li className="flex items-start" key={index}>
											<div className="bg-red-100 rounded-full p-2 mr-4">
												<FaExclamation className="text-red-600" />
											</div>
											<div>
												<h4 className="font-bold mb-1">{item.title}</h4>
												<p className="text-gray-600">{item.desc}</p>
											</div>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-gray-50 rounded-xl p-8 mb-12">
								<h3 className="text-2xl font-bold mb-6">The Solution</h3>
								<p className="text-gray-600 mb-6">
									We implemented an integrated NexaSuite solution combining our Food Delivery Platform with the mPOS
									system and Cloud Kitchen Management tools:
								</p>

								<div className="mb-8">
									<h4 className="font-bold text-lg mb-4">Implementation Timeline</h4>
									<div className="space-y-8">
										{[
											['Week 1-2: Discovery & Planning', 'Workflow analysis and integration requirements'],
											['Week 3-4: System Setup', 'Menu migration and staff training'],
											['Week 5-6: Delivery Integration', 'Connected 3 delivery providers to unified dashboard'],
											['Week 7-8: Go Live & Optimization', 'Full transition with performance monitoring'],
										].map(([title, desc], index) => (
											<div key={index}>
												<h5 className="font-bold mb-2">{title}</h5>
												<p className="text-gray-600">{desc}</p>
											</div>
										))}
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									{[
										[FaProjectDiagram, 'Unified Operations', 'Single platform for all three virtual brands'],
										[FaBoxes, 'Smart Inventory', 'Cross-brand ingredient tracking'],
										[FaBiking, 'Delivery Optimization', 'Automated driver assignment'],
										[FaChartLine, 'Real-time Analytics', 'Performance tracking by brand'],
									].map(([Icon, title, desc], index) => (
										<div className="bg-white p-6 rounded-lg border border-gray-200" key={index}>
											<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
												<Icon className="text-purple-600 text-xl" />
											</div>
											<h4 className="font-bold mb-2">{title}</h4>
											<p className="text-gray-600">{desc}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="space-y-8">
							<div className="bg-indigo-600 text-white rounded-xl p-8">
								<h3 className="text-2xl font-bold mb-6">The Results</h3>
								<div className="space-y-6">
									{[
										['220%', 'Increase in monthly revenue'],
										['45%', 'Reduction in ingredient waste'],
										['3.8★ → 4.7★', 'Average customer rating improvement'],
										['12 min', 'Average delivery time (down from 22 min)'],
									].map(([stat, desc], index) => (
										<div className="bg-indigo-700 p-6 rounded-lg text-center" key={index}>
											<div className="text-4xl font-bold mb-2">{stat}</div>
											<p>{desc}</p>
										</div>
									))}
								</div>
							</div>

							<div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
								<div className="flex items-center mb-4">
									<img
										src="https://randomuser.me/api/portraits/women/45.jpg"
										alt="Sarah Chen"
										className="w-16 h-16 rounded-full mr-4"
									/>
									<div>
										<h4 className="font-bold">Sarah Chen</h4>
										<p className="text-gray-600">COO, UrbanEats</p>
									</div>
								</div>
								<div className="text-gray-700 italic">
									"NexaSuite transformed our operations completely. What used to take hours of manual reconciliation now
									happens automatically. We've been able to expand to two additional locations with the same management
									overhead as our original single kitchen."
								</div>
								<div className="mt-4 flex text-yellow-400">
									{[...Array(5)].map((_, i) => (
										<FaStar key={i} />
									))}
								</div>
							</div>

							<div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
								<h4 className="font-bold mb-4">Technologies Used</h4>
								<div className="flex flex-wrap gap-3">
									{[
										['Food Delivery Platform', 'bg-purple-100 text-purple-800'],
										['mPOS System', 'bg-blue-100 text-blue-800'],
										['Cloud Kitchen', 'bg-pink-100 text-pink-800'],
										['API Integrations', 'bg-teal-100 text-teal-800'],
									].map(([tech, color], index) => (
										<span key={index} className={`solution-tag ${color} px-3 py-1 rounded-full text-sm font-semibold`}>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* More Success Stories */}
			<section id="all-cases" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Explore how businesses across industries are achieving remarkable results
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{caseStudies.map((caseStudy, index) => (
							<div
								key={index}
								className="case-study-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
							>
								<img src={caseStudy.image} alt={caseStudy.tag} className="w-full h-48 object-cover" />
								<div className="p-6">
									<span
										className={`solution-tag inline-block text-sm font-semibold mb-3 px-2 py-1 rounded ${caseStudy.tagColor}`}
									>
										{caseStudy.tag}
									</span>
									<h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
									<p className="text-gray-600 mb-4">{caseStudy.description}</p>
									<div className="flex justify-between items-center">
										<div className="text-sm text-gray-500 flex items-center">
											<FaChartLine className="mr-1" />
											{caseStudy.stat}
										</div>
										<Link
											href="/case-studies/case-study-detail"
											className="text-indigo-600 font-medium hover:text-indigo-800 transition"
										>
											Read Case →
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Don't remove  */}
					{/* <div className="text-center mt-12">
						<a
							href="#"
							className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition"
						>
							View all case studies <FaArrowRight className="ml-2" />
						</a>
					</div> */}
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
						<p className="text-xl text-indigo-100 max-w-3xl mx-auto">
							Don't just take our word for it - hear from businesses we've helped transform
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{testimonials.map((t, index) => (
							<div key={index} className="testimonial-card bg-indigo-700 p-8 rounded-xl">
								<div className="flex items-center mb-6">
									<img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
									<div>
										<h4 className="font-bold">{t.name}</h4>
										<p className="text-indigo-200">{t.role}</p>
									</div>
								</div>
								<div className="text-gray-100 mb-6">"{t.feedback}"</div>
								<div className="flex">{renderStars(t.rating)}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
						<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Let's discuss how NexaSuite can help your business achieve remarkable results
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<Link
								href="/get-started"
								className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition text-center"
							>
								Get Started
							</Link>
							<a
								href="tel:+18005559876"
								className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition text-center flex items-center justify-center"
							>
								<FaPhoneAlt className="mr-2" />
								Speak With Our Team
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

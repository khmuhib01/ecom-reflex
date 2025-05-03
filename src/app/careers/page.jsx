import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {FaChartLine, FaHeart, FaHome} from 'react-icons/fa';

export default function CareerPage() {
	const steps = [
		{
			number: 1,
			title: 'Application',
			description: 'Submit your resume and portfolio (if applicable)',
		},
		{
			number: 2,
			title: 'Screening',
			description: '30-minute introductory call with HR',
		},
		{
			number: 3,
			title: 'Skills Assessment',
			description: 'Practical evaluation relevant to the role',
		},
		{
			number: 4,
			title: 'Team Interviews',
			description: 'Meet with potential colleagues and managers',
		},
	];
	return (
		<>
			<Head>
				<title>Careers | EcomReflex - Grow Your Career in eCommerce</title>
				<meta
					name="description"
					content="Join EcomReflex and work with leading eCommerce brands. We offer competitive benefits, professional growth, and exciting challenges in digital commerce."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Build Your Career in eCommerce</h1>
						<p className="text-xl text-blue-100 mb-8">Join a team that's shaping the future of digital commerce.</p>
						<a
							href="#open-positions"
							className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
						>
							View Open Positions <FaArrowRight className="ml-2" />
						</a>
					</div>
				</div>
			</section>

			{/* why work with us Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join EcomReflex?</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We're building more than a company - we're building a community of innovators.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Perk 1 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaChartLine className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-center">Growth Opportunities</h3>
							<p className="text-gray-600 text-center">
								Annual $3,000 professional development budget and mentorship programs.
							</p>
						</div>

						{/* Perk 2 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaHeart className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-center">Health & Wellness</h3>
							<p className="text-gray-600 text-center">Comprehensive medical, dental, and mental health benefits.</p>
						</div>

						{/* Perk 3 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaHome className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-center">Flexible Work</h3>
							<p className="text-gray-600 text-center">Hybrid remote/office options with flexible hours.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Culture */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						{/* Text content */}
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
							<p className="text-xl text-gray-600 mb-6">
								At EcomReflex, we believe great work happens when talented people feel empowered, supported, and
								inspired.
							</p>
							<ul className="space-y-4">
								<li class="benefit-item">Collaborative environment with flat hierarchies</li>
								<li class="benefit-item">Quarterly innovation hackathons</li>
								<li class="benefit-item">Annual company retreats</li>
								<li class="benefit-item">Diversity and inclusion initiatives</li>
								<li class="benefit-item">Impactful projects with leading brands</li>
							</ul>
						</div>

						{/* Image */}
						<div className="bg-gray-100 rounded-xl overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
								alt="Team working together"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section id="open-positions" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Help shape the future of eCommerce. Browse our current opportunities.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
						{/* Job 1 */}
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition duration-300">
							<h3 className="text-2xl font-bold mb-2">Senior Frontend Developer</h3>
							<div className="flex flex-wrap gap-4 mb-4">
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote</span>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full-time</span>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Engineering</span>
							</div>
							<p className="text-gray-600 mb-6">
								Lead the development of cutting-edge eCommerce interfaces using React, Vue, and modern CSS frameworks.
							</p>
							<div className="flex flex-wrap justify-between items-center">
								<Link
									href="/careers/senior-frontend-developer"
									className="text-blue-600 font-medium hover:text-blue-800"
								>
									View Details →
								</Link>
								<span className="text-gray-500">Posted 2 weeks ago</span>
							</div>
						</div>

						{/* Job 2 */}
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition duration-300">
							<h3 className="text-2xl font-bold mb-2">eCommerce Strategist</h3>
							<div className="flex flex-wrap gap-4 mb-4">
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Hybrid</span>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full-time</span>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Growth</span>
							</div>
							<p className="text-gray-600 mb-6">
								Develop data-driven strategies to optimize conversion rates and customer journeys for enterprise
								clients.
							</p>
							<div className="flex flex-wrap justify-between items-center">
								<Link href="/careers/ecommerce-strategist" className="text-blue-600 font-medium hover:text-blue-800">
									View Details →
								</Link>
								<span className="text-gray-500">Posted 1 week ago</span>
							</div>
						</div>

						{/* Job 3 */}
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition duration-300">
							<h3 className="text-2xl font-bold mb-2">UX/UI Designer</h3>
							<div className="flex flex-wrap gap-4 mb-4">
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote</span>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full-time</span>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Design</span>
							</div>
							<p className="text-gray-600 mb-6">
								Create intuitive, conversion-focused interfaces for Shopify Plus and custom eCommerce platforms.
							</p>
							<div className="flex flex-wrap justify-between items-center">
								<Link href="/careers/ux-ui-designer" className="text-blue-600 font-medium hover:text-blue-800">
									View Details →
								</Link>
								<span className="text-gray-500">Posted 3 days ago</span>
							</div>
						</div>
					</div>

					<div className="mt-12 text-center">
						<p className="text-lg text-gray-600 mb-6">
							Don't see your perfect role? We're always looking for talented people.
						</p>
						<Link
							href="/contact"
							className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
						>
							Send Us Your Resume
						</Link>
					</div>
				</div>
			</section>

			{/* Hiring Process */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">Transparent steps to join our team.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{steps.map((step) => (
							<div key={step.number} className="bg-white p-6 rounded-xl shadow-md text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
									<span className="text-blue-600 font-bold text-xl">{step.number}</span>
								</div>
								<h3 className="text-xl font-bold mb-3">{step.title}</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-blue-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
							We're excited to hear from you. Apply today to start your journey with EcomReflex.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#open-positions"
								className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								View Openings
							</a>
							<a
								href="/contact"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition text-center"
							>
								Contact HR
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

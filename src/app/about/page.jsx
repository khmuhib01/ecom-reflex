import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import {
	FaBullseye,
	FaEye,
	FaRocket,
	FaLightbulb,
	FaHandshake,
	FaUsers,
	FaChartLine,
	FaLinkedinIn,
	FaTwitter,
	FaBriefcase,
} from 'react-icons/fa';

export default function AboutPage() {
	const teamMembers = [
		{
			name: 'Sarah Chen',
			title: 'Co-Founder & CEO',
			image: 'https://randomuser.me/api/portraits/women/45.jpg',
			description: 'Former product lead at TechSolutions with 15+ years in software development.',
		},
		{
			name: 'Michael Rodriguez',
			title: 'Co-Founder & CTO',
			image: 'https://randomuser.me/api/portraits/men/32.jpg',
			description: 'Infrastructure architect with expertise in scalable cloud systems.',
		},
		{
			name: 'Jennifer Lee',
			title: 'Chief Product Officer',
			image: 'https://randomuser.me/api/portraits/women/68.jpg',
			description: 'Product strategist with a focus on user-centered design.',
		},
		{
			name: 'David Kim',
			title: 'VP of Engineering',
			image: 'https://randomuser.me/api/portraits/men/75.jpg',
			description: 'Leads our global engineering team with a focus on quality and innovation.',
		},
	];

	const stats = [
		{
			value: '5,000+',
			title: 'Businesses Served',
			description: 'Across 12 countries worldwide',
		},
		{
			value: '200+',
			title: 'Team Members',
			description: 'Passionate professionals across 3 continents',
		},
		{
			value: '99.9%',
			title: 'Uptime',
			description: 'Industry-leading platform reliability',
		},
		{
			value: '24/7',
			title: 'Support',
			description: 'Customer success is our priority',
		},
	];
	return (
		<>
			<Head>
				<title>About NexaSuite | Our Story, Mission & Team</title>
				<meta
					name="description"
					content="Discover NexaSuite's journey, mission, and the team behind our innovative digital solutions for businesses worldwide."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
							Building the Future of Business Solutions
						</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Empowering businesses worldwide with innovative digital solutions since 2015
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#story"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Our Story
							</a>
							<a
								href="#team"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								Meet the Team
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section id="story" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Our <span className="stat-highlight">Journey</span>
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								From startup to industry leader - how we're transforming business operations
							</p>
						</div>

						<div className="space-y-12">
							<div className="timeline-item">
								<h3 className="text-2xl font-bold mb-2">2015: The Beginning</h3>
								<p className="text-gray-600">
									Founded in San Francisco by tech entrepreneurs Sarah Chen and Michael Rodriguez, NexaSuite started as
									a small team with a big vision to simplify business operations through integrated software solutions.
								</p>
							</div>
							<div className="timeline-item">
								<h3 className="text-2xl font-bold mb-2">2017: First Major Product Launch</h3>
								<p className="text-gray-600">
									Released our flagship ePOS system, quickly adopted by retail and hospitality businesses for its
									intuitive interface and robust features.
								</p>
							</div>
							<div className="timeline-item">
								<h3 className="text-2xl font-bold mb-2">2019: Expansion &amp; Funding</h3>
								<p className="text-gray-600">
									Secured $15M Series A funding to expand our product suite and team. Opened offices in London and
									Singapore to serve global markets.
								</p>
							</div>
							<div className="timeline-item">
								<h3 className="text-2xl font-bold mb-2">2021: Platform Unification</h3>
								<p className="text-gray-600">
									Launched our unified platform connecting all business solutions with shared data and workflows,
									revolutionizing how companies manage operations.
								</p>
							</div>
							<div className="timeline-item">
								<h3 className="text-2xl font-bold mb-2">Today: Industry Leader</h3>
								<p className="text-gray-600">
									Serving 5,000+ businesses across 12 countries with a comprehensive suite of products and a team of
									200+ passionate professionals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Mission & Values */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<div className="bg-white p-8 rounded-xl shadow-md text-center">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaBullseye className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Our Mission</h3>
							<p className="text-gray-600">
								To empower businesses of all sizes with intuitive, integrated solutions that simplify operations and
								drive growth.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-md text-center">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaEye className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Our Vision</h3>
							<p className="text-gray-600">
								A world where technology seamlessly connects every aspect of business operations, eliminating
								complexity.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-md text-center">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaRocket className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Our Promise</h3>
							<p className="text-gray-600">
								Continuous innovation, exceptional support, and solutions that evolve with your business needs.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
						<div className="bg-indigo-600 text-white p-8 rounded-xl">
							<h3 className="text-2xl font-bold mb-4">Innovation</h3>
							<p className="text-indigo-100 mb-4">
								We challenge the status quo, constantly seeking better ways to solve business problems through
								technology.
							</p>
							<div className="flex items-center">
								<div className="bg-indigo-700 rounded-full p-3 mr-4">
									<FaLightbulb />
								</div>
								<p className="text-sm">"The only way to discover the limits of the possible is to go beyond them."</p>
							</div>
						</div>

						<div className="bg-indigo-600 text-white p-8 rounded-xl">
							<h3 className="text-2xl font-bold mb-4">Integrity</h3>
							<p className="text-indigo-100 mb-4">
								We build trust through transparency, honesty, and doing what's right for our customers and team.
							</p>
							<div className="flex items-center">
								<div className="bg-indigo-700 rounded-full p-3 mr-4">
									<FaHandshake />
								</div>
								<p className="text-sm">
									"Trust is the glue of life. It's the foundational principle that holds all relationships."
								</p>
							</div>
						</div>

						<div className="bg-indigo-600 text-white p-8 rounded-xl">
							<h3 className="text-2xl font-bold mb-4">Collaboration</h3>
							<p className="text-indigo-100 mb-4">
								We believe the best solutions come from diverse perspectives working together toward common goals.
							</p>
							<div className="flex items-center">
								<div className="bg-indigo-700 rounded-full p-3 mr-4">
									<FaUsers />
								</div>
								<p className="text-sm">"Alone we can do so little; together we can do so much."</p>
							</div>
						</div>

						<div className="bg-indigo-600 text-white p-8 rounded-xl">
							<h3 className="text-2xl font-bold mb-4">Impact</h3>
							<p className="text-indigo-100 mb-4">
								We measure success by the positive difference we make in our customers' businesses and lives.
							</p>
							<div className="flex items-center">
								<div className="bg-indigo-700 rounded-full p-3 mr-4">
									<FaChartLine />
								</div>
								<p className="text-sm">
									"The meaning of life is to find your gift. The purpose of life is to give it away."
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<section id="team" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate team driving NexaSuite forward</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-xl shadow-md transition duration-300 border border-gray-100 text-center"
							>
								<img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
								<h3 className="text-xl font-bold mb-1">{member.name}</h3>
								<p className="text-indigo-600 mb-4">{member.title}</p>
								<p className="text-gray-600 text-sm mb-4">{member.description}</p>
								<div className="flex justify-center space-x-3">
									<a href="#" className="text-gray-400 hover:text-indigo-600">
										<FaLinkedinIn />
									</a>
									<a href="#" className="text-gray-400 hover:text-indigo-600">
										<FaTwitter />
									</a>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-16">
						<h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
						<p className="text-gray-600 max-w-2xl mx-auto mb-8">
							We're always looking for talented individuals who share our passion for building transformative business
							solutions.
						</p>
						<Link
							href="/careers"
							className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition inline-flex items-center"
						>
							<FaBriefcase className="mr-2" />
							View Open Positions
						</Link>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
						<p className="text-xl text-indigo-100">Some milestones we're proud of</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-5xl font-bold mb-2">{stat.value}</div>
								<h3 className="text-xl font-bold mb-3">{stat.title}</h3>
								<p className="text-indigo-100">{stat.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
						<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Discover how NexaSuite&apos;s solutions can streamline your operations and drive growth.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="demo.html"
								className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition text-center"
							>
								Request Demo
							</a>
							<a
								href="contact.html"
								className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition text-center"
							>
								Contact Our Team
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

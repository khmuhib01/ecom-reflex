import Head from 'next/head';
import React from 'react';
import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';
import {FaCode, FaSearchDollar, FaPaintBrush, FaCheck} from 'react-icons/fa';
import {FaLightbulb, FaHandshake, FaChartLine} from 'react-icons/fa';
import {AiOutlineMail, AiOutlineEye} from 'react-icons/ai';

export default function TeamPage() {
	return (
		<>
			<Head>
				<title>Meet Our Team | EcomReflex - eCommerce Experts</title>
				<meta
					name="description"
					content="Get to know the talented team behind EcomReflex. Our eCommerce specialists combine technical expertise with creative problem-solving to grow your business."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Meet the EcomReflex Team</h1>
						<p className="text-xl text-purple-100 mb-8">Passionate eCommerce experts dedicated to your success.</p>
					</div>
				</div>
			</section>

			{/* Leadership Team */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">The visionaries guiding our strategic direction.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Team Member 1 */}
						<div className="team-card bg-gray-50 p-6 rounded-xl shadow-md transition duration-300">
							<div className="w-full h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
									alt="Alex Johnson"
									className="w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
							<p className="text-purple-600 font-medium mb-3">CEO & Founder</p>
							<p className="text-gray-600 mb-4">
								15+ years building eCommerce businesses. Former Shopify Plus consultant.
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-purple-600">
									<FaLinkedin />
								</a>
								<a href="#" className="text-gray-400 hover:text-purple-600">
									<FaTwitter />
								</a>
							</div>
						</div>

						{/* Team Member 2 */}
						<div className="team-card bg-gray-50 p-6 rounded-xl shadow-md transition duration-300">
							<div className="w-full h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
									alt="Sarah Chen"
									className="w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
							<p className="text-purple-600 font-medium mb-3">Director of Operations</p>
							<p className="text-gray-600 mb-4">
								eCommerce process optimization specialist. Lean Six Sigma Black Belt.
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-purple-600">
									<FaLinkedin />
								</a>
								<a href="#" className="text-gray-400 hover:text-purple-600">
									<FaTwitter />
								</a>
							</div>
						</div>

						{/* Team Member 3 */}
						<div className="team-card bg-gray-50 p-6 rounded-xl shadow-md transition duration-300">
							<div className="w-full h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
									alt="Michael Rodriguez"
									className="w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
							<p className="text-purple-600 font-medium mb-3">CTO</p>
							<p className="text-gray-600 mb-4">
								Full-stack developer with 12+ years in eCommerce platform architecture.
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-purple-600">
									<FaLinkedin />
								</a>
								<a href="#" className="text-gray-400 hover:text-purple-600">
									<FaGithub />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Expert Teams */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Teams</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Cross-functional specialists working together on your projects.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Team 1 - Development */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaCode className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-4 text-center">Development</h3>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>Frontend Specialists</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>Backend Engineers</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>DevOps Experts</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>QA Testers</span>
								</li>
							</ul>
						</div>

						{/* Team 2 - Growth */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaSearchDollar className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-4 text-center">Growth</h3>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>SEO Strategists</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>PPC Specialists</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>Content Marketers</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>CRO Experts</span>
								</li>
							</ul>
						</div>

						{/* Team 3 - Design */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaPaintBrush className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-4 text-center">Design</h3>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>UX/UI Designers</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>Graphic Artists</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>Brand Strategists</span>
								</li>
								<li className="flex items-center justify-center">
									<FaCheck className="text-purple-500 mr-2" />
									<span>Motion Designers</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-20 bg-purple-600 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
						<p className="text-xl text-purple-100 max-w-3xl mx-auto">The principles that guide everything we do.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Value 1 - Innovation */}
						<div className="value-card bg-purple-700 p-8 rounded-xl transition duration-300">
							<div className="w-16 h-16 bg-purple-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaLightbulb className="text-white text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-center">Innovation</h3>
							<p className="text-purple-100 text-center">
								We challenge conventions to find better solutions for your eCommerce business.
							</p>
						</div>

						{/* Value 2 - Partnership */}
						<div className="value-card bg-purple-700 p-8 rounded-xl transition duration-300">
							<div className="w-16 h-16 bg-purple-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaHandshake className="text-white text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-center">Partnership</h3>
							<p className="text-purple-100 text-center">
								Your success is our success. We work as an extension of your team.
							</p>
						</div>

						{/* Value 3 - Results-Driven */}
						<div className="value-card bg-purple-700 p-8 rounded-xl transition duration-300">
							<div className="w-16 h-16 bg-purple-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
								<FaChartLine className="text-white text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-center">Results-Driven</h3>
							<p className="text-purple-100 text-center">
								We focus on measurable outcomes that impact your bottom line.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
						<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Let's discuss how we can help grow your eCommerce business.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="/contact"
								className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition text-center flex items-center justify-center"
							>
								<AiOutlineMail className="mr-2" /> Contact Us
							</a>
							<a
								href="/portfolio"
								className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-600 hover:text-white transition text-center flex items-center justify-center"
							>
								<AiOutlineEye className="mr-2" /> View Our Work
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

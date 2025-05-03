'use client';

import Head from 'next/head';
import Image from 'next/image';
import React, {useState} from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import {FaShopify, FaMagento, FaWordpress, FaStore} from 'react-icons/fa';
import {FaUserCog, FaSyncAlt, FaSearchDollar, FaUsers, FaRobot, FaMobileAlt} from 'react-icons/fa';
import {
	FaReact,
	FaVuejs,
	FaJsSquare,
	FaSass,
	FaNodeJs,
	FaServer,
	FaPython,
	FaDatabase,
	FaBolt,
	FaMemory,
	FaSearch,
	FaDocker,
	FaAws,
	FaCodeBranch,
	FaShieldAlt,
} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export default function CustomDevelopmentPage() {
	const [activeFAQ, setActiveFAQ] = useState(null);

	const toggleFAQ = (index) => {
		setActiveFAQ(activeFAQ === index ? null : index);
	};
	return (
		<>
			<Head>
				<title>Custom Development</title>
				<meta name="description" content="Custom Development" />
			</Head>

			{/* Hero Section */}
			<section class="hero-gradient text-white">
				<div class="container mx-auto px-4 py-20 md:py-28">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">Custom eCommerce Development</h1>
						<p class="text-xl text-purple-100 mb-8">
							Tailored solutions built for your unique business needs. We create scalable, high-performing online stores
							that drive conversions and growth.
						</p>
						<div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#development-process"
								class="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Our Process
							</a>
							<a
								href="#custom-features"
								class="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-purple-600 transition text-center"
							>
								Custom Features
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Intro Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond Templates: eCommerce Built for You</h2>
								<p className="text-xl text-gray-600 mb-6">
									Off-the-shelf solutions often come with limitations. Our custom development creates an online store
									that perfectly matches your brand, workflow, and customer experience goals.
								</p>
								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-purple-600 mr-4">
											<FaCheckCircle /> {/* React Icon */}
										</div>
										<div>
											<h3 className="text-lg font-bold">100% Custom Design</h3>
											<p className="text-gray-600">
												No cookie-cutter templates - just a store that reflects your unique brand identity.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-purple-600 mr-4">
											<FaCheckCircle /> {/* React Icon */}
										</div>
										<div>
											<h3 className="text-lg font-bold">Tailored Functionality</h3>
											<p className="text-gray-600">
												Features built specifically for your business model and customer needs.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-purple-600 mr-4">
											<FaCheckCircle /> {/* React Icon */}
										</div>
										<div>
											<h3 className="text-lg font-bold">Future-Proof Architecture</h3>
											<p className="text-gray-600">
												Scalable solutions that grow with your business and adapt to new technologies.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 p-6 rounded-xl shadow-lg">
								<Image
									src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
									alt="Custom eCommerce Development"
									className="rounded-lg"
									width={1170} // You can specify width and height for better performance
									height={780} // Adjust this based on your image aspect ratio
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Platforms Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Platforms We Customize</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We work with all major eCommerce platforms to build custom solutions.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{/* Shopify */}
						<div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
							<FaShopify className="text-green-600 text-4xl mb-6" />
							<h3 className="text-xl font-bold mb-3">Shopify</h3>
							<p className="text-gray-600 text-center">
								Custom themes, apps, and headless solutions for Shopify Plus stores.
							</p>
						</div>

						{/* Magento */}
						<div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
							<FaMagento className="text-red-600 text-4xl mb-6" />
							<h3 className="text-xl font-bold mb-3">Magento</h3>
							<p className="text-gray-600 text-center">Custom modules, extensions, and optimizations for Magento 2.</p>
						</div>

						{/* WooCommerce */}
						<div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
							<FaWordpress className="text-blue-600 text-4xl mb-6" />
							<h3 className="text-xl font-bold mb-3">WooCommerce</h3>
							<p className="text-gray-600 text-center">Custom WordPress themes and plugins for WooCommerce stores.</p>
						</div>

						{/* BigCommerce */}
						<div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
							<FaStore className="text-blue-700 text-4xl mb-6" />
							<h3 className="text-xl font-bold mb-3">BigCommerce</h3>
							<p className="text-gray-600 text-center">Custom Stencil themes and apps for BigCommerce stores.</p>
						</div>
					</div>

					<div className="mt-12 text-center">
						<p className="text-lg text-gray-600 mb-6">
							Don't see your platform? We also build completely custom solutions from scratch.
						</p>
						<a
							href="contact.html"
							className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition"
						>
							Discuss Your Project
						</a>
					</div>
				</div>
			</section>

			{/* Custom Features */}
			<section id="custom-features" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Features We Build</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Solutions tailored to your specific business requirements.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Feature 1 */}
						<div className="feature-card bg-gray-50 p-8 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl">
							<div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
								<FaUserCog className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Custom Admin Dashboards</h3>
							<p className="text-gray-600 mb-4">
								Streamlined back-office interfaces tailored to your workflow with custom reporting and inventory
								management.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Workflow Automation</span>
								<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Custom Reporting</span>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="feature-card bg-gray-50 p-8 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaSyncAlt className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">ERP/CRM Integrations</h3>
							<p className="text-gray-600 mb-4">
								Seamless connections between your eCommerce store and business systems like SAP, NetSuite, or
								Salesforce.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Real-time Sync</span>
								<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Custom APIs</span>
							</div>
						</div>

						{/* Feature 3 */}
						<div className="feature-card bg-gray-50 p-8 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl">
							<div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
								<FaSearchDollar className="text-green-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Advanced Product Configurators</h3>
							<p className="text-gray-600 mb-4">
								Interactive tools that let customers customize products with real-time pricing and visuals.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">3D Visualization</span>
								<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Dynamic Pricing</span>
							</div>
						</div>

						{/* Feature 4 */}
						<div className="feature-card bg-gray-50 p-8 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl">
							<div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
								<FaUsers className="text-yellow-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">B2B Portal Features</h3>
							<p className="text-gray-600 mb-4">
								Custom quoting tools, tiered pricing, purchase approvals, and account-specific catalogs.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Account Management</span>
								<span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Bulk Ordering</span>
							</div>
						</div>

						{/* Feature 5 */}
						<div className="feature-card bg-gray-50 p-8 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl">
							<div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
								<FaRobot className="text-red-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">AI-Powered Features</h3>
							<p className="text-gray-600 mb-4">
								Personalized recommendations, intelligent search, and chatbots tailored to your product catalog.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Machine Learning</span>
								<span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Natural Language</span>
							</div>
						</div>

						{/* Feature 6 */}
						<div className="feature-card bg-gray-50 p-8 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl">
							<div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
								<FaMobileAlt className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Progressive Web Apps</h3>
							<p className="text-gray-600 mb-4">
								App-like experiences with offline functionality, push notifications, and home screen installation.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Offline Access</span>
								<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Push Notifications</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Development Process */}
			<section id="development-process" class="py-20 bg-gray-50">
				<div class="container mx-auto px-4">
					<div class="text-center mb-16">
						<h2 class="text-3xl md:text-4xl font-bold mb-4">Our Custom Development Process</h2>
						<p class="text-xl text-gray-600 max-w-3xl mx-auto">
							A structured approach to building your perfect eCommerce solution.
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
						<div class="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span class="text-purple-600 font-bold text-xl">1</span>
							</div>
							<h3 class="text-xl font-bold mb-3">Discovery</h3>
							<p class="text-gray-600">Deep dive into your business goals, customers, and technical requirements.</p>
						</div>

						<div class="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span class="text-purple-600 font-bold text-xl">2</span>
							</div>
							<h3 class="text-xl font-bold mb-3">Strategy</h3>
							<p class="text-gray-600">Architecture planning, technology selection, and roadmap creation.</p>
						</div>

						<div class="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span class="text-purple-600 font-bold text-xl">3</span>
							</div>
							<h3 class="text-xl font-bold mb-3">Design</h3>
							<p class="text-gray-600">UX/UI design tailored to your brand and customer journey.</p>
						</div>

						<div class="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span class="text-purple-600 font-bold text-xl">4</span>
							</div>
							<h3 class="text-xl font-bold mb-3">Development</h3>
							<p class="text-gray-600">Agile development with regular demos and feedback cycles.</p>
						</div>

						<div class="process-step bg-white p-8 rounded-xl shadow-md text-center">
							<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span class="text-purple-600 font-bold text-xl">5</span>
							</div>
							<h3 class="text-xl font-bold mb-3">Launch & Optimize</h3>
							<p class="text-gray-600">Deployment, testing, and continuous improvement.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Technology Stack */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We use modern technologies to build fast, secure, and scalable solutions.
						</p>
					</div>

					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{/* Frontend */}
							<div className="bg-gray-50 p-6 rounded-xl">
								<h3 className="text-lg font-bold mb-4 text-center">Frontend</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<FaReact className="text-blue-500 mr-2" />
										<span>React.js</span>
									</li>
									<li className="flex items-center">
										<FaVuejs className="text-green-500 mr-2" />
										<span>Vue.js</span>
									</li>
									<li className="flex items-center">
										<FaJsSquare className="text-yellow-500 mr-2" />
										<span>Next.js/Nuxt.js</span>
									</li>
									<li className="flex items-center">
										<FaSass className="text-pink-500 mr-2" />
										<span>Sass/Tailwind</span>
									</li>
								</ul>
							</div>

							{/* Backend */}
							<div className="bg-gray-50 p-6 rounded-xl">
								<h3 className="text-lg font-bold mb-4 text-center">Backend</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<FaNodeJs className="text-green-600 mr-2" />
										<span>Node.js</span>
									</li>
									<li className="flex items-center">
										<FaServer className="text-gray-600 mr-2" />
										<span>PHP (Laravel)</span>
									</li>
									<li className="flex items-center">
										<FaPython className="text-blue-600 mr-2" />
										<span>Python/Django</span>
									</li>
									<li className="flex items-center">
										<FaDatabase className="text-orange-500 mr-2" />
										<span>GraphQL/REST</span>
									</li>
								</ul>
							</div>

							{/* Databases */}
							<div className="bg-gray-50 p-6 rounded-xl">
								<h3 className="text-lg font-bold mb-4 text-center">Databases</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<FaDatabase className="text-blue-400 mr-2" />
										<span>MySQL/PostgreSQL</span>
									</li>
									<li className="flex items-center">
										<FaBolt className="text-yellow-500 mr-2" />
										<span>MongoDB</span>
									</li>
									<li className="flex items-center">
										<FaMemory className="text-red-500 mr-2" />
										<span>Redis</span>
									</li>
									<li className="flex items-center">
										<FaSearch className="text-purple-500 mr-2" />
										<span>ElasticSearch</span>
									</li>
								</ul>
							</div>

							{/* DevOps */}
							<div className="bg-gray-50 p-6 rounded-xl">
								<h3 className="text-lg font-bold mb-4 text-center">DevOps</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<FaDocker className="text-blue-400 mr-2" />
										<span>Docker/Kubernetes</span>
									</li>
									<li className="flex items-center">
										<FaAws className="text-orange-500 mr-2" />
										<span>AWS/GCP</span>
									</li>
									<li className="flex items-center">
										<FaCodeBranch className="text-purple-500 mr-2" />
										<span>CI/CD Pipelines</span>
									</li>
									<li className="flex items-center">
										<FaShieldAlt className="text-green-500 mr-2" />
										<span>Security Scanning</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-12 text-center">
							<p className="text-lg text-gray-600 mb-6">
								We choose the right technologies for your specific project requirements and business goals.
							</p>
							<a
								href="contact.html"
								className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition"
							>
								Discuss Your Tech Stack
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Development Success Stories</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							How we've helped businesses solve unique challenges with custom solutions.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* Case Study 1 */}
						<div className="bg-white rounded-xl overflow-hidden shadow-md">
							<img
								src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
								alt="Case Study"
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">Global Fashion Retailer</h3>
								<p className="text-gray-600 mb-4">
									Built a custom headless commerce solution with 3D product visualization that increased conversions by
									37%.
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Headless Architecture</span>
									<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">3D Visualization</span>
									<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Multi-region</span>
								</div>
								<a href="#" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
									Read Case Study <FaArrowRight className="ml-2" />
								</a>
							</div>
						</div>

						{/* Case Study 2 */}
						<div className="bg-white rounded-xl overflow-hidden shadow-md">
							<img
								src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
								alt="Case Study"
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">B2B Industrial Supplier</h3>
								<p className="text-gray-600 mb-4">
									Custom Magento solution with complex quoting system and ERP integration processing $8M monthly.
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
										Custom ERP Integration
									</span>
									<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Quoting System</span>
									<span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Account Management</span>
								</div>
								<a href="#" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
									Read Case Study <FaArrowRight className="ml-2" />
								</a>
							</div>
						</div>
					</div>

					<div className="mt-12 text-center">
						<a
							href="portfolio.html"
							className="inline-block border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-600 hover:text-white transition"
						>
							View More Case Studies
						</a>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Development FAQs</h2>
							<p className="text-xl text-gray-600">
								Answers to common questions about our custom development services.
							</p>
						</div>

						<div className="space-y-4">
							{/* FAQ Item 1 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
									onClick={() => toggleFAQ(1)}
								>
									<h3 className="text-lg font-medium text-gray-900">
										How do you determine if we need custom development vs. using existing solutions?
									</h3>
									<FaChevronDown
										className={`text-purple-600 transition-transform duration-200 transform ${
											activeFAQ === 1 ? 'rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 1 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											We analyze your business requirements, workflows, and growth plans. Custom development makes sense
											when: you have unique processes that off-the-shelf solutions can't accommodate, you need deep
											integrations with proprietary systems, your business model requires specialized functionality, or
											you need a competitive advantage through differentiated customer experiences.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 2 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
									onClick={() => toggleFAQ(2)}
								>
									<h3 className="text-lg font-medium text-gray-900">
										What's the typical timeline for a custom eCommerce project?
									</h3>
									<FaChevronDown
										className={`text-purple-600 transition-transform duration-200 transform ${
											activeFAQ === 2 ? 'rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 2 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											Timeline depends on project complexity, but here are general guidelines:
											<br />
											<br />
											• Small customizations: 4-8 weeks
											<br />
											• Medium custom store: 3-6 months
											<br />
											• Complex enterprise solution: 6-12 months
											<br />
											<br />
											We work in agile sprints, delivering functional components every 2 weeks so you see progress
											quickly.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 3 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
									onClick={() => toggleFAQ(3)}
								>
									<h3 className="text-lg font-medium text-gray-900">
										How do you ensure our custom solution will scale as we grow?
									</h3>
									<FaChevronDown
										className={`text-purple-600 transition-transform duration-200 transform ${
											activeFAQ === 3 ? 'rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 3 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											We architect all solutions with scalability in mind: microservices architecture where appropriate,
											database optimization from the start, caching strategies implemented early, and infrastructure
											designed for horizontal scaling. We also conduct load testing at key milestones to identify
											bottlenecks before they become problems.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 4 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
									onClick={() => toggleFAQ(4)}
								>
									<h3 className="text-lg font-medium text-gray-900">
										What ongoing maintenance will our custom solution require?
									</h3>
									<FaChevronDown
										className={`text-purple-600 transition-transform duration-200 transform ${
											activeFAQ === 4 ? 'rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 4 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											All custom solutions require: security updates, compatibility updates with integrated systems,
											performance monitoring, and occasional feature enhancements. We offer comprehensive{' '}
											<a href="ecommerce-support-maintenance.html" className="text-purple-600 hover:underline">
												support and maintenance plans
											</a>{' '}
											to handle this for you. Typical maintenance costs range from 15-25% of initial development cost
											annually.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 5 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
									onClick={() => toggleFAQ(5)}
								>
									<h3 className="text-lg font-medium text-gray-900">
										Can you migrate our existing data to a new custom platform?
									</h3>
									<FaChevronDown
										className={`text-purple-600 transition-transform duration-200 transform ${
											activeFAQ === 5 ? 'rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 5 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											Yes, we have extensive experience migrating: product catalogs, customer data, order history,
											content assets, and more. We create custom migration scripts that preserve data relationships and
											conduct thorough testing to ensure nothing is lost in translation. All migrations include a
											rollback plan in case unexpected issues arise.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 6 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
									onClick={() => toggleFAQ(6)}
								>
									<h3 className="text-lg font-medium text-gray-900">What about SEO for custom eCommerce platforms?</h3>
									<FaChevronDown
										className={`text-purple-600 transition-transform duration-200 transform ${
											activeFAQ === 6 ? 'rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 6 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											We build SEO best practices into the foundation of every custom solution: semantic HTML structure,
											optimized URL routing, automatic sitemap generation, schema markup implementation, server-side
											rendering where needed, and performance optimizations for Core Web Vitals. We also provide
											guidance on content strategy and technical SEO maintenance.
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-purple-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Custom eCommerce Solution?</h2>
						<p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
							Let's discuss how custom development can solve your unique business challenges and create competitive
							advantage.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="contact.html"
								className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Start Your Project
							</a>
							<a
								href="tel:+18005551234"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-purple-600 transition text-center"
							>
								<FaPhoneAlt className="mr-2 inline-block" />
								Call Our Experts
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

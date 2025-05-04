'use client';
import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {FaMobileAlt, FaChartLine, FaExpand, FaCheck, FaStar, FaPuzzlePiece} from 'react-icons/fa';
import {FaBriefcase, FaExchangeAlt, FaStore, FaSearch, FaCogs} from 'react-icons/fa';
import {FaPlug, FaHeadset} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';

const faqs = [
	{
		question: 'What eCommerce platforms do you specialize in?',
		answer:
			'We work with all major platforms including Shopify, Shopify Plus, Magento 2, WooCommerce, Laravel (Bagisto/Aimeos), and custom Headless Commerce solutions. We recommend the best fit based on your business model, scale, and technical needs.',
	},
	{
		question: 'How much does it cost to develop an eCommerce website?',
		answer:
			'The cost depends on factors like platform, features, design complexity, integrations, and store size. Projects typically start from $3,000 for small businesses and can go higher for enterprise-level or multi-store solutions. We offer free consultations and custom quotes.',
	},
	{
		question: 'How long does it take to build an eCommerce website?',
		answer:
			'Timelines vary depending on the project scope. A basic store might take 3–4 weeks, while a complex, customized solution could take 8–12 weeks or more. We always define a timeline during project onboarding and stick to clear milestones.',
	},
	{
		question: 'Can you migrate my existing store to a new platform?',
		answer:
			'Yes! We handle complete store migrations (data, design, SEO, integrations) from platforms like Wix, BigCommerce, Magento 1, or WooCommerce to Shopify, Magento 2, Laravel, and others — with minimal downtime and zero data loss.',
	},
	{
		question: 'Do you provide post-launch support and maintenance?',
		answer:
			"Absolutely. eComReflex offers ongoing maintenance plans that include updates, bug fixes, security patches, performance monitoring, and feature enhancements. We're here for long-term support beyond launch day.",
	},
	{
		question: 'What makes eComReflex different from other eCommerce agencies?',
		answer:
			"We combine deep platform expertise, business-focused development, and personalized service. We don't just build stores — we help you scale, optimize, and compete in your industry with confidence. Our end-to-end partnership approach means we're with you from strategy through development to long-term growth.",
	},
];

export default function EcommerceDevelopmentServicesPage() {
	const [activeTab, setActiveTab] = useState('shopify');
	const [activeIndex, setActiveIndex] = useState(null);
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<>
			<Head>
				<title>Ecommerce Development Services | eComReflex</title>
				<meta
					name="description"
					content="Full-spectrum ecommerce development services by eComReflex - Shopify, Magento, WooCommerce, Headless, B2B, mobile-first, and more."
				/>
			</Head>
			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">eCommerce Development Services</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Your eCommerce website is more than just a place to sell your products. It's the heart of your brand, the
							experience your customers have, and a way for you to make money. We build strong, flexible, and effective
							online stores that convert and grow.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<Link
								href="#platforms"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								View Our Platforms
							</Link>
							<Link
								href="/contact"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								Get a Free Consultation
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Introduction */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Complete eCommerce Solutions for Modern Businesses</h2>
						<p className="text-xl text-gray-600 mb-8">
							Our eCommerce Development Services cover everything modern businesses need. From platform selection to
							custom features, mobile readiness, multi-store management, and ongoing support - we help businesses of all
							sizes bring their digital vision to life.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						{/* Mobile First */}
						<div className="bg-gray-50 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaMobileAlt className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Mobile-First Approach</h3>
							<p className="text-gray-600">
								With over 70% of shopping on mobile, we prioritize seamless mobile experiences that convert.
							</p>
						</div>

						{/* Conversion Optimized */}
						<div className="bg-gray-50 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaChartLine className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Conversion Optimized</h3>
							<p className="text-gray-600">
								Every element is designed to maximize conversions and average order value.
							</p>
						</div>

						{/* Built to Scale */}
						<div className="bg-gray-50 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FaExpand className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Built to Scale</h3>
							<p className="text-gray-600">
								Architected for growth, handling traffic spikes and expanding product catalogs with ease.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Platform Selection */}
			<section id="platforms" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our eCommerce Platform Expertise</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We work with all major eCommerce platforms to deliver the perfect solution for your business needs.
						</p>
					</div>

					{/* Platform Tabs Navigation */}
					<div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
						{['shopify', 'magento', 'woocommerce', 'headless', 'laravel'].map((platform) => (
							<button
								key={platform}
								className={`tab-btn px-6 py-3 font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-300 transition ${
									activeTab === platform ? 'border-indigo-300' : ''
								}`}
								onClick={() => handleTabClick(platform)}
							>
								{platform.charAt(0).toUpperCase() + platform.slice(1)}
							</button>
						))}
					</div>

					{/* Platform Tab Contents */}
					<div className="max-w-6xl mx-auto">
						{/* Shopify Tab */}
						{activeTab === 'shopify' && (
							<div className="tab-content active">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Shopify & Shopify Plus Development</h3>
										<p className="text-gray-600 mb-6">
											Create beautiful, mobile-friendly, and easy-to-use Shopify stores that are simple to manage and
											designed to grow. Perfect for DTC brands and retailers who want quick setup with top-notch
											performance.
										</p>
										<div className="space-y-4">
											{[
												'Shopify Store Setup & Configuration',
												'Shopify Theme Design & Customization',
												'Shopify Plus Development',
											].map((item, index) => (
												<div key={index} className="flex items-start">
													<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
														<i className="fas fa-check-circle"></i>
													</div>
													<div>
														<h4 className="font-bold">{item}</h4>
														<p className="text-gray-600">
															Complete store configuration, pixel-perfect themes, advanced automation, and API-powered
															integrations.
														</p>
													</div>
												</div>
											))}
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Get Shopify Help
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Shopify Store Example"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Magento Tab */}
						{activeTab === 'magento' && (
							<div className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Magento eCommerce Development</h3>
										<p className="text-gray-600 mb-6">
											Powerful, customizable eCommerce solutions with Magento. We build high-performance stores with
											rich features, flexible product types, and seamless backend workflows tailored for complex
											business needs.
										</p>
										<div className="space-y-4">
											{['Magento Custom Development', 'Magento 2 PWA Development', 'Magento Migration Services'].map(
												(item, index) => (
													<div key={index} className="flex items-start">
														<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
															<i className="fas fa-check-circle"></i>
														</div>
														<div>
															<h4 className="font-bold">{item}</h4>
															<p className="text-gray-600">
																Tailor your Magento store, app-like experience, or migrate with zero data loss.
															</p>
														</div>
													</div>
												)
											)}
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Get Magento Help
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Magento Store Example"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* WooCommerce Tab */}
						{activeTab === 'woocommerce' && (
							<div className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">WooCommerce Development</h3>
										<p className="text-gray-600 mb-6">
											Turn your WordPress site into a fully functional online store. Perfect for content-heavy brands or
											smaller shops needing flexibility, control, and seamless blogging and selling capabilities.
										</p>
										<div className="space-y-4">
											{['WooCommerce Store Setup', 'WooCommerce Plugin Development', 'Multi-Vendor Marketplace'].map(
												(item, index) => (
													<div key={index} className="flex items-start">
														<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
															<i className="fas fa-check-circle"></i>
														</div>
														<div>
															<h4 className="font-bold">{item}</h4>
															<p className="text-gray-600">
																Complete configuration, custom plugins, or build a full-featured marketplace.
															</p>
														</div>
													</div>
												)
											)}
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Get WooCommerce Help
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="WooCommerce Store Example"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Headless Tab */}
						{activeTab === 'headless' && (
							<div className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Headless Commerce Development</h3>
										<p className="text-gray-600 mb-6">
											Complete flexibility with future-ready architecture. We separate your frontend from backend to
											support multi-channel selling across web, mobile, apps, and beyond using technologies like React,
											Vue.js, and APIs.
										</p>
										<div className="space-y-4">
											{['API-First Architecture', 'Omnichannel Ready', 'Lightning Fast Performance'].map(
												(item, index) => (
													<div key={index} className="flex items-start">
														<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
															<i className="fas fa-check-circle"></i>
														</div>
														<div>
															<h4 className="font-bold">{item}</h4>
															<p className="text-gray-600">
																Decoupled frontend and backend, sell across channels, and speed with JAMstack.
															</p>
														</div>
													</div>
												)
											)}
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Explore Headless
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Headless Commerce Example"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Laravel Tab */}
						{activeTab === 'laravel' && (
							<div className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Laravel eCommerce Development</h3>
										<p className="text-gray-600 mb-6">
											Build fast, secure, and scalable eCommerce platforms using Laravel, the most popular PHP
											framework. Perfect for businesses needing high customization, seamless performance, and clean
											architecture.
										</p>
										<div className="space-y-4">
											{['Custom Laravel Development', 'Bagisto Development', 'Multi-Vendor Marketplaces'].map(
												(item, index) => (
													<div key={index} className="flex items-start">
														<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
															<i className="fas fa-check-circle"></i>
														</div>
														<div>
															<h4 className="font-bold">{item}</h4>
															<p className="text-gray-600">
																Tailored eCommerce solutions, scalable stores, or multi-vendor platforms.
															</p>
														</div>
													</div>
												)
											)}
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Get Laravel Help
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Laravel eCommerce Example"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Specialized Services Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized eCommerce Services</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Beyond platform development, we offer specialized solutions for unique business needs.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Service 1 */}
						<div className="service-card bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
								<FaBriefcase className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">B2B eCommerce Development</h3>
							<p className="text-gray-600 mb-4">
								Powerful platforms for wholesalers and manufacturers with advanced pricing, quote requests, and ERP
								integrations.
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start">
									<FaCheck className="text-indigo-600 mr-2 mt-1" />
									<span>Customer-specific pricing</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-indigo-600 mr-2 mt-1" />
									<span>Quote management systems</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-indigo-600 mr-2 mt-1" />
									<span>Bulk ordering capabilities</span>
								</li>
							</ul>
							<Link
								href="/services/b2b-ecommerce-development"
								className="text-indigo-600 font-medium hover:text-indigo-800"
							>
								Learn More →
							</Link>
						</div>

						{/* Service 2 */}
						<div className="service-card bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
								<FaMobileAlt className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Mobile Commerce & PWAs</h3>
							<p className="text-gray-600 mb-4">
								Progressive Web Apps and mobile-optimized stores that deliver app-like experiences without app store
								hurdles.
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start">
									<FaCheck className="text-purple-600 mr-2 mt-1" />
									<span>Offline functionality</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-purple-600 mr-2 mt-1" />
									<span>Push notifications</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-purple-600 mr-2 mt-1" />
									<span>Home screen installation</span>
								</li>
							</ul>
							<Link
								href="/services/mobile-ecommerce-and-pwas"
								className="text-indigo-600 font-medium hover:text-indigo-800"
							>
								Learn More →
							</Link>
						</div>

						{/* Service 3 */}
						<div className="service-card bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<FaExchangeAlt className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Platform Migration</h3>
							<p className="text-gray-600 mb-4">
								Seamlessly move your store to a new platform without losing data, SEO rankings, or customer information.
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start">
									<FaCheck className="text-blue-600 mr-2 mt-1" />
									<span>Zero downtime migration</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-blue-600 mr-2 mt-1" />
									<span>SEO preservation</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-blue-600 mr-2 mt-1" />
									<span>Data integrity checks</span>
								</li>
							</ul>
							<Link href="/services/platform-migration" className="text-indigo-600 font-medium hover:text-indigo-800">
								Learn More →
							</Link>
						</div>

						{/* Service 4 */}
						<div className="service-card bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
								<FaStore className="text-green-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Multi-Store Management</h3>
							<p className="text-gray-600 mb-4">
								Run multiple brands, regions, or languages under one umbrella with centralized control.
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start">
									<FaCheck className="text-green-600 mr-2 mt-1" />
									<span>Shared inventory management</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-green-600 mr-2 mt-1" />
									<span>Localized experiences</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-green-600 mr-2 mt-1" />
									<span>Unified reporting</span>
								</li>
							</ul>
							<Link
								href="/services/multi-store-management"
								className="text-indigo-600 font-medium hover:text-indigo-800"
							>
								Learn More →
							</Link>
						</div>

						{/* Service 5 */}
						<div className="service-card bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
								<FaSearch className="text-yellow-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">eCommerce SEO Services</h3>
							<p className="text-gray-600 mb-4">
								Technical and on-page SEO optimization to improve visibility and drive organic traffic to your store.
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start">
									<FaCheck className="text-yellow-600 mr-2 mt-1" />
									<span>Technical SEO audits</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-yellow-600 mr-2 mt-1" />
									<span>Product schema markup</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-yellow-600 mr-2 mt-1" />
									<span>Content strategy</span>
								</li>
							</ul>
							<Link
								href="/services/ecommerce-seo-services"
								className="text-indigo-600 font-medium hover:text-indigo-800"
							>
								Learn More →
							</Link>
						</div>

						{/* Service 6 */}
						<div className="service-card bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
								<FaCogs className="text-red-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
							<p className="text-gray-600 mb-4">
								Maintenance, security updates, performance tuning, and feature enhancements to keep your store running
								smoothly.
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start">
									<FaCheck className="text-red-600 mr-2 mt-1" />
									<span>24/7 monitoring</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-red-600 mr-2 mt-1" />
									<span>Security patches</span>
								</li>
								<li className="flex items-start">
									<FaCheck className="text-red-600 mr-2 mt-1" />
									<span>Performance optimization</span>
								</li>
							</ul>
							<Link href="/services/ongoing-support" className="text-indigo-600 font-medium hover:text-indigo-800">
								Learn More →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Section */}
			<section className="py-20 bg-indigo-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose eComReflex?</h2>
						<p className="text-xl text-gray-600">
							Your strategic partner in building high-performance eCommerce experiences.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Reason 1 */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
								<FaStar className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Full-Spectrum Expertise</h3>
							<p className="text-gray-600">
								From Shopify to Magento, WooCommerce, and custom solutions — we have platform-certified experts who
								deliver the right solution for your needs.
							</p>
						</div>

						{/* Reason 2 */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
								<FaPuzzlePiece className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Custom-Tailored Development</h3>
							<p className="text-gray-600">
								We don't believe in one-size-fits-all. Every project is customized to match your unique workflows and
								customer journey.
							</p>
						</div>

						{/* Reason 3 */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaExpand className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
							<p className="text-gray-600">
								Our websites are built with performance, flexibility, and long-term growth in mind to handle your
								expanding business.
							</p>
						</div>

						{/* Reason 4 */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
								<FaMobileAlt className="text-green-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Mobile-First Approach</h3>
							<p className="text-gray-600">
								We build with a mobile-first mindset using PWA and multi-device optimization so you're ready for mobile
								commerce.
							</p>
						</div>

						{/* Reason 5 */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
								<FaPlug className="text-yellow-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Seamless Integrations</h3>
							<p className="text-gray-600">
								We connect your store with payment gateways, CRMs, ERPs, shipping APIs, and marketing tools for a
								frictionless operation.
							</p>
						</div>

						{/* Reason 6 */}
						<div className="bg-white p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
								<FaHeadset className="text-red-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Reliable Support</h3>
							<p className="text-gray-600">
								Our relationship doesn't end after launch. We offer tailored support packages to keep your store running
								at full power.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Faq */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
							<p className="text-xl text-gray-600">
								Answers to common questions about our eCommerce development services.
							</p>
						</div>

						<div className="space-y-4 max-w-3xl mx-auto">
							{faqs.map((faq, index) => (
								<div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
									<button
										className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
										onClick={() => toggleFAQ(index)}
									>
										<h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
										<FaChevronDown
											className={`text-indigo-600 transition-transform duration-200 ${
												activeIndex === index ? 'transform rotate-180' : ''
											}`}
										/>
									</button>
									<div className={`faq-content ${activeIndex === index ? 'block' : 'hidden'} px-6 pb-6`}>
										<p className="text-gray-600">{faq.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your eCommerce Store?</h2>
						<p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
							Whether you're launching a new store or upgrading an existing one, our team is ready to help you succeed
							online.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="get-started.html"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Get Started Now
							</a>
							<a
								href="contact.html"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								Talk to an Expert
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

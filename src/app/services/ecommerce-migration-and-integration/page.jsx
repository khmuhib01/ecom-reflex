'use client';
import Head from 'next/head';
import React, {useState} from 'react';
import {FaDatabase, FaClock, FaSearch, FaPlug, FaShieldAlt, FaHeadset} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export default function EcommerceMigrationAndIntegrationServicePage() {
	const [activeTab, setActiveTab] = useState('shopify-migration');
	const [activeFAQ, setActiveFAQ] = useState(null);

	const toggleFAQ = (index) => {
		setActiveFAQ(activeFAQ === index ? null : index);
	};

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	return (
		<>
			<Head>
				<title>Ecommerce Migration & Integration Services | EcomReflex</title>
				<meta
					name="description"
					content="Professional eCommerce platform migration and integration services. Seamlessly move your store or connect it with business systems without data loss or downtime."
				/>
			</Head>
			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
							Ecommerce Migration & Integration Services
						</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Seamlessly move your store to a better platform or connect it with essential business systems. Our experts
							ensure zero data loss, minimal downtime, and perfect synchronization across your tech stack.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#migration-services"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Explore Migration
							</a>
							<a
								href="#integration-services"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								View Integrations
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* integration Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold mb-6">Your Store Should Work For You, Not Against You</h2>
								<p className="text-xl text-gray-600 mb-6">
									Whether you're moving to a new platform or connecting your store to business systems, we handle the
									complex technical work so you can focus on growing your business.
								</p>
								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
											<i className="fas fa-check-circle"></i>
										</div>
										<div>
											<h3 className="text-lg font-bold">Zero Downtime Migrations</h3>
											<p className="text-gray-600">
												We keep your store running during transitions with no disruption to sales.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
											<i className="fas fa-check-circle"></i>
										</div>
										<div>
											<h3 className="text-lg font-bold">Data Integrity Guaranteed</h3>
											<p className="text-gray-600">
												Every product, customer, and order transferred with 100% accuracy.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
											<i className="fas fa-check-circle"></i>
										</div>
										<div>
											<h3 className="text-lg font-bold">Seamless System Integration</h3>
											<p className="text-gray-600">
												Connect your store to the tools that power your business operations.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 p-6 rounded-xl shadow-lg">
								<img
									src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
									alt="Ecommerce Migration"
									className="rounded-lg w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Migration Section */}
			<section id="migration-services" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Migration Services</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Move your store to a better platform without losing data, SEO rankings, or customer information.
						</p>
					</div>

					{/* Migration Tabs Navigation */}
					<div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
						<button
							onClick={() => handleTabClick('shopify-migration')}
							className={`tab-btn px-6 py-3 font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-300 transition ${
								activeTab === 'shopify-migration' ? 'border-indigo-300' : ''
							}`}
						>
							To Shopify
						</button>
						<button
							onClick={() => handleTabClick('magento-migration')}
							className={`tab-btn px-6 py-3 font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-300 transition ${
								activeTab === 'magento-migration' ? 'border-indigo-300' : ''
							}`}
						>
							To Magento
						</button>
						<button
							onClick={() => handleTabClick('woocommerce-migration')}
							className={`tab-btn px-6 py-3 font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-300 transition ${
								activeTab === 'woocommerce-migration' ? 'border-indigo-300' : ''
							}`}
						>
							To WooCommerce
						</button>
						<button
							onClick={() => handleTabClick('headless-migration')}
							className={`tab-btn px-6 py-3 font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-300 transition ${
								activeTab === 'headless-migration' ? 'border-indigo-300' : ''
							}`}
						>
							To Headless
						</button>
					</div>

					{/* Migration Tab Contents */}
					<div className="max-w-6xl mx-auto">
						{/* Shopify Migration Tab */}
						{activeTab === 'shopify-migration' && (
							<div id="shopify-migration" className="tab-content active">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Migrate to Shopify/Shopify Plus</h3>
										<p className="text-gray-600 mb-6">
											Move from Magento, WooCommerce, BigCommerce, or custom platforms to Shopify with zero data loss.
											We handle product data, customer accounts, order history, SEO URLs, and all content migration.
										</p>
										<div className="space-y-4">
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">SEO-Preserving Migration</h4>
													<p className="text-gray-600">
														301 redirects and URL structure maintenance to protect your search rankings.
													</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Custom Field Mapping</h4>
													<p className="text-gray-600">
														Complex product attributes and custom data transferred accurately.
													</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Third-Party App Setup</h4>
													<p className="text-gray-600">
														Reconfigure your essential apps and extensions in the new environment.
													</p>
												</div>
											</div>
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Start Your Migration
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Shopify Migration"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Magento Migration Tab */}
						{activeTab === 'magento-migration' && (
							<div id="magento-migration" className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Migrate to Magento 2</h3>
										<p className="text-gray-600 mb-6">
											Upgrade from Magento 1 or move from Shopify, WooCommerce, or other platforms to Magento 2. We
											handle the complete transition including data migration, theme conversion, extension setup, and
											performance optimization.
										</p>
										<div className="space-y-4">
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Magento 1 to Magento 2</h4>
													<p className="text-gray-600">
														Full migration including custom modules and database restructuring.
													</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Multi-Store Migration</h4>
													<p className="text-gray-600">Consolidate or separate stores during platform transition.</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Performance Optimization</h4>
													<p className="text-gray-600">Ensure your new Magento store runs faster than the old one.</p>
												</div>
											</div>
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Start Your Migration
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Magento Migration"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* WooCommerce Migration Tab */}
						{activeTab === 'woocommerce-migration' && (
							<div id="woocommerce-migration" className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Migrate to WooCommerce</h3>
										<p className="text-gray-600 mb-6">
											Move from Shopify, Magento, BigCommerce, or other platforms to WooCommerce. We ensure all
											products, customers, orders, and content are transferred accurately while maintaining your SEO
											value.
										</p>
										<div className="space-y-4">
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Content-Preserving Migration</h4>
													<p className="text-gray-600">Blog posts, pages, and media library transferred intact.</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Plugin Configuration</h4>
													<p className="text-gray-600">Equivalent WooCommerce plugins installed and configured.</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Theme Adaptation</h4>
													<p className="text-gray-600">
														Existing design adapted or new theme implemented to match your brand.
													</p>
												</div>
											</div>
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Start Your Migration
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="WooCommerce Migration"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Headless Migration Tab */}
						{activeTab === 'headless-migration' && (
							<div id="headless-migration" className="tab-content">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div>
										<h3 className="text-2xl font-bold mb-4">Migrate to Headless Commerce</h3>
										<p className="text-gray-600 mb-6">
											Transition from traditional monolithic platforms to a flexible headless architecture. We'll
											decouple your frontend from the backend and set up API connections for a future-proof commerce
											solution.
										</p>
										<div className="space-y-4">
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">API Strategy Development</h4>
													<p className="text-gray-600">Plan the optimal API architecture for your business needs.</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Progressive Migration</h4>
													<p className="text-gray-600">Phase the transition to minimize business disruption.</p>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex-shrink-0 mt-1 text-indigo-600 mr-4">
													<i className="fas fa-check-circle"></i>
												</div>
												<div>
													<h4 className="font-bold">Omnichannel Setup</h4>
													<p className="text-gray-600">Provide a seamless experience across all touchpoints.</p>
												</div>
											</div>
										</div>
										<a
											href="contact.html"
											className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
										>
											Start Your Migration
										</a>
									</div>
									<div className="bg-white p-6 rounded-xl shadow-md">
										<img
											src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt="Headless Migration"
											className="rounded-lg w-full h-auto"
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Migration Process */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Migration Process</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							A structured approach to ensure your platform transition is smooth and successful.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
						{/* Step 1 */}
						<div className="process-step bg-gray-50 p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">1</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Discovery & Planning</h3>
							<p className="text-gray-600">
								We analyze your current setup, identify special requirements, and create a detailed migration plan.
							</p>
						</div>

						{/* Step 2 */}
						<div className="process-step bg-gray-50 p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">2</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Test Migration</h3>
							<p className="text-gray-600">
								We perform a complete dry run to identify and resolve any potential issues before the live migration.
							</p>
						</div>

						{/* Step 3 */}
						<div className="process-step bg-gray-50 p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">3</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Data Migration</h3>
							<p className="text-gray-600">
								Products, customers, orders, and other essential data are transferred to the new platform.
							</p>
						</div>

						{/* Step 4 */}
						<div className="process-step bg-gray-50 p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">4</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Design & Functionality</h3>
							<p className="text-gray-600">
								Your store's look and features are implemented on the new platform with all customizations.
							</p>
						</div>

						{/* Step 5 */}
						<div className="process-step bg-gray-50 p-8 rounded-xl shadow-md text-center">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">5</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Launch & Optimization</h3>
							<p className="text-gray-600">
								Final testing, SEO setup, and performance tuning before going live with the new store.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose eComReflex */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose eComReflex for Migration & Integration?</h2>
						<p className="text-xl text-gray-600">
							We don't just move data — we ensure your business continues uninterrupted during and after transition.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Reason 1 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
								<FaDatabase className="text-indigo-600" size={24} />
							</div>
							<h3 className="text-xl font-bold mb-3">Data Integrity Focus</h3>
							<p className="text-gray-600">
								Our multi-step validation process ensures every product, customer, and order is transferred accurately.
							</p>
						</div>

						{/* Reason 2 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
								<FaClock className="text-purple-600" size={24} />
							</div>
							<h3 className="text-xl font-bold mb-3">Minimal Downtime</h3>
							<p className="text-gray-600">
								We plan migrations during low-traffic periods and use staging environments to prevent sales disruption.
							</p>
						</div>

						{/* Reason 3 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaSearch className="text-blue-600" size={24} />
							</div>
							<h3 className="text-xl font-bold mb-3">SEO Preservation</h3>
							<p className="text-gray-600">
								Proper 301 redirects and URL structure maintenance protect your hard-earned search rankings.
							</p>
						</div>

						{/* Reason 4 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
								<FaPlug className="text-green-600" size={24} />
							</div>
							<h3 className="text-xl font-bold mb-3">Integration Expertise</h3>
							<p className="text-gray-600">
								Certified developers experienced with all major eCommerce APIs and middleware solutions.
							</p>
						</div>

						{/* Reason 5 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
								<FaShieldAlt className="text-yellow-600" size={24} />
							</div>
							<h3 className="text-xl font-bold mb-3">Security First</h3>
							<p className="text-gray-600">
								All data transfers use encrypted connections with proper authentication protocols.
							</p>
						</div>

						{/* Reason 6 */}
						<div className="bg-gray-50 p-8 rounded-xl shadow-md">
							<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
								<FaHeadset className="text-red-600" size={24} />
							</div>
							<h3 className="text-xl font-bold mb-3">Post-Migration Support</h3>
							<p className="text-gray-600">
								We monitor your new setup and address any issues that arise after go-live.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Migration & Integration FAQs</h2>
							<p className="text-xl text-gray-600">
								Answers to common questions about moving platforms and connecting systems.
							</p>
						</div>

						<div className="space-y-4">
							{/* FAQ Item 1 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									onClick={() => toggleFAQ(1)}
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
								>
									<h3 className="text-lg font-medium text-gray-900">
										How long does a typical eCommerce migration take?
									</h3>
									<FaChevronDown
										className={`text-indigo-600 transition-transform duration-200 ${
											activeFAQ === 1 ? 'transform rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 1 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											Migration timelines vary based on store size and complexity. Small stores (under 500 products) can
											often be migrated in 2-3 weeks. Medium stores (500-5,000 products) typically take 3-6 weeks. Large
											or complex migrations may require 8-12 weeks. We provide a detailed timeline after assessing your
											specific requirements.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 2 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									onClick={() => toggleFAQ(2)}
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
								>
									<h3 className="text-lg font-medium text-gray-900">Will my SEO rankings be affected by migration?</h3>
									<FaChevronDown
										className={`text-indigo-600 transition-transform duration-200 ${
											activeFAQ === 2 ? 'transform rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 2 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											When done correctly, migration should not negatively impact your SEO. We implement 301 redirects
											for all changed URLs, preserve metadata, submit updated sitemaps, and monitor rankings
											post-migration. In many cases, sites see improved rankings due to technical SEO enhancements
											during the migration process.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 3 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									onClick={() => toggleFAQ(3)}
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
								>
									<h3 className="text-lg font-medium text-gray-900">Can you migrate customer passwords?</h3>
									<FaChevronDown
										className={`text-indigo-600 transition-transform duration-200 ${
											activeFAQ === 3 ? 'transform rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 3 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											Password migration depends on the platforms involved. When moving between similar systems (e.g.,
											Magento to Magento), we can often transfer passwords directly. For cross-platform migrations, we
											typically implement a password reset workflow that maintains security while ensuring customers can
											easily regain access to their accounts.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 4 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									onClick={() => toggleFAQ(4)}
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
								>
									<h3 className="text-lg font-medium text-gray-900">
										How do you handle custom functionality during migration?
									</h3>
									<FaChevronDown
										className={`text-indigo-600 transition-transform duration-200 ${
											activeFAQ === 4 ? 'transform rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 4 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											We document all custom features from your current store and either find equivalent solutions on
											the new platform or develop custom implementations. This includes custom product types, checkout
											modifications, reporting tools, and any other unique functionality. We test all custom elements
											thoroughly before launch.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 5 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									onClick={() => toggleFAQ(5)}
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
								>
									<h3 className="text-lg font-medium text-gray-900">What's involved in ERP integration?</h3>
									<FaChevronDown
										className={`text-indigo-600 transition-transform duration-200 ${
											activeFAQ === 5 ? 'transform rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 5 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											ERP integration typically includes: product/inventory synchronization, order data transfer,
											customer data sharing, and pricing updates. We analyze your workflows to determine which data
											needs to flow in which direction, set up the API connections or middleware, establish
											synchronization schedules, and implement error handling procedures.
										</p>
									</div>
								)}
							</div>

							{/* FAQ Item 6 */}
							<div className="border border-gray-200 rounded-lg overflow-hidden">
								<button
									onClick={() => toggleFAQ(6)}
									className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none"
								>
									<h3 className="text-lg font-medium text-gray-900">Do you provide post-migration support?</h3>
									<FaChevronDown
										className={`text-indigo-600 transition-transform duration-200 ${
											activeFAQ === 6 ? 'transform rotate-180' : ''
										}`}
									/>
								</button>
								{activeFAQ === 6 && (
									<div className="faq-content px-6 pb-6">
										<p className="text-gray-600">
											Yes, we offer various post-migration support options. Our standard package includes 30 days of bug
											fixes and minor adjustments at no additional cost. We also offer ongoing maintenance plans that
											include performance monitoring, security updates, and feature enhancements. Many clients choose to
											retain us for continuous optimization after migration.
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move or Connect Your Store?</h2>
						<p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
							Whether you're migrating platforms or integrating systems, our experts will ensure a smooth transition.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="contact.html"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Get a Free Consultation
							</a>
							<a
								href="tel:+18005551234"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
							>
								<FaPhoneAlt className="mr-2 inline" /> Call Our Experts
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

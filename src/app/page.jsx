'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {FaLaptopCode, FaExchangeAlt, FaSearch, FaChartLine, FaCogs, FaCode, FaArrowRight} from 'react-icons/fa';
import {FaLayerGroup, FaTachometerAlt, FaProjectDiagram, FaChartBar, FaCheckCircle} from 'react-icons/fa';

export default function Home() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqItems = [
		{
			question: 'What services does EcomReflex offer?',
			answer:
				'EcomReflex offers a variety of services related to e-commerce, such as designing custom stores, moving platforms, creating headless commerce, integrating APIs, improving performance, and providing ongoing maintenance. We also offer digital strategy, SEO, and UI/UX enhancements designed for eCommerce brands that want to grow.',
		},
		{
			question: 'Which eCommerce platforms do you work with?',
			answer:
				'We work with many different platforms, including Shopify, Shopify Plus, WooCommerce, Magento (Adobe Commerce), BigCommerce, and custom solutions using headless frameworks like Next.js and React.',
		},
		{
			question: 'Do you provide custom design and development?',
			answer:
				'Absolutely. Every store we build is uniquely designed to reflect your brand and meet your specific business needs. Our team handles everything from UI/UX design to full-stack development.',
		},
		{
			question: 'How long does it take to build an eCommerce website?',
			answer:
				'How long this will take depends on how complicated the project is. It usually takes between 4 and 12 weeks to build a custom store. For platform migrations or large-scale projects, the timeline may be longer. We provide a detailed plan for the project during the discovery phase.',
		},
		{
			question: "What's your pricing model?",
			answer:
				'Our prices can change based on the project. After we talk about what you need and look at what the job will cost, we will give you a detailed proposal with a price. We also offer retainer and hourly plans for ongoing work and support.',
		},
		{
			question: 'Can you help with an existing eCommerce site?',
			answer:
				'Yes, we often work with clients who already have stores. We help them with redesigns, feature enhancements, speed optimization, or third-party integrations.',
		},
		{
			question: 'Do you offer post-launch support?',
			answer:
				'Yes. We offer ongoing support and maintenance packages. These include updates, bug fixes, security monitoring, performance tuning, and feature rollouts.',
		},
		{
			question: 'Will my website be mobile-optimized?',
			answer:
				'Absolutely. We build websites that look great on any device. They work well on desktops, laptops, and phones.',
		},
		{
			question: 'Do you offer eCommerce SEO and marketing services?',
			answer:
				'Yes. Along with technical SEO for e-commerce (like speed optimization and structured data), we offer content strategy, landing page optimization, and integrations with email marketing and analytics tools.',
		},
		{
			question: 'Can you integrate my store with third-party tools like CRMs or ERPs?',
			answer:
				'We can help you connect your e-commerce store to other tools, like CRMs (such as HubSpot and Salesforce) and ERPs (like NetSuite and SAP). We can also connect it to payment gateways, shipping APIs, and marketing platforms.',
		},
		{
			question: 'What makes EcomReflex different from other agencies?',
			answer:
				"We combine deep e-commerce expertise with a strategy-first approach. We don't just build websites; we build ecosystems that support your brand's long-term growth. Our clients like that we are honest, fast, and pay close attention to detail.",
		},
		{
			question: 'How do I get started?',
			answer:
				"Just send us a message through our contact form or schedule a free discovery call. We'll talk about your goals, what you're doing now, and how we can help you grow.",
		},
	];

	return (
		<>
			{/* Hero */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-32">
					<div className="flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-10 md:mb-0">
							<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
								EcomReflex - Full-Service eCommerce Development Agency
							</h1>
							<p className="text-xl text-indigo-100 mb-8">
								Your one-stop agency for eCommerce development. Custom websites, mobile optimization, payment
								integrations, and ongoing support.
							</p>
							<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
								<a
									href="#contact"
									className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
								>
									Get Free Consultation
								</a>
								<a
									href="#portfolio"
									className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition text-center"
								>
									See Our Work
								</a>
							</div>
						</div>

						<div className="md:w-1/2 flex justify-center">
							<div className="relative w-full max-w-md h-[300px] md:h-[400px]">
								<Image
									src="https://images.unsplash.com/photo-1556740738-b6a63ed27c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
									alt="eCommerce Dashboard"
									fill
									className="rounded-lg shadow-2xl object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section id="services" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Transform your eCommerce vision into reality with our end-to-end solutions. We deliver tailored services
							designed to build, optimize, and scale your online store for maximum performance and growth.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Service 1 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300 p-6">
							<div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
								<FaLaptopCode className="text-indigo-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Ecommerce Development</h3>
							<p className="text-gray-600 mb-4">
								We specialize in creating custom online stores across platforms like Shopify Plus, Magento, and
								WooCommerce. Our team designs mobile-responsive, SEO-optimized storefronts with intuitive user
								experiences and secure checkout systems.
							</p>
							<Link
								href="/service/ecommerce-development"
								className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
							>
								Learn more <FaArrowRight className="ml-2" />
							</Link>
						</div>

						{/* Service 2 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300 p-6">
							<div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
								<FaExchangeAlt className="text-purple-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Ecommerce Migration & Integration</h3>
							<p className="text-gray-600 mb-4">
								Our migration experts ensure smooth transitions between platforms. We handle data migration for
								products, customers, and order history while integrating essential tools such as ERP systems, CRMs, POS,
								shipping gateways, and payment processors.
							</p>
							<a href="#" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
								Learn more <FaArrowRight className="ml-2" />
							</a>
						</div>

						{/* Service 3 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300 p-6">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaSearch className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Audit & Analysis</h3>
							<p className="text-gray-600 mb-4">
								Discover growth blockers and fix them fast. Our detailed audits cover technical performance, UX/UI
								design, page speed, SEO health, and mobile responsiveness. We also assess your conversion funnels and
								security setup.
							</p>
							<a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
								Learn more <FaArrowRight className="ml-2" />
							</a>
						</div>

						{/* Service 4 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300 p-6">
							<div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
								<FaChartLine className="text-green-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Growth & Optimization</h3>
							<p className="text-gray-600 mb-4">
								We help you scale through data-led strategies. This includes CRO tactics, A/B testing, cart abandonment
								recovery, funnel analysis, and retention strategies. Using analytics and user behavior tracking.
							</p>
							<a href="#" className="text-green-600 font-medium hover:text-green-800 flex items-center">
								Learn more <FaArrowRight className="ml-2" />
							</a>
						</div>

						{/* Service 5 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300 p-6">
							<div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
								<FaCogs className="text-yellow-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Support & Maintenance</h3>
							<p className="text-gray-600 mb-4">
								We handle 24/7 monitoring, regular maintenance, patch updates, bug fixing, speed optimization, and
								security enhancements. Whether it's Magento or WooCommerce, we make sure your store is always stable.
							</p>
							<a href="#" className="text-yellow-600 font-medium hover:text-yellow-800 flex items-center">
								Learn more <FaArrowRight className="ml-2" />
							</a>
						</div>

						{/* Service 6 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300 p-6">
							<div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
								<FaCode className="text-red-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Custom Development</h3>
							<p className="text-gray-600 mb-4">
								Your business is unique—your store should be too. We develop custom Magento modules, WooCommerce
								plugins, and tailor-made APIs to expand functionality. From advanced product options to custom checkout
								flows.
							</p>
							<a href="#" className="text-red-600 font-medium hover:text-red-800 flex items-center">
								Learn more <FaArrowRight className="ml-2" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why EcomReflex?</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Choosing the right development partner is more than a technical decision; it's a strategic one.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						{/* Feature 1 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
									<FaLayerGroup className="text-xl" />
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-3">Multi-Platform Expertise</h3>
								<p className="text-gray-600">
									Our team has certified expertise in all major eCommerce platforms, including Shopify, Magento,
									WooCommerce, and custom headless builds. We don't believe in one solution that works for everyone.
									Instead, we design a platform that's a good fit for your business model, budget, and future growth
									plans.
								</p>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
									<FaTachometerAlt className="text-xl" />
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-3">Speed, Performance & Optimization</h3>
								<p className="text-gray-600">
									A beautiful website is useless if it's slow or hard to use. Performance is a key part of our company.
									We make every pixel and line of code better to make sure that websites load quickly, work well on
									mobile devices, and look good on any device. What happened? Your website will get higher rankings,
									more people will be interested in it, and you will get more conversions.
								</p>
							</div>
						</div>

						{/* Feature 3 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
									<FaProjectDiagram className="text-xl" />
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-3">End-to-End Capabilities</h3>
								<p className="text-gray-600">
									We do more than just development; we cover everything your eCommerce business needs to succeed. We
									offer a variety of services, including API integrations, third-party tools, conversion rate
									optimization, ongoing maintenance, SEO, and Amazon FBA/FBM services. We are here to help you grow your
									business.
								</p>
							</div>
						</div>

						{/* Feature 4 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
									<FaChartBar className="text-xl" />
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-3">Results-Driven Strategy</h3>
								<p className="text-gray-600">
									We don't just build websites; we deliver results. We think about data first. We track performance at
									every stage of your eCommerce journey and make changes quickly. We provide clear timelines,
									transparent reporting, and proactive communication. You'll always know where we are, what's next, and
									what kind of return on investment (ROI) you're getting.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section id="process" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our e-Commerce Development Process</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							A structured approach to ensure your eCommerce success
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Step 1 */}
						<div className="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">01</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Ideation & Planning</h3>
							<p className="text-gray-600">
								We start by having in-depth meetings to understand your business goals, gather detailed requirements,
								study your competitors, and define a clear plan for the project. This step is the foundation for a
								successful build.
							</p>
						</div>

						{/* Step 2 */}
						<div className="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">02</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Design</h3>
							<p className="text-gray-600">
								We take your ideas and turn them into simple, interactive models. We will use your feedback to make
								changes to the layout and user interface until we have a final design that matches your brand.
							</p>
						</div>

						{/* Step 3 */}
						<div className="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">03</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Development</h3>
							<p className="text-gray-600">
								Our developers bring the designs to life using clean, scalable code. We integrate all desired
								functionalities while maintaining frequent check-ins for feedback and transparency throughout the
								process.
							</p>
						</div>

						{/* Step 4 */}
						<div className="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">04</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Testing</h3>
							<p className="text-gray-600">
								Quality is key. Our QA experts conduct thorough performance checks, security audits, cross-browser
								testing, and usability analysis to ensure your store is robust, fast, and ready for scale.
							</p>
						</div>

						{/* Step 5 */}
						<div className="process-step bg-white p-8 rounded-xl shadow-md text-center relative">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">05</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Release</h3>
							<p className="text-gray-600">
								After rigorous QA testing, your website goes live—either through a soft launch or a full-scale release,
								depending on your go-to-market plan. We ensure a smooth transition with zero disruption.
							</p>
						</div>

						{/* Step 6 */}
						<div className="process-step bg-white p-8 rounded-xl shadow-md text-center">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-indigo-600 font-bold text-xl">06</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Maintenance</h3>
							<p className="text-gray-600">
								Post-launch, we continue to support your store with updates, optimizations, security patches, and
								user-driven improvements to keep performance top-notch and ensure long-term success.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Cost of High-Quality eCommerce Store Development</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We understand that every business is unique, and so are their eCommerce needs.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{/* Price Card 1 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden price-card transition duration-300 border border-gray-200">
							<div className="p-8 text-center">
								<h3 className="text-xl font-bold mb-4">Startup</h3>
								<p className="text-gray-600 mb-6">
									Ideal for early-stage businesses needing essential functionality and a fast launch with a professional
									presence.
								</p>
								<div className="text-3xl font-bold text-indigo-600 mb-6">From $25,000</div>
								<ul className="space-y-3 mb-8 text-left">
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Entry-level features
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Responsive, template-based design
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Basic product catalog
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Standard payment gateways
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Basic SEO setup
									</li>
								</ul>
								<a
									href="#contact"
									className="block w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
								>
									Get Started
								</a>
							</div>
						</div>

						{/* Price Card 2 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden price-card transition duration-300 border-2 border-indigo-500 transform scale-105">
							<div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
								Popular
							</div>
							<div className="p-8 text-center">
								<h3 className="text-xl font-bold mb-4">Midsized Business</h3>
								<p className="text-gray-600 mb-6">Perfect for growing brands that need more than just the basics.</p>
								<div className="text-3xl font-bold text-indigo-600 mb-6">From $55,000</div>
								<ul className="space-y-3 mb-8 text-left">
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Custom design
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Scalable architecture
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Advanced product options
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Multiple payment options
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> CRM integration
									</li>
								</ul>
								<a
									href="#contact"
									className="block w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
								>
									Get Started
								</a>
							</div>
						</div>

						{/* Price Card 3 */}
						<div className="bg-white rounded-xl shadow-md overflow-hidden price-card transition duration-300 border border-gray-200">
							<div className="p-8 text-center">
								<h3 className="text-xl font-bold mb-4">Enterprise</h3>
								<p className="text-gray-600 mb-6">
									Tailored for high-traffic, multi-channel, or B2B operations requiring enterprise-grade functionality.
								</p>
								<div className="text-3xl font-bold text-indigo-600 mb-6">From $200,000</div>
								<ul className="space-y-3 mb-8 text-left">
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Advanced custom development
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Business logic automation
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Full system integrations
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Multi-store management
									</li>
									<li className="flex items-center">
										<FaCheckCircle className="text-green-500 mr-2" /> Dedicated support team
									</li>
								</ul>
								<a
									href="#contact"
									className="block w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
								>
									Get Started
								</a>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<p className="text-gray-600 mb-4">
							Need a custom solution? Tell us about your project and we'll prepare a tailored quote.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Request a Custom Quote
							<FaArrowRight className="ml-2" />
						</a>
					</div>
				</div>
			</section>

			{/* Case Studies Section */}
			<section id="case-study" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Our Case Studies</h2>
						<p className="text-xl text-gray-700 max-w-3xl mx-auto">
							Explore how we've helped businesses succeed by transforming their ideas into reality.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						{/* Case Study 1 */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<img src="https://via.placeholder.com/600x400" alt="Case Study 1" className="w-full h-56 object-cover" />
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-4">Ecommerce Development</h3>
								<p className="text-gray-700 mb-4">
									We helped an online retailer build a fully functional eCommerce platform, increasing their sales by
									30%.
								</p>
								<Link
									href="/service/ecommerce-development"
									className="text-indigo-600 hover:text-indigo-500 font-medium"
								>
									Read More →
								</Link>
							</div>
						</div>

						{/* Case Study 2 */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<img src="https://via.placeholder.com/600x400" alt="Case Study 2" className="w-full h-56 object-cover" />
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-4">Custom Development</h3>
								<p className="text-gray-700 mb-4">
									Our team created a tailored solution for a client, allowing them to streamline their business
									operations.
								</p>
								<a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
									Read More →
								</a>
							</div>
						</div>

						{/* Case Study 3 */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<img src="https://via.placeholder.com/600x400" alt="Case Study 3" className="w-full h-56 object-cover" />
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-4">Growth & Optimization</h3>
								<p className="text-gray-700 mb-4">
									By optimizing digital marketing strategies, we helped our client double their customer base in 6
									months.
								</p>
								<a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
									Read More →
								</a>
							</div>
						</div>
					</div>

					{/* View All Button */}
					<div className="text-center">
						<a
							href="/case-studies"
							className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
						>
							View All Case Studies
						</a>
					</div>
				</div>
			</section>

			{/* Success Stories */}
			<section id="portfolio" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							See how we've helped brands achieve remarkable growth
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Case Study 1 */}
						<div className="rounded-xl overflow-hidden shadow-lg group">
							<div className="relative overflow-hidden h-64">
								<img
									src="https://images.unsplash.com/photo-1556740738-b6a63ed27c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
									alt="Case Study"
									className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-75 transition duration-300 flex items-center justify-center">
									<span className="text-white font-bold text-lg">View Case Study</span>
								</div>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold">Luxe Skincare</h3>
									<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">+320% ROAS</span>
								</div>
								<p className="text-gray-600 mb-4">
									Premium skincare brand scaled from $50k to $500k/month in 6 months through our full-funnel marketing
									strategy.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Shopify Plus</span>
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Facebook Ads</span>
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Email Flows</span>
								</div>
							</div>
						</div>

						{/* Case Study 2 */}
						<div className="rounded-xl overflow-hidden shadow-lg group">
							<div className="relative overflow-hidden h-64">
								<img
									src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
									alt="Case Study"
									className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-75 transition duration-300 flex items-center justify-center">
									<span className="text-white font-bold text-lg">View Case Study</span>
								</div>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold">UrbanTech</h3>
									<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">+180% Revenue</span>
								</div>
								<p className="text-gray-600 mb-4">
									Tech accessories brand increased conversion rate by 42% through our UX redesign and CRO strategy.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">BigCommerce</span>
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Google Ads</span>
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">A/B Testing</span>
								</div>
							</div>
						</div>

						{/* Case Study 3 */}
						<div className="rounded-xl overflow-hidden shadow-lg group">
							<div className="relative overflow-hidden h-64">
								<img
									src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
									alt="Case Study"
									className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-75 transition duration-300 flex items-center justify-center">
									<span className="text-white font-bold text-lg">View Case Study</span>
								</div>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold">PureFit Nutrition</h3>
									<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">+400% Subscribers</span>
								</div>
								<p className="text-gray-600 mb-4">
									Health supplement company grew email list by 400% and increased repeat purchase rate by 65%.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Shopify</span>
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Klaviyo</span>
									<span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">SMS Marketing</span>
								</div>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<a
							href="#"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
						>
							View All Case Studies
							<i className="fas fa-arrow-right ml-2"></i>
						</a>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Answers to common questions about our eCommerce services
						</p>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="space-y-4">
							{faqItems.map((item, index) => (
								<div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
									<button
										onClick={() => toggleFAQ(index)}
										className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
									>
										<h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
										<i
											className={`fas fa-chevron-down text-indigo-600 transition-transform duration-200 ${
												activeIndex === index ? 'transform rotate-180' : ''
											}`}
										></i>
									</button>
									<div className={`faq-content ${activeIndex === index ? 'block' : 'hidden'} px-6 pb-6`}>
										<p className="text-gray-600">{item.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">Got a Project in Mind?</h2>
							<p className="text-xl text-indigo-100 max-w-3xl mx-auto">
								Our experts are ready to make it happen. Share with us now!
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg overflow-hidden">
							<div className="grid grid-cols-1 md:grid-cols-2">
								<div className="p-8 md:p-12 bg-indigo-700">
									<h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
									<div className="space-y-6">
										<div className="flex items-start">
											<div className="flex-shrink-0 mt-1 text-indigo-300">
												<i className="fas fa-envelope text-xl"></i>
											</div>
											<div className="ml-4">
												<h4 className="font-bold">Email Us</h4>
												<a href="mailto:hello@ecomreflex.com" className="text-indigo-200 hover:text-white">
													hello@ecomreflex.com
												</a>
											</div>
										</div>

										<div className="flex items-start">
											<div className="flex-shrink-0 mt-1 text-indigo-300">
												<i className="fas fa-phone-alt text-xl"></i>
											</div>
											<div className="ml-4">
												<h4 className="font-bold">Call Us</h4>
												<a href="tel:+18005551234" className="text-indigo-200 hover:text-white">
													+1 (800) 555-1234
												</a>
											</div>
										</div>

										<div className="flex items-start">
											<div className="flex-shrink-0 mt-1 text-indigo-300">
												<i className="fas fa-map-marker-alt text-xl"></i>
											</div>
											<div className="ml-4">
												<h4 className="font-bold">Visit Us</h4>
												<p className="text-indigo-200">
													123 Commerce St, Suite 500
													<br />
													San Francisco, CA 94107
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="p-8 md:p-12">
									<form id="contactForm" className="space-y-4">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
													First Name*
												</label>
												<input
													type="text"
													id="firstName"
													name="firstName"
													required
													className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
											<div>
												<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
													Last Name*
												</label>
												<input
													type="text"
													id="lastName"
													name="lastName"
													required
													className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
												/>
											</div>
										</div>

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

										<div>
											<label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
												Service Interest*
											</label>
											<select
												id="service"
												name="service"
												required
												className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
											>
												<option value="">Select a service</option>
												<option value="ecommerce-development">Ecommerce Development</option>
												<option value="migration-integration">Migration & Integration</option>
												<option value="audit-analysis">Audit & Analysis</option>
												<option value="growth-optimization">Growth & Optimization</option>
												<option value="support-maintenance">Support & Maintenance</option>
												<option value="custom-development">Custom Development</option>
											</select>
										</div>

										<div>
											<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
												Project Details*
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
													I agree to the
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
					</div>
				</div>
			</section>
		</>
	);
}

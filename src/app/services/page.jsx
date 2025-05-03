import Head from 'next/head';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {FaLaptopCode, FaExchangeAlt, FaSearch, FaChartLine, FaCogs, FaCode} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export default function ServicesPage() {
	const services = [
		{
			title: 'eCommerce Development',
			description:
				'We specialize in creating custom online stores that are tailored to your brand and business needs. Our development process focuses on creating mobile-responsive, SEO-optimized storefronts with intuitive user experiences and secure checkout systems.',
			features: [
				'Custom storefront design and development',
				'Mobile-first responsive design',
				'SEO-optimized architecture',
				'Secure payment gateways integration',
				'Product catalog setup and management',
				'Checkout optimization',
			],
			platforms: ['Shopify', 'Shopify Plus', 'Magento', 'WooCommerce', 'BigCommerce', 'Custom Solutions'],
			icon: FaLaptopCode,
			iconColor: 'bg-indigo-100 text-indigo-600',
			image:
				'https://images.unsplash.com/photo-1556740738-b6a63ed27c26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
			cta: 'Start Your Project',
			detailLink: '/services/ecommerce-development',
			ctaLink: 'contact.html',
		},
		{
			title: 'Migration & Integration',
			description:
				'Our migration experts ensure smooth transitions between platforms while maintaining data integrity and minimizing downtime. We also integrate all the essential tools your business needs to operate efficiently.',
			features: [
				'Platform-to-platform migrations',
				'Data migration (products, customers, orders)',
				'ERP system integrations',
				'CRM integrations (Salesforce, HubSpot)',
				'Payment gateway connections',
				'Shipping and fulfillment system integrations',
				'Custom API development',
			],
			icon: FaExchangeAlt,
			iconColor: 'bg-purple-100 text-purple-600',
			image:
				'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
			cta: 'Discuss Your Migration',
			detailLink: '/services/ecommerce-migration-and-integration',
			ctaLink: 'contact.html',
		},
		{
			title: 'Audit & Analysis',
			description:
				"Our comprehensive audits identify performance bottlenecks, security vulnerabilities, and growth opportunities in your eCommerce operation. We provide actionable insights to improve your store's performance.",
			features: [
				'Technical performance audit',
				'UX/UI design review',
				'Page speed analysis',
				'SEO health check',
				'Mobile responsiveness evaluation',
				'Conversion funnel analysis',
				'Security assessment',
				'Competitive benchmarking',
			],
			icon: FaSearch,
			iconColor: 'bg-blue-100 text-blue-600',
			image:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
			cta: 'Request an Audit',
			detailLink: '/services/audit-and-analysis',
			ctaLink: 'contact.html',
		},
		{
			title: 'Growth & Optimization',
			description:
				'We help you scale through data-led strategies that improve conversion rates, increase average order value, and boost customer retention.',
			features: [
				'Conversion rate optimization (CRO)',
				'A/B and multivariate testing',
				'Cart abandonment recovery',
				'Customer retention strategies',
				'Upsell and cross-sell implementation',
				'Personalization and recommendation engines',
				'Analytics and tracking setup',
				'Performance marketing integration',
			],
			icon: FaChartLine,
			iconColor: 'bg-green-100 text-green-600',
			image:
				'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
			cta: 'Optimize Your Store',
			detailLink: '/services/growth-and-optimization',
			ctaLink: 'contact.html',
		},
		{
			title: 'Support & Maintenance',
			description:
				'Your eCommerce store requires ongoing care to perform at its best. Our support packages ensure your store remains secure, up-to-date, and fully functional at all times.',
			features: [
				'24/7 monitoring and incident response',
				'Regular maintenance and updates',
				'Bug fixes and troubleshooting',
				'Performance optimization',
				'Security patches and enhancements',
				'Backup management',
				'Content updates',
				'Dedicated support team',
			],
			icon: FaCogs,
			iconColor: 'bg-yellow-100 text-yellow-600',
			image:
				'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
			cta: 'Explore Support Plans',
			detailLink: '/services/support-and-maintenance',
			ctaLink: 'contact.html',
		},
		{
			title: 'Custom Development',
			description:
				"When off-the-shelf solutions don't meet your needs, our custom development services can create exactly what your business requires to operate efficiently and stand out from competitors.",
			features: [
				'Custom Magento modules',
				'WooCommerce plugin development',
				'Tailor-made APIs',
				'Advanced product configuration tools',
				'Custom checkout flows',
				'Subscription and membership systems',
				'Headless commerce solutions',
				'Progressive Web Apps (PWAs)',
			],
			icon: FaCode,
			iconColor: 'bg-red-100 text-red-600',
			image:
				'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
			cta: 'Discuss Custom Needs',
			detailLink: '/services/custom-development',
			ctaLink: 'contact.html',
		},
	];

	return (
		<>
			<Head>
				<title>Our eCommerce Services | EcomReflex</title>
				<meta
					name="description"
					content="Comprehensive solutions to build, optimize, and scale your online store for maximum performance and growth."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Our eCommerce Services</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Comprehensive solutions to build, optimize, and scale your online store for maximum performance and
							growth.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
						>
							Get Free Consultation <FaArrowRight className="ml-2" />
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End eCommerce Solutions</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							From initial setup to ongoing optimization, we provide everything your online business needs to succeed.
						</p>
					</div>

					{services.map((service, index) => (
						<div
							key={index}
							className={`flex flex-col lg:flex-row items-center mb-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
						>
							<div className="lg:w-1/2 mb-10 lg:mb-0 lg:px-10">
								<div className={`w-16 h-16 ${service.iconColor} rounded-lg flex items-center justify-center mb-6`}>
									<service.icon className="text-2xl" />
								</div>
								<h3 className="text-2xl font-bold mb-4">{service.title}</h3>
								<p className="text-gray-600 mb-6">{service.description}</p>
								<ul className="service-feature-list mb-8">
									{service.features.map((feature, fIdx) => (
										<li key={fIdx}>{feature}</li>
									))}
								</ul>

								{service.platforms && (
									<div className="mb-6">
										<h4 className="font-bold mb-2">Platforms we work with:</h4>
										<div className="flex flex-wrap gap-2">
											{service.platforms.map((platform, pIdx) => (
												<span
													key={pIdx}
													className="platform-badge inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
												>
													{platform}
												</span>
											))}
										</div>
									</div>
								)}

								<div className="flex gap-4">
									<a
										href={service.ctaLink}
										className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
									>
										{service.cta}
									</a>
									<a
										href={service.detailLink}
										className="inline-block border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition"
									>
										See Detail
									</a>
								</div>
							</div>

							<div className="lg:w-1/2">
								<img src={service.image} alt={service.title} className="rounded-lg shadow-xl w-full" />
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your eCommerce Business?</h2>
					<p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
						Whether you're launching a new store or optimizing an existing one, our team is ready to help you achieve
						your goals.
					</p>
					<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
						<a
							href="contact.html"
							className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
						>
							Get Free Consultation
						</a>
						<a
							href="tel:+18005551234"
							className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition flex items-center justify-center"
						>
							<FaPhoneAlt className="mr-2" /> Call Us Now
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

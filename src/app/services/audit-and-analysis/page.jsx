'use client';

import Head from 'next/head';
import React, {useState} from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import {FaTachometerAlt, FaShoppingCart, FaSearch, FaLock, FaMobileAlt, FaChartLine} from 'react-icons/fa';
import {FaFileAlt, FaChartPie, FaTasks, FaVideo} from 'react-icons/fa';
import {FaStore, FaHandHoldingUsd, FaCertificate, FaLightbulb, FaHeadset} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

const tabs = [
	{
		id: 'technical-audit',
		title: 'Technical Audit',
		color: 'emerald',
		heading: 'Technical eCommerce Audit',
		description: "A deep dive into your store's technical infrastructure...",
		items: [
			{
				title: 'Performance Analysis',
				desc: 'Page speed, load times, and resource optimization opportunities.',
			},
			{
				title: 'Security Assessment',
				desc: 'Vulnerability scanning and PCI compliance review.',
			},
			{
				title: 'Mobile Optimization',
				desc: 'Responsive design evaluation and mobile UX assessment.',
			},
			{
				title: 'Checkout Process Review',
				desc: 'Payment gateway configuration and funnel optimization.',
			},
		],
		button: 'Get Technical Audit',
		link: '/contact',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
	},
	{
		id: 'conversion-audit',
		title: 'Conversion Audit',
		color: 'blue',
		heading: 'Conversion Rate Optimization Audit',
		description: "Identify why visitors aren't converting and discover opportunities to improve UX and funnel.",
		items: [
			{
				title: 'User Journey Analysis',
				desc: 'Heatmaps, session recordings, and funnel drop-off points.',
			},
			{
				title: 'Value Proposition Evaluation',
				desc: 'Messaging clarity, trust signals, and USPs.',
			},
			{
				title: 'Product Page Optimization',
				desc: 'Images, descriptions, reviews, and CTA effectiveness.',
			},
			{
				title: 'Cart & Checkout Review',
				desc: 'Abandonment factors and purchase friction points.',
			},
		],
		button: 'Get Conversion Audit',
		link: '/contact',
		image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
	},
	{
		id: 'seo-audit',
		title: 'SEO Audit',
		color: 'purple',
		heading: 'eCommerce SEO Audit',
		description: 'Comprehensive analysis of search visibility, content strategy, and technical SEO factors.',
		items: [
			{
				title: 'Keyword Strategy',
				desc: 'Product page optimization and category structure.',
			},
			{
				title: 'Technical SEO Factors',
				desc: 'Indexation, crawlability, schema, and structure.',
			},
			{
				title: 'Content Quality',
				desc: 'Duplicate content, thin content, and improvement areas.',
			},
			{
				title: 'Backlink Profile',
				desc: 'Link quality and toxic backlink identification.',
			},
		],
		button: 'Get SEO Audit',
		link: '/contact',
		image: 'https://images.unsplash.com/photo-1556740738-b6a63ed27c26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
	},
	{
		id: 'full-audit',
		title: 'Full Store Audit',
		color: 'red',
		heading: 'Full eCommerce Store Audit',
		description: 'Our most comprehensive audit with technical, SEO, CRO + growth strategy.',
		items: [
			{
				title: 'Complete Technical Review',
				desc: 'Includes server config and infrastructure checks.',
			},
			{
				title: 'In-Depth CRO Analysis',
				desc: 'Includes A/B testing and user testing feedback.',
			},
			{
				title: 'Comprehensive SEO Audit',
				desc: 'Gap analysis, competitor comparison, content strategy.',
			},
			{
				title: 'Growth Strategy Roadmap',
				desc: '12-month plan with actionable steps.',
			},
		],
		button: 'Get Full Store Audit',
		link: '/contact',
		image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
	},
];

const features = [
	{
		title: 'Performance Metrics',
		description:
			'Page load times, Core Web Vitals, mobile performance scores, and resource optimization recommendations.',
		icon: <FaTachometerAlt className="text-emerald-600 text-2xl" />,
		bgColor: 'bg-emerald-100',
	},
	{
		title: 'Conversion Funnel',
		description: 'Analysis of visitor behavior through product discovery, cart addition, and checkout completion.',
		icon: <FaShoppingCart className="text-blue-600 text-2xl" />,
		bgColor: 'bg-blue-100',
	},
	{
		title: 'SEO Health Check',
		description: 'Technical SEO factors, content optimization, backlink profile, and keyword opportunities.',
		icon: <FaSearch className="text-purple-600 text-2xl" />,
		bgColor: 'bg-purple-100',
	},
	{
		title: 'Security Assessment',
		description: 'Vulnerability scanning, PCI compliance check, and data protection measures review.',
		icon: <FaLock className="text-red-600 text-2xl" />,
		bgColor: 'bg-red-100',
	},
	{
		title: 'Mobile Experience',
		description: 'Responsive design evaluation, touch target sizing, and mobile-specific UX issues.',
		icon: <FaMobileAlt className="text-yellow-600 text-2xl" />,
		bgColor: 'bg-yellow-100',
	},
	{
		title: 'Competitive Benchmarking',
		description: 'Comparison against top competitors in your vertical for performance and features.',
		icon: <FaChartLine className="text-indigo-600 text-2xl" />,
		bgColor: 'bg-indigo-100',
	},
];

const reasons = [
	{
		title: 'eCommerce Specialists',
		description:
			'Unlike general digital agencies, we focus exclusively on eCommerce and understand the unique challenges of online stores.',
		icon: <FaStore className="text-emerald-600 text-2xl" />,
	},
	{
		title: 'Data-Driven Approach',
		description:
			'Our recommendations are based on quantitative data from your analytics and qualitative user experience analysis.',
		icon: <FaChartLine className="text-blue-600 text-2xl" />,
	},
	{
		title: 'ROI-Focused',
		description: 'We prioritize recommendations based on potential revenue impact and implementation complexity.',
		icon: <FaHandHoldingUsd className="text-purple-600 text-2xl" />,
	},
	{
		title: 'Platform Expertise',
		description: 'Certified experts in Shopify Plus, Magento, WooCommerce, and headless commerce solutions.',
		icon: <FaCertificate className="text-red-600 text-2xl" />,
	},
	{
		title: 'Actionable Insights',
		description: 'Clear, practical recommendations you can implement immediately or through our development team.',
		icon: <FaLightbulb className="text-yellow-600 text-2xl" />,
	},
	{
		title: 'Ongoing Support',
		description: 'Optional implementation support and follow-up audits to measure improvement impact.',
		icon: <FaHeadset className="text-indigo-600 text-2xl" />,
	},
];

const deliverables = [
	{
		title: 'Detailed Audit Report',
		description:
			'50-100 page PDF with screenshots, data visualizations, and clear explanations of all findings organized by priority level.',
		icon: <FaFileAlt className="text-emerald-600 text-2xl" />,
	},
	{
		title: 'Executive Summary',
		description: '5-10 page overview highlighting key opportunities and estimated business impact for decision-makers.',
		icon: <FaChartPie className="text-blue-600 text-2xl" />,
	},
	{
		title: 'Implementation Roadmap',
		description:
			'Prioritized action plan with quick wins, medium-term improvements, and long-term strategic initiatives.',
		icon: <FaTasks className="text-purple-600 text-2xl" />,
	},
	{
		title: 'Video Walkthrough',
		description: 'Recorded video explanation of key findings and recommendations from our lead analyst.',
		icon: <FaVideo className="text-red-600 text-2xl" />,
	},
];

const caseStudies = [
	{
		title: 'Fashion Retailer',
		description:
			'Identified $240k/year in lost revenue from mobile checkout issues and improved conversion rate by 22%.',
		image:
			'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		link: '#',
	},
	{
		title: 'Home Goods Store',
		description: 'SEO audit uncovered 68% increase potential in organic traffic through content optimization.',
		image:
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		link: '#',
	},
	{
		title: 'B2B Industrial Supplier',
		description: 'Technical audit reduced page load time by 3.2 seconds, decreasing bounce rate by 37%.',
		image:
			'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		link: '#',
	},
];

const faqs = [
	{
		question: 'How long does an eCommerce audit take?',
		answer:
			'Most audits are completed within 2-3 weeks from project kickoff. The timeline depends on the audit type and store complexity. Technical audits tend to be fastest (1-2 weeks), while full comprehensive audits typically take 3-4 weeks. We provide a detailed timeline during our initial consultation.',
	},
	{
		question: 'What access do you need to perform the audit?',
		answer:
			'Requirements vary by audit type. At minimum, we need read-only access to your Google Analytics, Google Search Console, and eCommerce platform backend. For more technical audits, we may require staging site access or limited FTP access. We only request the minimum access needed and follow strict security protocols.',
	},
	{
		question: 'Can you help implement the recommendations?',
		answer:
			'Yes! Many clients choose our implementation services after receiving their audit report. We offer both full implementation of all recommendations and selective implementation of specific high-impact items. Our audit reports are also designed to be actionable for your internal team if you prefer to handle implementation yourself.',
	},
	{
		question: 'How do you measure the impact of your recommendations?',
		answer:
			"For each recommendation, we provide an estimated impact range based on similar implementations we've done for other clients. After implementation, we can conduct follow-up measurements to quantify the actual improvement in metrics like conversion rate, page speed, or organic traffic. Many clients opt for our 6-month follow-up mini-audit to measure results.",
	},
	{
		question: 'Do you audit paid advertising performance?',
		answer:
			'Our standard audits focus on your owned channels (website, SEO, etc.), but we offer a specialized PPC audit as an add-on service. This examines your advertising accounts, landing pages, conversion tracking, and overall paid media strategy. The PPC audit provides recommendations to improve ROAS and lower customer acquisition costs.',
	},
	{
		question: 'What makes your audits different from automated tools?',
		answer:
			'While we use automated tools as part of our process, our audits combine technology with human expertise. Our analysts interpret the data in the context of your specific business, prioritize findings based on potential impact, and provide tailored recommendations. We also identify issues that tools often miss, particularly in user experience and conversion optimization.',
	},
];

export default function AuditAndAnalysisPage() {
	const [activeTab, setActiveTab] = useState('technical-audit');
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const activeData = tabs.find((tab) => tab.id === activeTab);
	return (
		<>
			<Head>
				<title>Audit And Analysis</title>
				<meta name="description" content="Audit And Analysis" />
			</Head>

			{/* Hero Section */}
			<section class="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
				<div class="container mx-auto px-4 py-20 md:py-28">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">eCommerce Audit & Analysis Services</h1>
						<p class="text-xl text-blue-100 mb-8">
							Uncover hidden opportunities and fix critical issues with our comprehensive eCommerce store audits. Get
							actionable insights to boost conversions, improve performance, and accelerate growth.
						</p>
						<div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#audit-types"
								class="bg-white text-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Explore Audit Types
							</a>
							<a
								href="#audit-process"
								class="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-emerald-600 transition text-center"
							>
								Our Process
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
							{/* Left Column */}
							<div>
								<h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven Insights for Your eCommerce Growth</h2>
								<p className="text-xl text-gray-600 mb-6">
									Most online stores are leaving money on the table due to undetected technical issues, UX problems, and
									missed optimization opportunities. Our audits identify exactly what's holding your store back and how
									to fix it.
								</p>

								<div className="space-y-4">
									{/* Feature 1 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-emerald-600 mr-4">
											<FaCheckCircle />
										</div>
										<div>
											<h3 className="text-lg font-bold">Comprehensive Technical Review</h3>
											<p className="text-gray-600">
												We examine your store&apos;s architecture, performance, and technical SEO factors.
											</p>
										</div>
									</div>

									{/* Feature 2 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-emerald-600 mr-4">
											<FaCheckCircle />
										</div>
										<div>
											<h3 className="text-lg font-bold">Conversion Rate Analysis</h3>
											<p className="text-gray-600">
												Identify UX friction points that prevent visitors from becoming customers.
											</p>
										</div>
									</div>

									{/* Feature 3 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1 text-emerald-600 mr-4">
											<FaCheckCircle />
										</div>
										<div>
											<h3 className="text-lg font-bold">Actionable Recommendations</h3>
											<p className="text-gray-600">Clear, prioritized steps to improve performance and revenue.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column - Image */}
							<div className="bg-gray-50 p-6 rounded-xl shadow-lg">
								<img
									src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
									alt="eCommerce Audit"
									className="rounded-lg w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Audit Types */}
			<section id="audit-types" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Audit Types</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Choose the audit that matches your needs or combine multiple for a complete picture of your store's
							health.
						</p>
					</div>

					<div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								className={`tab-btn px-6 py-3 font-medium border-b-2 transition ${
									activeTab === tab.id
										? `text-${tab.color}-600 border-${tab.color}-500`
										: `text-gray-600 hover:text-${tab.color}-600 hover:border-${tab.color}-300 border-transparent`
								}`}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.title}
							</button>
						))}
					</div>

					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-bold mb-4">{activeData.heading}</h3>
								<p className="text-gray-600 mb-6">{activeData.description}</p>
								<div className="space-y-4">
									{activeData.items.map((item, index) => (
										<div className="flex items-start" key={index}>
											<div className={`flex-shrink-0 mt-1 text-${activeData.color}-600 mr-4`}>
												<FaCheckCircle className="w-5 h-5" />
											</div>
											<div>
												<h4 className="font-bold">{item.title}</h4>
												<p className="text-gray-600">{item.desc}</p>
											</div>
										</div>
									))}
								</div>
								<a
									href={activeData.link}
									className={`inline-block mt-6 bg-${activeData.color}-600 text-white px-6 py-3 rounded-md font-medium hover:bg-${activeData.color}-700 transition`}
								>
									{activeData.button}
								</a>
							</div>
							<div className="bg-white p-6 rounded-xl shadow-md">
								<img src={activeData.image} alt={activeData.title} className="rounded-lg w-full h-auto" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Audit Process */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Our Audits</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Detailed analysis across all critical aspects of your eCommerce operation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{features.map((feature, index) => (
							<div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md transition duration-300">
								<div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold mb-3">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Deliverables */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Receive</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Comprehensive deliverables designed for both technical teams and business stakeholders.
						</p>
					</div>

					<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
						{deliverables.map((item, index) => (
							<div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md">
								<div className="flex items-start">
									<div className="flex-shrink-0 mt-1 mr-4">{item.icon}</div>
									<div>
										<h3 className="text-xl font-bold mb-3">{item.title}</h3>
										<p className="text-gray-600">{item.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose eComReflex */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose eComReflex for Your Audit?</h2>
						<p className="text-xl text-gray-600">
							We go beyond surface-level analysis to deliver truly actionable insights.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{reasons.map((item, index) => (
							<div key={index} className="bg-white p-8 rounded-xl shadow-md">
								<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
									{item.icon}
								</div>
								<h3 className="text-xl font-bold mb-3">{item.title}</h3>
								<p className="text-gray-600">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Case Studies */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Audit Success Stories</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							See how our audits have helped businesses uncover growth opportunities.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{caseStudies.map((caseStudy, index) => (
							<div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
								<img src={caseStudy.image} alt="Case Study" className="w-full h-48 object-cover" />
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
									<p className="text-gray-600 mb-4">{caseStudy.description}</p>
									<a
										href={caseStudy.link}
										className="text-emerald-600 font-medium hover:text-emerald-800 flex items-center"
									>
										Read Case Study <FaArrowRight className="ml-2" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Audit & Analysis FAQs</h2>
							<p className="text-xl text-gray-600">Answers to common questions about our eCommerce audit services.</p>
						</div>

						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
									<button
										onClick={() => toggleFaq(index)}
										className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
									>
										<h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
										<FaChevronDown
											className={`${
												openIndex === index ? 'transform rotate-180' : ''
											} text-emerald-600 transition-transform duration-200`}
										/>
									</button>
									{openIndex === index && (
										<div className="px-6 pb-6">
											<p className="text-gray-600">{faq.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-emerald-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Uncover Your Store's Hidden Potential?</h2>
						<p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
							Our audits reveal exactly what's holding your store back and how to fix it. Get started with a free
							consultation.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="contact.html"
								className="bg-white text-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Get a Free Consultation
							</a>
							<a
								href="tel:+18005551234"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-emerald-600 transition text-center"
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

'use client';

import Head from 'next/head';
import Link from 'next/link';
import React, {useState} from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export default function SuccessStoriesPage() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filters = [
		{label: 'All Projects', value: 'all'},
		{label: 'Shopify', value: 'shopify'},
		{label: 'Magento', value: 'magento'},
		{label: 'WooCommerce', value: 'woocommerce'},
		{label: 'BigCommerce', value: 'bigcommerce'},
		{label: 'Fashion', value: 'fashion'},
		{label: 'Electronics', value: 'electronics'},
		{label: 'Health & Beauty', value: 'health'},
		{label: 'Home Goods', value: 'home'},
		{label: 'Food & Beverage', value: 'food'},
	];

	const handleFilterClick = (value) => {
		setActiveFilter(value);
	};

	const portfolioItems = [
		{
			id: 1,
			title: 'Luxe Fashion',
			image:
				'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
			growth: '+320% revenue growth',
			tag: '+320% ROAS',
			description:
				'Premium fashion brand scaled from $50k to $500k/month in 6 months through our full-funnel strategy.',
			badges: ['Shopify Plus', 'Facebook Ads', 'Email Flows'],
			category: 'shopify fashion',
		},
		{
			id: 2,
			title: 'TechGadgets',
			image:
				'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
			growth: '+180% mobile conversions',
			tag: '+180% Revenue',
			description: 'Electronics retailer increased conversion rate by 42% through our UX redesign and CRO strategy.',
			badges: ['Magento 2', 'Google Ads', 'A/B Testing'],
			category: 'magento electronics',
		},
		{
			id: 3,
			title: 'PureGlow',
			image:
				'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
			growth: '+400% subscribers',
			tag: '+400% Subscribers',
			description: 'Skincare brand grew email list by 400% and increased repeat purchase rate by 65%.',
			badges: ['WooCommerce', 'Klaviyo', 'SMS Marketing'],
			category: 'woocommerce health',
		},
		{
			id: 4,
			title: 'HomeHaven',
			image:
				'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
			growth: '3x average order value',
			tag: '3x AOV',
			description: 'Home decor retailer tripled average order value through our bundling and upsell strategies.',
			badges: ['BigCommerce', 'Product Bundles', 'AR Visualization'],
			category: 'bigcommerce home',
		},
		{
			id: 5,
			title: 'FreshBites',
			image:
				'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
			growth: '90% cart recovery',
			tag: '90% Recovery',
			description: 'Organic meal delivery service recovered 90% of abandoned carts through our automation flows.',
			badges: ['Shopify', 'Subscription Model', 'Cart Recovery'],
			category: 'shopify food',
		},
		{
			id: 6,
			title: 'UrbanThreads',
			image:
				'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
			growth: '5x international sales',
			tag: '5x Global',
			description: 'Streetwear brand expanded internationally with 5x sales growth in new markets.',
			badges: ['Magento', 'Multi-Currency', 'Global Shipping'],
			category: 'magento fashion',
		},
	];

	const filteredItems =
		activeFilter === 'all' ? portfolioItems : portfolioItems.filter((item) => item.category.includes(activeFilter));

	return (
		<>
			<Head>
				<title>Success Stories</title>
				<meta
					name="description"
					content="Explore how NexaSuite solutions helped businesses achieve remarkable results through our case studies and success stories."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Our eCommerce Portfolio</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Explore our successful eCommerce projects that have driven real results for our clients
						</p>
						<div className="flex justify-center">
							<a
								href="#portfolio"
								className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
							>
								View Projects
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Filters */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">Featured Work</h2>
					<p className="text-gray-600 max-w-2xl mx-auto mb-8">
						Filter by platform or industry to see relevant case studies
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						{filters.map((filter) => (
							<button
								key={filter.value}
								onClick={() => handleFilterClick(filter.value)}
								className={`px-4 py-2 rounded-full border border-gray-300 hover:bg-indigo-100 transition ${
									activeFilter === filter.value ? 'bg-indigo-100 text-indigo-700' : ''
								}`}
							>
								{filter.label}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Portfolio Grid */}
			<section id="portfolio" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredItems.map((item) => (
							<div key={item.id} className="rounded-xl shadow-md overflow-hidden">
								<div className="relative h-64 overflow-hidden">
									<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
									<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
										<h3 className="text-xl font-bold">{item.title}</h3>
										<p className="text-indigo-100">{item.growth}</p>
									</div>
								</div>
								<div className="p-6">
									<div className="flex justify-between items-start mb-2">
										<h3 className="text-xl font-bold">{item.title}</h3>
										<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{item.tag}</span>
									</div>
									<p className="text-gray-600 mb-4">{item.description}</p>
									<div className="flex flex-wrap gap-2">
										{item.badges.map((badge, idx) => (
											<span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
												{badge}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-12">
						<Link
							href="/get-started"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Ready to Start Your Project?
							<FaArrowRight className="ml-2" />
						</Link>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Don't just take our word for it - hear from businesses we've helped grow
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Testimonial 1 */}
						<TestimonialCard
							image="https://randomuser.me/api/portraits/women/43.jpg"
							name="Sarah Johnson"
							position="CEO, Luxe Fashion"
							text="EcomReflex transformed our online store from outdated to cutting-edge. Our revenue increased by 320% within 6 months of launch, and their ongoing support has been invaluable."
						/>

						{/* Testimonial 2 */}
						<TestimonialCard
							image="https://randomuser.me/api/portraits/men/32.jpg"
							name="Michael Chen"
							position="Director, TechGadgets"
							text="The team's attention to detail and strategic approach to UX design helped us nearly double our conversion rate. They truly understand eCommerce best practices."
						/>

						{/* Testimonial 3 */}
						<TestimonialCard
							image="https://randomuser.me/api/portraits/women/65.jpg"
							name="Amanda Rodriguez"
							position="Ecommerce Manager, UrbanThreads"
							text="From migration to ongoing optimization, EcomReflex has been a trusted partner. Their ability to solve complex technical challenges is unmatched in the industry."
						/>
					</div>
				</div>
			</section>

			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your eCommerce Business?</h2>
						<p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
							Let's discuss how we can help you achieve similar results
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<Link
								href="/contact"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
							>
								Get Free Consultation
							</Link>
							<a
								href="tel:+18005551234"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition flex items-center justify-center"
							>
								<FaPhoneAlt className="mr-2" />
								Call Us Now
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function TestimonialCard({image, name, position, text}) {
	return (
		<div className="bg-white p-8 rounded-xl shadow-md">
			<div className="flex items-center mb-4 text-yellow-400">
				{[...Array(5)].map((_, idx) => (
					<FaStar key={idx} />
				))}
			</div>
			<p className="text-gray-600 mb-6 italic">"{text}"</p>
			<div className="flex items-center">
				<img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
				<div>
					<h4 className="font-bold">{name}</h4>
					<p className="text-gray-600 text-sm">{position}</p>
				</div>
			</div>
		</div>
	);
}

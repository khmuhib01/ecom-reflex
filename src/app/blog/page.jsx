import Head from 'next/head';
import React from 'react';
import {AiOutlineRead} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FaChartLine, FaCogs, FaSearchDollar, FaMobileAlt} from 'react-icons/fa';
import {FaArrowRight, FaArrowDown} from 'react-icons/fa';

export default function BlogPage() {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta name="description" content="EcomReflex Blog" />
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">EcomReflex Blog</h1>
						<p className="text-xl text-indigo-100 mb-8">
							Expert insights, strategies, and trends to help grow your eCommerce business
						</p>
						<div className="flex justify-center">
							<a
								href="#featured-posts"
								className=" bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition flex items-center justify-center"
							>
								<AiOutlineRead className="mr-2" /> Read Articles
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Posts */}
			<section id="featured-posts" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">Our most popular and recent eCommerce insights</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
						{/* Featured Post 1 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden lg:col-span-2">
							<div className="relative h-64 lg:h-80 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="eCommerce Trends"
									className="w-full h-full object-cover blog-image"
								/>
								<span className="category-badge">Trends</span>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>June 15, 2023</span>
									<span className="mx-2">•</span>
									<span>8 min read</span>
								</div>
								<h3 className="text-2xl font-bold mb-3">Top eCommerce Trends to Watch in 2023</h3>
								<p className="text-gray-600 mb-4">
									Discover the key trends shaping the eCommerce landscape this year and how to adapt your strategy to
									stay ahead of the competition.
								</p>
								<div className="flex flex-wrap mb-4">
									<span className="tag">Trends</span>
									<span className="tag">Strategy</span>
									<span className="tag">Innovation</span>
								</div>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <AiOutlineArrowRight className="ml-2" />
								</a>
							</div>
						</div>

						{/* Featured Post 2 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="Shopify Migration"
									className="w-full h-full object-cover blog-image"
								/>
								<span className="category-badge">How-To</span>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>May 28, 2023</span>
									<span className="mx-2">•</span>
									<span>6 min read</span>
								</div>
								<h3 className="text-2xl font-bold mb-3">The Complete Guide to Shopify Plus Migration</h3>
								<p className="text-gray-600 mb-4">
									Everything you need to know about migrating to Shopify Plus without losing traffic, SEO rankings, or
									customer data.
								</p>
								<div className="flex flex-wrap mb-4">
									<span className="tag">Shopify</span>
									<span className="tag">Migration</span>
									<span className="tag">How-To</span>
								</div>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <AiOutlineArrowRight className="ml-2" />
								</a>
							</div>
						</div>

						{/* Featured Post 3 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="CRO Strategies"
									className="w-full h-full object-cover blog-image"
								/>
								<span className="category-badge">Optimization</span>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>May 10, 2023</span>
									<span className="mx-2">•</span>
									<span>10 min read</span>
								</div>
								<h3 className="text-2xl font-bold mb-3">10 Proven CRO Strategies That Boosted Our Clients' Sales</h3>
								<p className="text-gray-600 mb-4">
									Learn the conversion rate optimization tactics that helped our clients increase revenue by an average
									of 42%.
								</p>
								<div className="flex flex-wrap mb-4">
									<span className="tag">CRO</span>
									<span className="tag">Optimization</span>
									<span className="tag">Case Study</span>
								</div>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <AiOutlineArrowRight className="ml-2" />
								</a>
							</div>
						</div>

						{/* Featured Post 4 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="Mobile Commerce"
									className="w-full h-full object-cover blog-image"
								/>
								<span className="category-badge">Mobile</span>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>April 22, 2023</span>
									<span className="mx-2">•</span>
									<span>7 min read</span>
								</div>
								<h3 className="text-2xl font-bold mb-3">Why Mobile Commerce is Dominating in 2023</h3>
								<p className="text-gray-600 mb-4">
									With mobile commerce expected to reach $620 billion this year, here's how to optimize your store for
									mobile shoppers.
								</p>
								<div className="flex flex-wrap mb-4">
									<span className="tag">Mobile</span>
									<span className="tag">UX</span>
									<span className="tag">Trends</span>
								</div>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <AiOutlineArrowRight className="ml-2" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Category Section */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">Explore our articles organized by topic</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
						{/* Category 1: Trends */}
						<a href="#" className="bg-white p-6 rounded-lg shadow-sm text-center hover:bg-indigo-50 transition">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
								<FaChartLine className="text-indigo-600 text-xl" />
							</div>
							<h3 className="font-bold mb-1">Trends</h3>
							<p className="text-gray-600 text-sm">12 Articles</p>
						</a>

						{/* Category 2: How-To */}
						<a href="#" className="bg-white p-6 rounded-lg shadow-sm text-center hover:bg-indigo-50 transition">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
								<FaCogs className="text-purple-600 text-xl" />
							</div>
							<h3 className="font-bold mb-1">How-To</h3>
							<p className="text-gray-600 text-sm">8 Articles</p>
						</a>

						{/* Category 3: CRO */}
						<a href="#" className="bg-white p-6 rounded-lg shadow-sm text-center hover:bg-indigo-50 transition">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
								<FaSearchDollar className="text-blue-600 text-xl" />
							</div>
							<h3 className="font-bold mb-1">CRO</h3>
							<p className="text-gray-600 text-sm">15 Articles</p>
						</a>

						{/* Category 4: Mobile */}
						<a href="#" className="bg-white p-6 rounded-lg shadow-sm text-center hover:bg-indigo-50 transition">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
								<FaMobileAlt className="text-green-600 text-xl" />
							</div>
							<h3 className="font-bold mb-1">Mobile</h3>
							<p className="text-gray-600 text-sm">7 Articles</p>
						</a>
					</div>
				</div>
			</section>

			{/* More Articles */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">More Articles</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">Additional eCommerce insights from our team</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Article 1 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden">
							<div className="relative h-48 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="SEO Strategies"
									className="w-full h-full object-cover blog-image"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>April 5, 2023</span>
									<span className="mx-2">•</span>
									<span>5 min read</span>
								</div>
								<h3 className="text-xl font-bold mb-3">Advanced SEO Strategies for eCommerce in 2023</h3>
								<p className="text-gray-600 mb-4">
									Beyond the basics: technical SEO tactics that will give your store a competitive edge this year.
								</p>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <FaArrowRight className="ml-2" />
								</a>
							</div>
						</div>

						{/* Article 2 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden">
							<div className="relative h-48 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="Email Marketing"
									className="w-full h-full object-cover blog-image"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>March 18, 2023</span>
									<span className="mx-2">•</span>
									<span>9 min read</span>
								</div>
								<h3 className="text-xl font-bold mb-3">The Ultimate Guide to eCommerce Email Marketing</h3>
								<p className="text-gray-600 mb-4">
									How to build flows that convert, from welcome series to post-purchase follow-ups.
								</p>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <FaArrowRight className="ml-2" />
								</a>
							</div>
						</div>

						{/* Article 3 */}
						<div className="blog-card rounded-xl shadow-md overflow-hidden">
							<div className="relative h-48 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="Headless Commerce"
									className="w-full h-full object-cover blog-image"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
									<span>March 2, 2023</span>
									<span className="mx-2">•</span>
									<span>11 min read</span>
								</div>
								<h3 className="text-xl font-bold mb-3">Is Headless Commerce Right for Your Business?</h3>
								<p className="text-gray-600 mb-4">
									We break down the pros, cons, and costs of headless eCommerce architectures.
								</p>
								<a
									href="blog-post.html"
									className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
								>
									Read more <FaArrowRight className="ml-2" />
								</a>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<a
							href="#"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Load More Articles
							<FaArrowDown className="ml-2" />
						</a>
					</div>
				</div>
			</section>

			{/* Newsletter */}
			<section className="py-20 bg-indigo-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Get eCommerce Insights Delivered to Your Inbox</h2>
						<p className="text-xl text-indigo-100 mb-8">
							Join 10,000+ eCommerce professionals who receive our weekly newsletter with the latest trends, tips, and
							strategies.
						</p>
						<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Your email address"
								className="flex-grow px-4 py-3 bg-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900 placeholder:text-indigo-200"
							/>
							<button
								type="submit"
								className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
							>
								Subscribe
							</button>
						</form>
						<p className="text-sm text-indigo-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
					</div>
				</div>
			</section>
		</>
	);
}

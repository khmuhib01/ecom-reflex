import Head from 'next/head';
import React from 'react';
import {FaChartLine, FaCogs, FaUsers, FaCheck} from 'react-icons/fa';
import {FaSearchDollar, FaTachometerAlt, FaShoppingCart, FaRandom} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export default function SolutionsPage() {
	return (
		<>
			<Head>
				<title>Solutions | EcomReflex - Tailored Strategies for Growth</title>
				<meta
					name="description"
					content="Comprehensive eCommerce solutions to drive growth, optimize performance, and maximize ROI. We solve your biggest online store challenges with proven strategies."
				/>
			</Head>

			{/* Hero Section */}
			<section className="hero-gradient text-white">
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
							eCommerce Solutions for Sustainable Growth
						</h1>
						<p className="text-xl text-blue-100 mb-8">
							We solve your biggest eCommerce challenges with data-driven strategies tailored to your business.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="#solutions"
								className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center"
							>
								Explore Solutions
							</a>
							<a
								href="#challenges"
								className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition text-center"
							>
								Common Challenges
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Solutions Section */}
			<section id="solutions" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our eCommerce Solutions</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Tailored strategies to drive traffic, conversions, and customer loyalty.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Solution 1 */}
						<div className="solution-card bg-white p-8 rounded-xl shadow-md transition duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaChartLine className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Growth Acceleration</h3>
							<p className="text-gray-600 mb-4">Scalable strategies to increase traffic, conversions, and revenue.</p>
							<ul className="space-y-2 text-gray-600">
								{[
									'SEO & content marketing',
									'Conversion rate optimization',
									'Paid media strategy',
									'Customer retention programs',
								].map((item, index) => (
									<li className="flex items-start" key={index}>
										<FaCheck className="text-blue-500 mr-2 mt-1" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Solution 2 */}
						<div className="solution-card bg-white p-8 rounded-xl shadow-md transition duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaCogs className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Technical Optimization</h3>
							<p className="text-gray-600 mb-4">Maximize site performance, security, and scalability.</p>
							<ul className="space-y-2 text-gray-600">
								{[
									'Platform migrations',
									'Core Web Vitals optimization',
									'Security hardening',
									'API & integration management',
								].map((item, index) => (
									<li className="flex items-start" key={index}>
										<FaCheck className="text-blue-500 mr-2 mt-1" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Solution 3 */}
						<div className="solution-card bg-white p-8 rounded-xl shadow-md transition duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<FaUsers className="text-blue-600 text-2xl" />
							</div>
							<h3 className="text-xl font-bold mb-3">Customer Experience</h3>
							<p className="text-gray-600 mb-4">Create seamless journeys that boost loyalty and LTV.</p>
							<ul className="space-y-2 text-gray-600">
								{[
									'UX/UI optimization',
									'Personalization strategies',
									'Loyalty program development',
									'Omnichannel experience design',
								].map((item, index) => (
									<li className="flex items-start" key={index}>
										<FaCheck className="text-blue-500 mr-2 mt-1" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Challenges Section */}
			<section id="challenges" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Common eCommerce Challenges We Solve</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Every problem has a solution - here's how we help.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* Challenge 1 */}
						<div className="challenge-card bg-white p-8 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-bold mb-3 flex items-center">
								<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
									<FaSearchDollar className="text-blue-600" />
								</div>
								Low Conversion Rates
							</h3>
							<p className="text-gray-600 mb-4">Visitors browse but don't buy, leaving revenue on the table.</p>
							<div className="bg-blue-50 p-4 rounded-lg">
								<h4 className="font-bold text-blue-700 mb-2">Our Solution:</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="benefit-item">A/B testing framework</li>
									<li className="benefit-item">Checkout optimization</li>
									<li className="benefit-item">Personalized recommendations</li>
									<li className="benefit-item">Exit-intent campaigns</li>
								</ul>
							</div>
						</div>

						{/* Challenge 2 */}
						<div className="challenge-card bg-white p-8 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-bold mb-3 flex items-center">
								<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
									<FaTachometerAlt className="text-blue-600" />
								</div>
								Slow Site Speed
							</h3>
							<p className="text-gray-600 mb-4">Poor performance hurting SEO and user experience.</p>
							<div className="bg-blue-50 p-4 rounded-lg">
								<h4 className="font-bold text-blue-700 mb-2">Our Solution:</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="benefit-item">Technical SEO audit</li>
									<li className="benefit-item">Hosting optimization</li>
									<li className="benefit-item">Image/asset compression</li>
									<li className="benefit-item">Caching strategy</li>
								</ul>
							</div>
						</div>

						{/* Challenge 3 */}
						<div className="challenge-card bg-white p-8 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-bold mb-3 flex items-center">
								<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
									<FaShoppingCart className="text-blue-600" />
								</div>
								High Cart Abandonment
							</h3>
							<p className="text-gray-600 mb-4">Customers add items but don't complete purchases.</p>
							<div className="bg-blue-50 p-4 rounded-lg">
								<h4 className="font-bold text-blue-700 mb-2">Our Solution:</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="benefit-item">Simplified checkout flow</li>
									<li className="benefit-item">Retargeting campaigns</li>
									<li className="benefit-item">Transparent pricing display</li>
									<li className="benefit-item">Abandoned cart emails</li>
								</ul>
							</div>
						</div>

						{/* Challenge 4 */}
						<div className="challenge-card bg-white p-8 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-bold mb-3 flex items-center">
								<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
									<FaRandom className="text-blue-600" />
								</div>
								Complex Integrations
							</h3>
							<p className="text-gray-600 mb-4">Disconnected systems causing operational headaches.</p>
							<div className="bg-blue-50 p-4 rounded-lg">
								<h4 className="font-bold text-blue-700 mb-2">Our Solution:</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="benefit-item">ERP/CRM synchronization</li>
									<li className="benefit-item">Custom API development</li>
									<li className="benefit-item">Middleware solutions</li>
									<li className="benefit-item">Unified data reporting</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Results */}
			<section className="py-20 bg-blue-600 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results Across Industries</h2>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto">We deliver measurable impact for our clients.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Result 1 */}
						<div className="bg-blue-700 p-8 rounded-xl text-center">
							<div className="text-5xl font-bold mb-2">3-5x</div>
							<h3 className="text-xl font-bold mb-3">ROI Increase</h3>
							<p className="text-blue-100">For marketing spend through optimized campaigns</p>
						</div>

						{/* Result 2 */}
						<div className="bg-blue-700 p-8 rounded-xl text-center">
							<div className="text-5xl font-bold mb-2">40-150%</div>
							<h3 className="text-xl font-bold mb-3">Traffic Growth</h3>
							<p className="text-blue-100">Organic search visibility improvements</p>
						</div>

						{/* Result 3 */}
						<div className="bg-blue-700 p-8 rounded-xl text-center">
							<div className="text-5xl font-bold mb-2">25-70%</div>
							<h3 className="text-xl font-bold mb-3">Conversion Lift</h3>
							<p className="text-blue-100">Through UX optimization and testing</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Solve Your eCommerce Challenges?</h2>
						<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Let's discuss how we can help your business grow.
						</p>
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a
								href="contact.html"
								className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition text-center"
							>
								Get Custom Solution
							</a>
							<a
								href="tel:+18005551234"
								className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition text-center flex items-center justify-center"
							>
								<FaPhoneAlt className="mr-2 text-lg" />
								Speak With Our Team
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

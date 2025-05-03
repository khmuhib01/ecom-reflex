'use client';

import React from 'react';
import Link from 'next/link';
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaShoppingCart,
} from 'react-icons/fa';

export default function FooterComponent() {
	return (
		<footer className="bg-gray-900 text-white pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Column 1 */}
					<div>
						<Link href="/" className="text-2xl font-bold text-white flex items-center mb-6">
							<FaShoppingCart className="mr-2" />
							<span>
								Ecom<span className="text-purple-400">Reflex</span>
							</span>
						</Link>
						<p className="text-gray-400 mb-6">
							Helping eCommerce brands grow through data-driven strategies and cutting-edge technology.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-white">
								<FaFacebookF />
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<FaTwitter />
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<FaLinkedinIn />
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<FaInstagram />
							</a>
						</div>
					</div>

					{/* Column 2 */}
					<div>
						<h3 className="text-lg font-bold mb-6">Services</h3>
						<ul className="space-y-3">
							<li>
								<Link href="/services/ecommerce-development" className="text-gray-400 hover:text-white">
									Ecommerce Development
								</Link>
							</li>
							<li>
								<Link href="/services/ecommerce-migration-and-integration" className="text-gray-400 hover:text-white">
									Migration & Integration
								</Link>
							</li>
							<li>
								<Link href="/services/audit-and-analysis" className="text-gray-400 hover:text-white">
									Audit & Analysis
								</Link>
							</li>
							<li>
								<Link href="/services/growth-and-optimization" className="text-gray-400 hover:text-white">
									Growth & Optimization
								</Link>
							</li>
							<li>
								<Link href="/services/support-and-maintenance" className="text-gray-400 hover:text-white">
									Support & Maintenance
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3 */}
					<div>
						<h3 className="text-lg font-bold mb-6">Company</h3>
						<ul className="space-y-3">
							<li>
								<Link href="/about" className="text-gray-400 hover:text-white">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/team" className="text-gray-400 hover:text-white">
									Our Team
								</Link>
							</li>
							<li>
								<Link href="/case-studies" className="text-gray-400 hover:text-white">
									Case Studies
								</Link>
							</li>
							<li>
								<Link href="/careers" className="text-gray-400 hover:text-white">
									Careers
								</Link>
							</li>
							<li>
								<Link href="/blog" className="text-gray-400 hover:text-white">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4 */}
					<div>
						<h3 className="text-lg font-bold mb-6">Contact</h3>
						<ul className="space-y-3">
							<li className="flex items-start">
								<FaMapMarkerAlt className="text-gray-400 mt-1 mr-3" />
								<span className="text-gray-400">123 Commerce St, San Francisco, CA 94107</span>
							</li>
							<li className="flex items-center">
								<FaPhoneAlt className="text-gray-400 mr-3" />
								<a href="tel:+18005551234" className="text-gray-400 hover:text-white">
									+1 (800) 555-1234
								</a>
							</li>
							<li className="flex items-center">
								<FaEnvelope className="text-gray-400 mr-3" />
								<a href="mailto:hello@ecomreflex.com" className="text-gray-400 hover:text-white">
									hello@ecomreflex.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 mb-4 md:mb-0">© 2023 EcomReflex. All rights reserved.</p>
					<div className="flex space-x-6">
						<a href="#" className="text-gray-400 hover:text-white">
							Privacy Policy
						</a>
						<a href="#" className="text-gray-400 hover:text-white">
							Terms of Service
						</a>
						<a href="#" className="text-gray-400 hover:text-white">
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

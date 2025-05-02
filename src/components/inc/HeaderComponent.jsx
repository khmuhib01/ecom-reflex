'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {FiShoppingCart, FiMenu} from 'react-icons/fi';

export default function HeaderComponent() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="bg-white shadow-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Link href="/" className="text-2xl font-bold text-indigo-600 flex items-center">
							<FiShoppingCart className="mr-2 text-xl" />
							<span>
								Ecom<span className="text-purple-600">Reflex</span>
							</span>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<a href="#services" className="text-gray-700 hover:text-indigo-600 transition">
							Services
						</a>
						<a href="#process" className="text-gray-700 hover:text-indigo-600 transition">
							Process
						</a>
						<a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">
							Pricing
						</a>
						<a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition">
							Portfolio
						</a>
						<a href="#faq" className="text-gray-700 hover:text-indigo-600 transition">
							FAQ
						</a>
						<a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
							Get Started
						</a>
					</div>

					<button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-700 focus:outline-none">
						<FiMenu className="text-2xl" />
					</button>
				</div>

				{mobileOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-4 space-y-1">
							<a
								href="#services"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
							>
								Services
							</a>
							<a
								href="#process"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
							>
								Process
							</a>
							<a
								href="#pricing"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
							>
								Pricing
							</a>
							<a
								href="#portfolio"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
							>
								Portfolio
							</a>
							<a
								href="#faq"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
							>
								FAQ
							</a>
							<a
								href="#contact"
								className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition mt-2"
							>
								Get Started
							</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

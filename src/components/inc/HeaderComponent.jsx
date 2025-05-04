'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {FiShoppingCart, FiMenu} from 'react-icons/fi';

export default function HeaderComponent() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const closeMobileMenu = () => {
		setMobileOpen(false);
	};

	return (
		<header className="bg-white shadow-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Link href="/" className="text-2xl font-bold text-indigo-600 flex items-center" onClick={closeMobileMenu}>
							<FiShoppingCart className="mr-2 text-xl" />
							<span>
								Ecom<span className="text-purple-600">Reflex</span>
							</span>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<Link href="/services" className="text-gray-700 hover:text-indigo-600 transition">
							Services
						</Link>
						<Link href="/products" className="text-gray-700 hover:text-indigo-600 transition">
							Products
						</Link>
						<Link href="/case-studies" className="text-gray-700 hover:text-indigo-600 transition">
							Case Studies
						</Link>
						<Link href="/success-stories" className="text-gray-700 hover:text-indigo-600 transition">
							Success Stories
						</Link>
						<Link
							href="/get-started"
							className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
						>
							Get Started
						</Link>
					</div>

					<button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-700 focus:outline-none">
						<FiMenu className="text-2xl" />
					</button>
				</div>

				{mobileOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-4 space-y-1">
							<Link
								href="/services"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
								onClick={closeMobileMenu}
							>
								Services
							</Link>

							<Link
								href="/products"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
								onClick={closeMobileMenu}
							>
								Products
							</Link>

							<Link
								href="/case-studies"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
								onClick={closeMobileMenu}
							>
								Case Studies
							</Link>

							<Link
								href="/success-stories"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
								onClick={closeMobileMenu}
							>
								Success Stories
							</Link>

							<Link
								href="/get-started"
								className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition mt-2"
								onClick={closeMobileMenu}
							>
								Get Started
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

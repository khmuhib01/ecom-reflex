import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {FaChartLine, FaHeart, FaHome} from 'react-icons/fa';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | EcomReflex</title>
				<meta
					name="description"
					content="Get in touch with EcomReflex for eCommerce development, consulting, and support. We're here to help grow your online business."
				/>
			</Head>
		</>
	);
}

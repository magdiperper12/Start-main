'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	const [login, setLogin] = useState(false);
	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);
	return (
		!login && (
			<motion.footer
				className='bg-darkforth dark:bg-darkprimary text-darksecoundry dark:text-third pt-12 pb-6 px-6 md:px-16'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}>
				<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10'>
					{/* Company Info */}
					<div>
						<h2 className='text-2xl font-bold mb-4 text-darkthird dark:text-third'>
							{t('footerTitle')}
						</h2>
						<p className='text-sm leading-6 text-darkprimary dark:text-darkforth'>
							{t('footerDesc')}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-third dark:text-darksecoundry'>
							{t('quickLinks')}
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								t('quickHome'),
								t('quickAbout'),
								t('quickServices'),
								t('quickContact'),
							].map((item) => (
								<li key={item}>
									<Link
										href={`/${item}`}
										className='hover:text-darkprimary dark:hover:text-darkforth transition-colors duration-200'>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-third dark:text-darksecoundry'>
							{t('quickResources')}
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								t('quickCareers'),
								t('quickBlog'),
								t('quickPricing'),
								t('quickSupport'),
							].map((item) => (
								<li key={item}>
									<Link
										href={`/${item}`}
										className='hover:text-darkprimary dark:hover:text-darkforth transition-colors duration-200'>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Socials */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-third dark:text-darksecoundry'>
							{t('followUs')}
						</h3>
						<div className='flex gap-4 text-lg'>
							<a
								href='#'
								className='hover:text-blue-600 transition-colors'>
								<FaFacebookF />
							</a>
							<a
								href='#'
								className='hover:text-sky-400 transition-colors'>
								<FaTwitter />
							</a>
							<a
								href='#'
								className='hover:text-blue-700 transition-colors'>
								<FaLinkedinIn />
							</a>
							<a
								href='#'
								className='hover:text-gray-500 transition-colors'>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>

				<div className='text-center text-sm border-t text-darkprimary dark:text-darkforth border-gray-300 dark:border-gray-700 pt-6'>
					&copy; {new Date().getFullYear()}{' '}
					<span className=' text-darkthird dark:text-third'>poultry</span>. All
					rights reserved.
				</div>
			</motion.footer>
		)
	);
};

export default Footer;

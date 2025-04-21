'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import Dark from './Dark';
import Lang from './Lang';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: t('home'), href: '/Home' },
		{ name: t('about'), href: '/About' },
		{ name: t('developers'), href: '/Developers' },
		{ name: t('services'), href: '/Services' },
		{ name: t('contact'), href: '/Contact' },
		{ name: t('pricing'), href: '/Pricing' },
	];
	return (
		<header className='bg-darkforth    z-10 w-full pb-2  dark:bg-black text-darkprimary border-b-2 border-third dark:border-b-2 dark:border-third dark:text-secoundry  shadow'>
			<div className='mx-auto flex h-16  pt-1 items-center justify-between px-4 sm:px-6 lg:px-8'>
				{/* Logo */}

				<Link href='/'>
					<Image
						src='/image/logo.png'
						alt='logo'
						width={40}
						height={40}
					/>
				</Link>
				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6 text-base font-semibold'>
					{navLinks.map((link, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 * i }}>
							<Link
								className='hover:text-third transition'
								href={link.href}>
								{link.name}
							</Link>
						</motion.div>
					))}
				</nav>

				{/* Right actions */}
				<div className='flex items-center gap-4'>
					<Dark />
					<Lang />

					<div className='hidden sm:flex gap-2'>
						<Link
							href='#'
							className='inline-block bg-darkthird dark:bg-darkthird dark:hover:bg-darksecoundry hover:bg-darkthird hover:text-darkprimary dark:hover:text-primary text-white  text-sm px-4 py-2 rounded-md transition'>
							{t('login')}
						</Link>

						<Link
							className='bg-gray-100 hover:text-third dark:text-darksecoundry text-sm px-4 py-2 rounded-md transition'
							href='#'>
							{t('register')}
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden  p-2 text-darkprimary text-2xl dark:text-gray-100'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<div>
								<IoClose />
							</div>
						) : (
							<div>
								<TiThMenu />
							</div>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed z-50  w-full left-0 top-0 md:hidden px-4 pt-4 pb-6 space-y-10 bg-secoundry dark:bg-darkprimary min-h-screen'>
						<button
							className='md:hidden fixed right-4 top-4  p-2 text-darkprimary text-3xl dark:text-gray-100'
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<div>
									<IoClose />
								</div>
							) : (
								<div>
									<TiThMenu />
								</div>
							)}
						</button>
						{navLinks.map((link, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 * i }}
								className='ps-5'>
								<Link
									className='hover:text-third transition'
									href={link.href}>
									{link.name}
								</Link>
							</motion.div>
						))}
						<div className='flex flex-col gap-2 text-base mt-4 p-10'>
							<a
								className='bg-third text-secoundry px-4 py-2 rounded-md  text-center'
								href='#'>
								{t('login')}
							</a>
							<a
								className='bg-gray-100 text-gray-700 dark:text-darkprimary  px-4 py-2 rounded-md  text-center'
								href='#'>
								{t('register')}
							</a>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;

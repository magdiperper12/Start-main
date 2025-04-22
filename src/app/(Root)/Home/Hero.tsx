'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t } = useTranslation();
	return (
		<div className='  space-y-20    bg-primary dark:bg-darkprimary text-darkprimary dark:text-white px-6 '>
			<div>
				<section className=' mx-auto text-center'>
					<motion.h1
						className='text-4xl md:text-6xl font-extrabold mb-6'
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						{t('welcome')}
						<span className='bg-gradient-to-r from-secoundry via-third to-forth dark:from-darksecoundry dark:via-darkthird dark:to-darkforth bg-clip-text text-transparent'>
							{t('poultry')}
						</span>
					</motion.h1>
				</section>
			</div>
		</div>
	);
};

export default Hero;

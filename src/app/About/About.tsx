'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation();
	return (
		<main className='  bg-primary dark:bg-darkprimary text-darkprimary dark:text-darkthird  p-6 '>
			<section className='max-w-5xl mx-auto'>
				<motion.h1
					className='text-4xl md:text-5xl dark:text-primary text-darkprimary font-bold mb-6 text-center'
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					{t('aboutPoultry')}
					<span className='bg-gradient-to-r from-darkthird via-secoundry to-forth dark:from-darksecoundry dark:via-darkthird dark:to-darkforth bg-clip-text text-transparent'>
						{t('poultry')}
					</span>
				</motion.h1>
			</section>
		</main>
	);
};

export default About;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
	const { t } = useTranslation();

	return (
		<main className='  bg-primary dark:bg-darkprimary text-gray-800 dark:text-white px-6 '>
			<motion.h1
				className='text-4xl md:text-6xl font-bold text-center mb-6 text-darkprimary dark:text-secoundry'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				{t('servicesTitle')}
			</motion.h1>
		</main>
	);
};

export default Services;

'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiGlobeAlt } from 'react-icons/hi';

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
	const [isopen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isopen);
	};
	const { t } = useTranslation();
	return (
		<div className=' text-darkprimary flex gap-8 dark:text-darkthird'>
			<button className='flex relative font-bold items-center  py-2 px-2 transition-transform duration-300 '>
				<button
					className='flex items-center justify-center gap-1 '
					onClick={toggleDropdown}>
					<HiGlobeAlt className='h-7 w-7  text-darksecoundry dark:text-darkthird' />
					<span className='text-lg'>{t('language')}</span>
				</button>
				{isopen && (
					<div className='absolute flex justify-center flex-col   items-center top-12 right-8 bg-white dark:bg-darkprimary  border-2 border-darkthird shadow-lg rounded-lg'>
						<button
							onClick={() => changeLanguage('en')}
							className=' text-darkprimary dark:text-primary w-full   px-5 py-2 hover:bg-darkthird dark:hover:bg-darkthird border-b-2 border-darkthird '>
							English
						</button>
						<button
							onClick={() => changeLanguage('ar')}
							className='text-darkprimary dark:text-primary  w-full  px-5 py-2 hover:bg-darkthird dark:hover:bg-darkthird'>
							عربي
						</button>
					</div>
				)}
			</button>
		</div>
	);
}

'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Dark: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);
	return (
		<div className=' text-nowrap '>
			<div
				className={`   md:w-1/3 m-auto lg:w-auto  rounded-full    flex items-center  cursor-pointer`}
				onClick={() => setIsDarkMode(!isDarkMode)}>
				<div
					className={`w-7 h-7 rounded-full flex justify-center items-center ${
						isDarkMode ? 'bg-yellow-100' : 'bg-darkprimary'
					}`}>
					{isDarkMode ? (
						<FaSun className='text-red-600' />
					) : (
						<FaMoon className='text-darkforth' />
					)}
				</div>
			</div>
		</div>
	);
};

export default Dark;

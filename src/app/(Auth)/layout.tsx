'use client'; // if using App Router

import { usePathname } from 'next/navigation';
import SignUpPage from './sign-up/page';
import SinInPage from './sign-in/page';

export default function AuthPage() {
	const pathname = usePathname();

	if (pathname.includes('sign-in')) {
		return <SinInPage />;
	} else {
		return <SignUpPage />;
	}
}

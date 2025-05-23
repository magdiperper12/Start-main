import '../app/i18n';
import About from './(Root)/About/About';
import Hero from './(Root)/Home/Hero';

import Services from './(Root)/Services/Service';

export default function Home() {
	return (
		<main className=' pt-20 pb-28  space-y-36 overflow-x-hidden'>
			<Hero />
			<About />
			<Services />
		</main>
	);
}

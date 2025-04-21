import '../app/i18n';
import About from './About/About';
import Hero from './Home/Hero';

import Services from './Services/Service';

export default function Home() {
	return (
		<main className=' pt-20 pb-28  space-y-36 overflow-x-hidden'>
			<Hero />
			<About />
			<Services />
		</main>
	);
}

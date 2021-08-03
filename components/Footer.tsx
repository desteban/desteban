import Image from 'next/image';

import GitHub from '../public/github.svg';
import Instagram from '../public/instagram-logo.svg';
import Twitter from '../public/twitter.svg';
import FaceBook from '../public/facebook-circular-logo.svg';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="social">
				<Image src={GitHub} alt="Sígueme GitHub" height={32} width={32} />
				<Image src={Instagram} alt="Sígueme GitHub" height={32} width={32} />
				<Image src={Twitter} alt="Sígueme GitHub" height={32} width={32} />
				<Image src={FaceBook} alt="Sígueme GitHub" height={32} width={32} />
			</div>
		</footer>
	);
}

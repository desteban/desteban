import Image from 'next/image';

import GitHub from '../public/github.svg';
import Instagram from '../public/instagram-logo.svg';
import Twitter from '../public/twitter.svg';
import FaceBook from '../public/facebook-circular-logo.svg';
import Linkedin from '../public/linkedin.svg';
import Mail from '../public/mail.svg';
import { Enlace } from '.';

export default function Social() {
	return (
		<div className="social">
			<Enlace href="https://github.com/desteban" blanck>
				<GitHub />
			</Enlace>

			<Enlace href="mailto:esteban28c@hotmail.com?Subject=Contacto">
				<Mail />
			</Enlace>

			<div className="icon">
				<Twitter className="icon" />
			</div>

			<Linkedin className="icon" />
		</div>
	);
}

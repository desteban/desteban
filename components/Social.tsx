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
				<Image src={GitHub} alt="Sígueme GitHub" height={32} width={32} />
			</Enlace>
			<Image
				src={Instagram}
				alt="Sígueme Instagram"
				height={32}
				width={32}
				className="click"
			/>

			<Enlace href="mailto:esteban28c@hotmail.com?Subject=Contacto">
				<Image src={Mail} alt="Envíame un email" height={32} width={32} className="click" />
			</Enlace>

			<Image src={Twitter} alt="Sígueme Twitter" height={32} width={32} className="click" />
			<Image src={FaceBook} alt="Sígueme FaceBook" height={32} width={32} className="click" />
			<Image
				src={Linkedin}
				alt="Entra en mi linkedin"
				height={32}
				width={32}
				className="click"
			/>
		</div>
	);
}

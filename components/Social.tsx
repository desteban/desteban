import GitHub from '../public/svg/github.svg';
import Twitter from '../public/svg/twitter.svg';
import Linkedin from '../public/svg/linkedin.svg';
import Mail from '../public/svg/mail.svg';
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

			<Enlace href="https://twitter.com/dacubillos" blanck>
				<Twitter className="icon" />
			</Enlace>

			<Enlace href="https://www.linkedin.com/in/david-cubillos-7b502b18b/" blanck>
				<Linkedin className="icon" />
			</Enlace>
		</div>
	);
}

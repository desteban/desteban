import Image from 'next/image';

import HTML5 from '../public/svg/skills/html.svg';
import CSS3 from '../public/svg/skills/css.svg';
import JS from '../public/svg/skills/javascript.svg';
import NODE from '../public/svg/skills/node.svg';
import TYPES from '../public/svg/skills/typescript.svg';
import GIT from '../public/svg/skills/git.svg';
import SASS from '../public/svg/skills/sass.svg';
import METERIAL from '../public/svg/skills/materializecss.svg';
import MySQL from '../public/svg/skills/mysql.svg';

export default function Skills() {
	return (
		<div className="skills">
			<div className="skill">
				<HTML5 height={40} width={40} />
				<span>HTML</span>
			</div>

			<div className="skill">
				<CSS3 height={40} width={40} />
				<span>CSS 3</span>
			</div>

			<div className="skill">
				<JS height={40} width={40} />
				<span>JavaScript</span>
			</div>

			<div className="skill">
				<NODE height={40} width={60} />
				<span>Node.js</span>
			</div>

			<div className="skill">
				<TYPES height={40} width={40} />
				<span>TypeScript</span>
			</div>

			<div className="skill">
				<GIT height={40} width={40} />

				<span>Git</span>
			</div>

			<div className="skill">
				<SASS height={40} width={60} />
				<span>SASS</span>
			</div>

			<div className="skill">
				<METERIAL height={40} width={40} />
				<span>Materializecss</span>
			</div>

			<div className="skill">
				<MySQL height={40} width={40} />
				<span>MySQL</span>
			</div>
		</div>
	);
}

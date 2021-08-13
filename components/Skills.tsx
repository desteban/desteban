import Image from 'next/image';

export default function Skills() {
	return (
		<div className="skills">
			<div className="skill">
				<Image alt="HTML" src={'/svg/skills/html.svg'} height={40} width={40} />
				<span>HTML</span>
			</div>

			<div className="skill">
				<Image alt="CSS 3" src={'/svg/skills/css.svg'} height={40} width={40} />
				<span>CSS 3</span>
			</div>

			<div className="skill">
				<Image alt="JavaScript" src={'/svg/skills/javascript.svg'} height={40} width={40} />
				<span>JavaScript</span>
			</div>

			<div className="skill">
				<Image alt="Node.js" src={'/svg/skills/node.svg'} height={40} width={60} />
				<span>Node.js</span>
			</div>

			<div className="skill">
				<Image alt="TypeScript" src={'/svg/skills/typescript.svg'} height={40} width={40} />
				<span>TypeScript</span>
			</div>

			<div className="skill">
				<Image alt="Git" src={'/svg/skills/git.svg'} height={40} width={40} />
				<span>Git</span>
			</div>

			<div className="skill">
				<Image alt="SASS" src={'/svg/skills/sass.svg'} height={40} width={60} />
				<span>SASS</span>
			</div>

			<div className="skill">
				<Image
					alt="Materializecss"
					src={'/svg/skills/materializecss.svg'}
					height={40}
					width={40}
				/>
				<span>Materializecss</span>
			</div>

			<div className="skill">
				<Image alt="MySQL" src={'/svg/skills/mysql.svg'} height={40} width={40} />
				<span>MySQL</span>
			</div>
		</div>
	);
}

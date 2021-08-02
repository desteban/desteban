import { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<header>
				<nav>
					<div className="log">{`('desteban')`}</div>

					<div className="sidenav">
						<div className="contenido">
							<Link href="/">
								<a>Inicio</a>
							</Link>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

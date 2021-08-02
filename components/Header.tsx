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
					<div className="btn-menu" id="btn-menu" onClick={() => this.toogleMenu()}>
						<span id="abrirMenu" className="material-icons click">
							menu
						</span>
						<span id="cerrarMenu" className="material-icons hide click">
							close
						</span>
					</div>
					<div className="logo">{`('desteban')`}</div>

					<div className="sidenav" id="sidenav" onClick={() => this.toogleMenu()}>
						<Link href="/">
							<a className="item">Inicio</a>
						</Link>

						<Link href="/">
							<a className="item">Blog</a>
						</Link>

						<Link href="/">
							<a className="item">Proyectos</a>
						</Link>
					</div>
				</nav>
			</header>
		);
	}

	toogleMenu() {
		let sidenav = document.getElementById('sidenav');
		let abrirMenu = document.getElementById('abrirMenu');
		let cerrarMenu = document.getElementById('cerrarMenu');

		sidenav?.classList.toggle('open');
		abrirMenu?.classList.toggle('hide');
		cerrarMenu?.classList.toggle('hide');
	}
}

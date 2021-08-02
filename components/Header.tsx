import { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		this.escojerTema();

		this.scroll();
	}

	render() {
		return (
			<header>
				<nav id="nav">
					<div className="btn-menu" id="btn-menu" onClick={() => this.toogleMenu()}>
						<span id="abrirMenu" className="material-icons click">
							menu
						</span>
						<span id="cerrarMenu" className="material-icons hide click">
							close
						</span>
					</div>
					<div className="logo">{`('desteban')`}</div>

					<div className="tema click" id="brightness" onClick={() => this.cambiartema()}>
						<span className="material-icons">brightness_4</span>
					</div>

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

	escojerTema() {
		let tema = localStorage.getItem('tema');
		let estado;

		if (tema) {
			estado = JSON.parse(tema);
		}

		let body = document.querySelector('body');
		let html = document.querySelector('html');

		if (!estado) {
			localStorage.setItem('tema', JSON.stringify({ tema: true }));
		}

		if (estado) {
			if (!estado.tema) {
				body?.classList.add('dark');
				html?.classList.add('dark');
			}
		}
	}

	cambiartema() {
		let body = document.querySelector('body');
		let html = document.querySelector('html');

		body?.classList.toggle('dark');
		html?.classList.toggle('dark');
		this.validarTema();
	}

	validarTema() {
		let local = localStorage.getItem('tema');
		let estado;

		if (local) {
			estado = JSON.parse(local);
		}

		if (estado) {
			estado.tema = !estado.tema;
			localStorage.setItem('tema', JSON.stringify(estado));
		}
	}

	toogleMenu() {
		let sidenav = document.getElementById('sidenav');
		let abrirMenu = document.getElementById('abrirMenu');
		let cerrarMenu = document.getElementById('cerrarMenu');

		sidenav?.classList.toggle('open');
		abrirMenu?.classList.toggle('hide');
		cerrarMenu?.classList.toggle('hide');
	}

	scroll() {
		let ubicacionInicial = window.pageYOffset;
		let nav = document.getElementById('nav');

		window.onscroll = function () {
			let movimiento = window.pageYOffset;

			if (nav) {
				if (movimiento <= ubicacionInicial) {
					nav.style.top = '0';
				}

				if (movimiento > ubicacionInicial) {
					nav.style.top = '-70px';
				}
			}

			ubicacionInicial = movimiento;
		};
	}
}

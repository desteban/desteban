import { Component } from 'react';
import Image from 'next/image';
import { Enlace } from '.';

import GitHub from '../public/github.svg';
import Instagram from '../public/instagram-logo.svg';
import Twitter from '../public/twitter.svg';
import FaceBook from '../public/facebook-circular-logo.svg';
import Social from './Social';

export default class Header extends Component {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		this.escojerTema();

		// this.scroll();
	}

	render() {
		return (
			<header>
				<nav id="nav" className="nav">
					<div className="btn-menu" id="btn-menu" onClick={() => this.toogleMenu()}>
						<span id="abrirMenu" className="material-icons click movil-visible">
							menu
						</span>
						<span id="cerrarMenu" className="material-icons hide click movil-visible">
							close
						</span>
					</div>
					<div className="logo">
						<span className="orange">{'<'}</span>
						desteban
						<span className="orange">{'/>'}</span>
					</div>

					<div className="tema click" id="brightness" onClick={() => this.cambiartema()}>
						<span className="material-icons">brightness_4</span>
					</div>

					<div className="sidenav" id="sidenav" onClick={() => this.toogleMenu()}>
						<Enlace href="/#" texto="Inicio" className="item espacioHeader"></Enlace>

						<Enlace href="/" texto="Blog" className="item"></Enlace>

						<Enlace href="/#proyectos" texto="Proyectos" className="item"></Enlace>

						<Enlace href="/#skills" texto="Skills" className="item"></Enlace>

						<Social />
					</div>
				</nav>
			</header>
		);
	}

	escojerTema() {
		let tema = localStorage.getItem('tema');
		let body = document.querySelector('body');
		let html = document.querySelector('html');
		let estado;

		if (tema) {
			estado = JSON.parse(tema);
		}

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
		let width = window.screen.width;

		if (width <= 991) {
			let sidenav = document.getElementById('sidenav');
			let abrirMenu = document.getElementById('abrirMenu');
			let cerrarMenu = document.getElementById('cerrarMenu');
			let nav = document.getElementById('nav');

			sidenav?.classList.toggle('open');
			abrirMenu?.classList.toggle('hide');
			cerrarMenu?.classList.toggle('hide');
			nav?.classList.toggle('active');
		}
	}

	scroll() {
		let ubicacionInicial = window.pageYOffset;
		let nav = document.getElementById('nav');

		window.onscroll = function () {
			let movimiento = window.pageYOffset;

			if (nav) {
				let navActive = document.querySelector('#nav.nav.active');

				if (movimiento <= ubicacionInicial) {
					nav.style.top = '0';
				}

				if (movimiento > ubicacionInicial && movimiento > 70 && !navActive) {
					nav.style.top = '-70px';
				}
			}

			ubicacionInicial = movimiento;
		};
	}
}

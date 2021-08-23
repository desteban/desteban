import Head from 'next/head';
import Image from 'next/image';

import code from '../public/code.jpg';
import { Enlace, Footer, Header, Skills, Social } from '../components';
import Card from '../components/Card';

import persona from '../public/persona.jpg';

export default function Home() {
	return (
		<div>
			<Head>
				<title>David Cubillos</title>
			</Head>

			<Header />

			<main>
				<section id="inicio">
					<div className="fondo">
						<div className="imagen">
							<Image
								src={'/fondo.jpg'}
								alt="Imagen de David Cubillos"
								height={400}
								width={400}
							/>
						</div>
						<div className="contenido">
							<div className="trabajo">
								<span>Desarrollador web</span>
							</div>
							<h1>David Cubillos</h1>
							<p>
								Un poco de texto el cual hable un poco de mi, tratando que no
								pasarme de unos 250 caracteres, para que no sea muy extenso
							</p>

							<Enlace href="/" blanck className="btnlink">
								Descargar CV
							</Enlace>
						</div>
					</div>
				</section>

				<section id="skills">
					<h2>skills</h2>
					<Skills />
				</section>

				<section id="proyectos">
					<h2 className="">Proyectos</h2>

					<div className="contenido">
						<div className="grid">
							<Card
								src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80"
								titulo="Codigo minificado"
								texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Suscipit temporibus inventore, distinctio sequi in asperiores
									eos quia sed est. Eveniet veniam distinctio non deleniti, quis
									necessitatibus earum iure. Esse, itaque."
							>
								<div className="opciones">
									<Enlace
										href="https://fonts.google.com/icons?selected=Material+Icons"
										blanck
									>
										<span className="material-icons">public</span>
									</Enlace>

									<Enlace href="/">
										<span className="material-icons">code</span>
									</Enlace>
								</div>
							</Card>

							<Card
								src={code}
								titulo="Codigo"
								texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Suscipit temporibus inventore, distinctio sequi in asperiores
									eos quia sed est. Eveniet veniam distinctio non deleniti, quis
									necessitatibus earum iure. Esse, itaque."
							></Card>

							<Card
								src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
								titulo="Git"
								texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Suscipit temporibus inventore, distinctio sequi in asperiores
          eos quia sed est. Eveniet veniam distinctio non deleniti, quis
          necessitatibus earum iure. Esse, itaque."
							></Card>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

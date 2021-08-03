import Head from 'next/head';

import code from '../public/code.jpg';
import { Enlace, Footer, Header } from '../components';
import Card from '../components/Card';

export default function Home() {
	return (
		<div>
			<Head>
				<title>David Cubillos</title>
			</Head>

			<Header />

			<main>
				<div className="espacioHeader">
					<h1>Hola que tal</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id quam unde
						molestias perspiciatis sapiente quibusdam veritatis laborum reiciendis
						consequuntur exercitationem rerum, quo repudiandae blanditiis animi dolor
						dolore perferendis voluptate. <a href="">Link</a>
					</p>
				</div>

				<div>
					<h2>Botones</h2>

					<button className="btn">Normal</button>

					<button className="btn round">Round</button>

					<button className="btn round small">Small</button>

					<button className="btn round high">High</button>
				</div>

				<div id="proyectos">
					<h2 className="">Cards</h2>

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
				</div>
			</main>

			<Footer />
		</div>
	);
}

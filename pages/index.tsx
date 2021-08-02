import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import code from '../public/code.jpg';

export default function Home() {
	return (
		<div>
			<main>
				<h1>Hola que tal</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id quam unde
					molestias perspiciatis sapiente quibusdam veritatis laborum reiciendis
					consequuntur exercitationem rerum, quo repudiandae blanditiis animi dolor dolore
					perferendis voluptate. <a href="">Link</a>
				</p>

				<div className="contenido">
					<h2>Botones</h2>

					<button className="btn">Normal</button>

					<button className="btn round">Round</button>

					<button className="btn round small">Small</button>

					<button className="btn round high">High</button>
				</div>

				<div>
					<h2>Cards</h2>

					<div className="grid">
						<div className="card round">
							<div className="imagen">
								<Image
									alt="text alt"
									src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80"
									width={1200}
									height={400}
								/>
							</div>
							<div className="contenido">
								<h3 className="titulo">Titulo de card</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Suscipit temporibus inventore, distinctio sequi in asperiores
									eos quia sed est. Eveniet veniam distinctio non deleniti, quis
									necessitatibus earum iure. Esse, itaque.
								</p>
								<div className="opciones">
									<Link href="https://fonts.google.com/icons?selected=Material+Icons">
										<a target="_blank">
											<span className="material-icons">public</span>
										</a>
									</Link>

									<Link href="/">
										<a>
											<span className="material-icons">code</span>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="card round">
							<div className="imagen">
								<Image
									src={code}
									alt="texto de alt"
									className=""
									width={1200}
									height={400}
								/>
							</div>
							<div className="contenido">
								<h3 className="titulo">Titulo de card</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Suscipit temporibus inventore, distinctio sequi in asperiores
									eos quia sed est. Eveniet veniam distinctio non deleniti, quis
									necessitatibus earum iure. Esse, itaque.
								</p>
								<div className="opciones">
									<Link href="https://fonts.google.com/icons?selected=Material+Icons">
										<a target="_blank">
											<span className="material-icons">public</span>
										</a>
									</Link>

									<Link href="/">
										<a>
											<span className="material-icons">code</span>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="card round">
							<div className="imagen">
								<Image
									src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
									alt="texto de alt"
									className=""
									width={1200}
									height={400}
								/>
							</div>
							<div className="contenido">
								<h3 className="titulo">Titulo de card</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Suscipit temporibus inventore, distinctio sequi in asperiores
									eos quia sed est. Eveniet veniam distinctio non deleniti, quis
									necessitatibus earum iure. Esse, itaque.
								</p>
								<div className="opciones">
									<Link href="https://fonts.google.com/icons?selected=Material+Icons">
										<a target="_blank">
											<span className="material-icons">public</span>
										</a>
									</Link>

									<Link href="/">
										<a>
											<span className="material-icons">code</span>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

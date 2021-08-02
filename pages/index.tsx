import Head from 'next/head';
import Image from 'next/image';

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

				<div>
					<h2>Botones</h2>

					<button className="btn">Normal</button>

					<button className="btn round">Round</button>

					<button className="btn round small">Small</button>

					<button className="btn round high">High</button>
				</div>
			</main>
		</div>
	);
}

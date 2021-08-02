import Image from 'next/image';

interface propsCard {
	src?: any;
	titulo?: string;
	texto: string;
	children?: any;
}

export default function Card(props: propsCard) {
	return (
		<div className="card round">
			{props.src ? (
				<div className="imagen">
					<Image alt={props.titulo} src={props.src} width={1200} height={400} />
				</div>
			) : null}
			<div className="contenido">
				<h3 className="titulo">{props.titulo}</h3>
				<p>{props.texto}</p>
				{props.children ? props.children : null}
			</div>
		</div>
	);
}

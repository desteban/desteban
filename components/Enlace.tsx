import Link from 'next/link';

interface propsEnlace {
	children?: any;
	href: string;
	texto?: string;
	blanck?: boolean;
	className?: string;
}

export default function Enlace(props: propsEnlace) {
	return (
		<Link href={props.href}>
			<a target={props.blanck ? '_blank' : ''} className={props.className}>
				{props.children ? props.children : props.texto}
			</a>
		</Link>
	);
}

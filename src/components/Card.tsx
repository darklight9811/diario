// Packages
import Link from "next/link"
import Image from "next/image"

// -------------------------------------------------
// Types
// -------------------------------------------------

type Props = {
	href: string;
	title: string;

	hue?: string;
}

export default function Card (props: Props) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link href={props.href} className="relative flex w-[150px] h-[200px] shadow-md rounded overflow-hidden transition-transform hover:-translate-y-1">
			<Image src="/img/cover.jpg" fill alt="Book cover" style={{ filter: props.hue ? `hue-rotate(${props.hue})` : undefined }} />

			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]" />

			<h1 className="absolute top-[70%] w-full text-center text-white">{props.title}</h1>
		</Link>
	)
}
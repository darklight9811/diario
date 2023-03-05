// Packages
import Link from "next/link"

export default function Page({ children }: any) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className="flex">
			<div className="container-side p-4">
				<ul>
					<li><Link href="/umbanda">Introdução</Link></li>
					<li><Link href="/umbanda">Orixás</Link></li>
				</ul>
			</div>

			<div className="container">
				{children}
			</div>
		</div>
	)
}

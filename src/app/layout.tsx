import Link from "next/link"
import "../style/globals.css"

// -------------------------------------------------
// Metadata
// -------------------------------------------------

export const metadata = {
	title: "Diary",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<html lang="en">
			<body>
				<nav className="fixed top-0 w-full shadow-md">
					<div className="container mx-auto py-3 flex justify-between">
						<Link href="/">Home</Link>

						<span>Criado por Rafael Correa</span>
					</div>
				</nav>

				<main className="mt-16 child:animate-fade-in">
					{children}
				</main>
			</body>
		</html>
	)
}

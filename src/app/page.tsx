// Components
import Card from "@/components/Card"

export default async function Home() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<main className="container mx-auto">
			<h1 className="text-2xl mb-5">Diarios</h1>

			<div className="flex gap-4">
				<Card
					title="Umbanda"
					href="/umbanda"
					hue="45deg"
				/>
				<Card
					title="Espiritismo"
					href="/umbanda"
					hue="180deg"
				/>
				<Card
					title="Ervas"
					href="/umbanda"
					hue="70deg"
				/>
				<Card
					title="Programação"
					href="/umbanda"
					hue="10deg"
				/>
				<Card
					title="Jogos"
					href="/umbanda"
					hue="120deg"
				/>
			</div>
		</main>
	)
}

import Link from "next/link";
import { PokemonCard } from "./components";
import { getPokemonList } from "./service";

async function Page({ params }: { params: { page: number } }) {
	const data = await getPokemonList(params.page);

	return (
		<div>
			<nav>
				<Link href={`pokedex/${Number(params.page) - 1}`}>prev </Link>
				<Link href={`pokedex/${Number(params.page) + 1}`}>next </Link>
			</nav>
			<div className="gallery">
				{data.map((p) => {
					return <PokemonCard p={p} key={p.id} />;
				})}
			</div>
		</div>
	);
}

export default Page;

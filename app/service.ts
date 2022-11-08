import { Pokemon } from './model'

export async function getPokemon(id: string | number): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return data.json()
}

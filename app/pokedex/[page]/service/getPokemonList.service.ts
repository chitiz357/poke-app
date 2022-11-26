import { getAllJSDocTags } from 'typescript'
import { Pokemon } from '../../../model'
import { getPokemon } from '../../../service'
import { PokemonList } from '../model/PokemonList'

export async function getPokemonList(page: number): Promise<Array<Pokemon>> {
  let data: Pokemon[] = []
  // for (let i = 1; i <= 24; i++) {
  //   data[i] = await getPokemon(i + (page - 1) * 24)
  //   console.log(data[i]);

  // }
  
  return data
}

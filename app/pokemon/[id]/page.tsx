import { getPokemon } from '../../service'
import Image from 'next/image'

interface Props {
  params: {
    id: string
  }
}

async function Page({ params }: Props) {
  const poke = await getPokemon(params.id)
  return (
    <div>
      <p>{poke.name}</p>
      <img src={poke.sprites.front_default} />
    </div>
  )
}
export default Page

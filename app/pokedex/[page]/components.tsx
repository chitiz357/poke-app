'use client'

import Link from 'next/link'
import { Pokemon } from '../../model'

export function PokemonCard({ p }: { p: Pokemon }) {
  return (
    <article className='card'>
      <Link href={`pokemon/${p.id}`} key={p.id}>
        <div>
          <p>{p.name}</p>
        </div>
        <img src={p.sprites.front_default} alt={p.name} />
      </Link>
      <style jsx>{`
        div {
          background: red;
        }
        div p {
          color: black;
        }
      `}</style>
    </article>
  )
}

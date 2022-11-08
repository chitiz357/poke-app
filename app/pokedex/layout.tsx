import Link from 'next/link'

type Props = {
  children: React.ReactNode
  params: {
    page: number
  }
}
    
function PokedexLayout({ children, params }: Props) {
  return (
    <>
      <h1>pokedex</h1>
      <article>{children}</article>
    </>
  )
}

export default PokedexLayout

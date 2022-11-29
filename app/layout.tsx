import Link from 'next/link'
import '../styles/globals.scss'

interface props {
  children: React.ReactNode
}

export default function RootLayout({ children }: props) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          poke app
        </title>
      </head>
      <body>
        <header>
          <nav className='header'>
            <Link href='/'>home</Link>
            <Link href='/pokedex/1'>pokedex</Link>
          </nav>
        </header>
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}

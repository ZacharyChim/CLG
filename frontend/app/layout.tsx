import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import '../styles/globals.css'
import Hero from './Hero'
import Main from './Main'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>CLG Group</title>
      </head>
      <body>
        {/* @ts-ignore */}
        <Header />
        {/* @ts-ignore */}
        <Hero />
        {/* @ts-ignore */}
        <Main />
        {children}
        {/* @ts-ignore */}
        <Footer />
      </body>
    </html>
  )
}

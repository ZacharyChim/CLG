import Main from './Main'
import Hero from './Hero'

export default function Home() {
  return (
    <>
      <div className='bg-heroBg bg-cover bg-top bg-no-repeat'>
        {/* @ts-ignore */}
        <Hero />
      </div>

      {/* @ts-ignore */}
      <Main />
    </>
  )
}

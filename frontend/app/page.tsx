import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8'>
      <Image
        src={`${process.env.STRAPI_URL}/uploads/home_hero_89b6a100d1.png`}
        alt='CLG Group'
        width={1200}
        height={686}
      />
    </div>
  )
}

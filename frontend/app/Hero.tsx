import Image from 'next/image'
import React from 'react'

const fetchHeroImages = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate[HeroIcon]=%2A`
  )

  const resData = await res.json()
  return resData.data.attributes.HeroIcon.data[0].attributes.url
}

export default async function Hero() {
  const getStarted = await fetchHeroImages()
  const getStartedURL = process.env.STRAPI_URL + getStarted

  return (
    <section id='hero'>
      <div className='container flex flex-col max-w-5xl md:flex-row items-center mx-auto mt-10   md:space-x-4'>
        <div className='flex flex-col md:mt-20 space-y-0 mx-4 md:w-1/3'>
          <div>
            <h1 className='text-4xl text-darkBlue font-bold text-center my-4 md:text-4xl md:text-left'>
              CLG GROUP
            </h1>
            <h2 className='text-4xl text-veryDarkBlue font-bold text-center md:text-4xl md:text-left'>
              YOUR TAX EXPERT
            </h2>
          </div>
          <div className='px-36 py-10 md:mt-10 md:pr-32 md:px-0 md:pt-32'>
            <Image src={getStartedURL} alt='' width={285} height={327} />
          </div>
        </div>

        <div className='md:w-2/3'>
          <Image
            src={`${process.env.STRAPI_URL}/uploads/home_hero_89b6a100d1.png`}
            alt=''
            width={1200}
            height={686}
            className='md:mb-40'
          />
        </div>
      </div>
    </section>
  )
}

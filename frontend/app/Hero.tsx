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
      <div className='container flex flex-col-reverse max-w-5xl md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
        <div className='flex flex-col mb-4 space-y-4 md:w-1/2'>
          <h1 className='max-w-md text-4xl text-darkBlue font-bold text-center md:text-5xl md:text-left'>
            CLG GROUP
          </h1>
          <h2 className='max-w-md text-4xl text-veryDarkBlue font-bold text-center space-y-2 md:text-5xl md:text-left'>
            YOUR TAX EXPERT
          </h2>
          <Image
            src={getStartedURL}
            alt='Get Started Image'
            width={285}
            height={327}
          />
        </div>

        <div className='md:w-1/2'>
          <Image
            src={`${process.env.STRAPI_URL}/uploads/home_hero_89b6a100d1.png`}
            alt='CLG Group'
            width={1200}
            height={686}
            className='mb-10'
          />
        </div>
      </div>
    </section>
  )
}

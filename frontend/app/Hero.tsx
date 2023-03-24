import Image from 'next/image'
import React from 'react'
import { fetchSingle } from '../lib/utils'

export default async function Hero() {
  const data = await fetchSingle('home-page')
  const heroIcon = data.HeroIcon.data.attributes
  const heroIconURL = process.env.NEXT_PUBLIC_STRAPI_URL + heroIcon.url
  const heroIconWidth = heroIcon.width
  const heroIconHeight = heroIcon.width

  const homeHero = data.HomeHero.data.attributes
  const homeHeroURL = process.env.NEXT_PUBLIC_STRAPI_URL + homeHero.url
  const homeHeroWidth = homeHero.width
  const homeHeroHeight = homeHero.width

  const mainSlogan = data.main_slogan
  const subSlogan = data.sub_slogan

  return (
    <section id='hero' className='bg-heroBg bg-cover bg-top bg-no-repeat'>
      <div className='container flex flex-col max-w-5xl md:flex-row items-center mx-auto py-12   md:space-x-4'>
        <div className='flex flex-col md:mt-20 space-y-0 mx-4 md:w-1/3'>
          <div>
            <h1 className='text-4xl text-darkBlue font-bold text-center my-4 md:text-4xl md:text-left'>
              {mainSlogan}
            </h1>
            <h2 className='text-4xl text-veryDarkBlue font-bold text-center md:text-4xl md:text-left'>
              {subSlogan}
            </h2>
          </div>
          <div className='px-36 py-10 md:mt-10 md:pr-32 md:px-0 md:pt-32'>
            <Image
              src={heroIconURL}
              alt=''
              width={heroIconWidth}
              height={heroIconHeight}
            />
          </div>
        </div>

        <div className='md:w-2/3'>
          <Image
            src={homeHeroURL}
            alt=''
            width={homeHeroWidth}
            height={homeHeroHeight}
            className='md:mb-40'
          />
        </div>
      </div>
    </section>
  )
}

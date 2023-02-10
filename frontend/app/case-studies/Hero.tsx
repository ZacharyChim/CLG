import Image from 'next/image'
import React from 'react'

const fetchHeroImages = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate[HeroIcon]=%2A`
  )

  const resData = await res.json()
  return resData.data.attributes.HeroIcon.data[0].attributes.url
}

const fetchData = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/case-study?populate=%2A`
  )

  const resData = await res.json()
  return resData
}

export default async function Hero() {
  const getStarted = await fetchHeroImages()

  const res = await fetchData()
  const data = res.data.attributes
  const mainSlogan = data.main_slogan

  const heroImage = process.env.STRAPI_URL + data.hero_image.data.attributes.url

  return (
    <section id='hero' className='bg-heroBg bg-cover bg-top bg-no-repeat'>
      <div className='container flex flex-col max-w-4xl md:flex-row items-center mx-auto py-12'>
        <div className='flex flex-col md:mt-20 space-y-0 mx-4 md:w-1/3'>
          <div>
            <h1 className='text-4xl text-darkBlue font-bold text-center my-4 md:text-4xl md:text-left'>
              {mainSlogan}
            </h1>
          </div>
        </div>

        <div className='ml-32 md:w-2/3 md:pt-32'>
          <Image
            src={heroImage}
            alt=''
            width={568}
            height={507}
            className='md:mb-32'
            quality='90'
          />
        </div>
      </div>
    </section>
  )
}

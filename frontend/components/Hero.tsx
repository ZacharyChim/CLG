import Image from 'next/image'
import React from 'react'
import { fetchSingle } from '../lib/utils'

export default async function Hero(props) {
  const data = await fetchSingle(props.page)
  const mainSlogan = data.main_slogan

  const heroImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.hero_image.data.attributes.url
  const width = data.hero_image.data.attributes.width
  const height = data.hero_image.data.attributes.height

  return (
    <section id='hero' className='bg-heroBg bg-cover bg-top bg-no-repeat pb-20'>
      <div className='container flex flex-col max-w-4xl md:flex-row items-center mx-auto py-12'>
        <div className='flex flex-col md:mt-20 space-y-0 mx-4 md:w-1/2'>
          <div>
            <h1 className='text-4xl text-darkBlue font-bold text-center my-4 md:text-5xl md:text-center'>
              {mainSlogan}
            </h1>
          </div>
        </div>

        <div className='ml-10 md:w-1/2 md:pt-32'>
          <Image
            src={heroImage}
            alt=''
            width={width}
            height={height}
            className='md:mb-32'
            quality='90'
          />
        </div>
      </div>
    </section>
  )
}

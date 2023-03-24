import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Contact from '../../components/Contact'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'

export default async function Main() {
  const preipo = await fetchSingle('pre-ipo')

  const advisory =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.advisory.data.attributes.url
  const advisoryWidth = preipo.advisory.data.attributes.width
  const advisoryHeight = preipo.advisory.data.attributes.height

  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.about_image.data.attributes.url
  const aboutWidth = preipo.about_image.data.attributes.width
  const aboutHeight = preipo.about_image.data.attributes.height

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.image1.data.attributes.url
  const image1Width = preipo.image1.data.attributes.width
  const image1Height = preipo.image1.data.attributes.height

  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.image2.data.attributes.url
  const image2Width = preipo.image2.data.attributes.width
  const image2Height = preipo.image2.data.attributes.height

  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.image3.data.attributes.url
  const image3Width = preipo.image3.data.attributes.width
  const image3Height = preipo.image3.data.attributes.height

  const number1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.number1.data.attributes.url
  const number1Width = preipo.number1.data.attributes.width
  const number1Height = preipo.number1.data.attributes.height
  const number2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.number2.data.attributes.url
  const number2Width = preipo.number2.data.attributes.width
  const number2Height = preipo.number2.data.attributes.height
  const number3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + preipo.number3.data.attributes.url
  const number3Width = preipo.number3.data.attributes.width
  const number3Height = preipo.number3.data.attributes.height

  const aboutTitle = preipo.about_title
  const aboutText = richTextReducer(preipo.about_text)
  const contactUs = preipo.contact_us

  const title = preipo.title

  return (
    <section id='case' className='flex flex-col mx-auto items-center max-w-5xl'>
      <div className='mx-auto pt-20 text-center'>
        <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
          <div className='text-left md:w-1/2'>
            <Image
              alt=''
              src={advisory}
              width={advisoryWidth}
              height={advisoryHeight}
              className='object-fit'
              quality='100'
            />
            <h2 className='text-3xl font-bold text-darkBlue mb-6 mt-4'>
              {aboutTitle}
            </h2>
            <article
              className='text-darkBrown leading-7 space-y-4'
              dangerouslySetInnerHTML={{ __html: aboutText }}
            ></article>
          </div>
          <div className='m-16 md:w-1/2'>
            <Image
              alt=''
              src={aboutImage}
              width={aboutWidth}
              height={aboutHeight}
            />
          </div>
        </div>
      </div>

      <h3 className='text-center text-darkBlue font-bold text-4xl mb-4'>
        {title}
      </h3>

      <div className='mx-auto pt-20 text-center'>
        <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image1}
              width={image1Width}
              height={image1Height}
            />
          </div>
          <div className='text-left m-16 md:w-1/2'>
            <Image
              alt=''
              src={number1}
              width={number1Width}
              height={number1Height}
              className='object-fit'
              quality='100'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-8 pb-20 px-5 md:flex-row'>
        <div className='text-left m-16 md:w-1/2'>
          <Image
            alt=''
            src={number2}
            width={number2Width}
            height={number2Height}
            className='object-fit'
            quality='100'
          />
        </div>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image2}
            width={image2Width}
            height={image2Height}
          />
        </div>
      </div>

      <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image3}
            width={image3Width}
            height={image3Height}
          />
        </div>
        <div className='text-left m-16 md:w-1/2'>
          <Image
            alt=''
            src={number3}
            width={number3Width}
            height={number3Height}
            className='object-fit'
            quality='100'
          />
        </div>
      </div>

      <Contact contactUs={contactUs} />
    </section>
  )
}

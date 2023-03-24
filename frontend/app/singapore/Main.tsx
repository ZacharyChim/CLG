import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import Contact from '../../components/Contact'
import Countries from '../../components/Countries'
import curve from '/public/small-curve.png'

export default async function Main() {
  const singapore = await fetchSingle('singapore')
  const curveWidth = 33
  const curveHeight = 10
  const benefitTitle = singapore.benefit_title

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    singapore.incorporation.data.attributes.url
  const incorporationWidth = singapore.incorporation.data.attributes.width
  const incorporationHeight = singapore.incorporation.data.attributes.height

  const benefit1Title = singapore.benefit1_title
  const benefit1Content = singapore.benefit1_content
  const benefit1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    singapore.benefit1_image.data.attributes.url
  const benefit1ImageWidth = singapore.benefit1_image.data.attributes.width
  const benefit1ImageHeight = singapore.benefit1_image.data.attributes.height

  const benefit2Title = singapore.benefit2_title
  const benefit2Content = singapore.benefit2_content
  const benefit2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    singapore.benefit2_image.data.attributes.url
  const benefit2ImageWidth = singapore.benefit2_image.data.attributes.width
  const benefit2ImageHeight = singapore.benefit2_image.data.attributes.height

  const benefit3Title = singapore.benefit3_title
  const benefit3Content = singapore.benefit3_content
  const benefit3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    singapore.benefit3_image.data.attributes.url
  const benefit3ImageWidth = singapore.benefit3_image.data.attributes.width
  const benefit3ImageHeight = singapore.benefit3_image.data.attributes.height

  const benefit4Title = singapore.benefit4_title
  const benefit4Content = singapore.benefit4_content
  const benefit4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    singapore.benefit4_image.data.attributes.url
  const benefit4ImageWidth = singapore.benefit4_image.data.attributes.width
  const benefit4ImageHeight = singapore.benefit4_image.data.attributes.height

  const article1Title = singapore.article1_title
  const article1Text = richTextReducer(singapore.article1_text)

  const article2Title = singapore.article2_title
  const article2Text = richTextReducer(singapore.article2_text)

  const contactUs = singapore.contact_us

  return (
    <>
      <section className='flex flex-col mx-auto max-w-5xl mt-10 mb-10 md:flex-row'>
        {/* @ts-expect-error Server Component */}
        <Countries country='Singapore' />
        <div className='md:w-4/5 mx-10'>
          <Image
            alt=''
            src={incorporation}
            width={incorporationWidth}
            height={incorporationHeight}
            quality='100'
          />
          <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-4'>
            {benefitTitle}
          </h3>
          <div className='grid grid-cols-1 flex-wrap leading-8 md:gap-8 md:grid-cols-2'>
            <div className='flex flex-col items-center px-6 pt-10 pb-6 border-4 rounded-md border-veryLightBlue'>
              <Image
                alt=''
                src={benefit1Image}
                width={benefit1ImageWidth}
                height={benefit1ImageHeight}
                quality='100'
              />

              <h4 className='text-xl text-center font-bold text-darkBlue mb-4 mt-4'>
                {benefit1Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit1Content}</p>
            </div>
            <div className='flex flex-col items-center px-6 pt-10 pb-6 border-4 rounded-md border-veryLightBlue '>
              <Image
                alt=''
                src={benefit2Image}
                width={benefit2ImageWidth}
                height={benefit2ImageHeight}
                quality='100'
              />
              <h4 className='text-xl text-center font-bold text-darkBlue mb-4 mt-4'>
                {benefit2Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit2Content}</p>
            </div>
            <div className='flex flex-col items-center px-6 pt-10 pb-6 border-4 rounded-md border-veryLightBlue '>
              <Image
                alt=''
                src={benefit3Image}
                width={benefit3ImageWidth}
                height={benefit3ImageHeight}
                quality='100'
              />

              <h4 className='text-xl text-center font-bold text-darkBlue mb-4 mt-4'>
                {benefit3Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit3Content}</p>
            </div>
            <div className='flex flex-col items-center px-6 pt-10 pb-6 border-4 rounded-md border-veryLightBlue '>
              <Image
                alt=''
                src={benefit4Image}
                width={benefit4ImageWidth}
                height={benefit4ImageHeight}
                quality='100'
              />
              <h4 className='text-xl text-center font-bold text-darkBlue mb-4 mt-4'>
                {benefit4Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit4Content}</p>
            </div>
          </div>
          <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-14'>
            {article1Title}
          </h3>
          <article
            className='text-darkBrown leading-9 space-y-4'
            dangerouslySetInnerHTML={{ __html: article1Text }}
          ></article>
          <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-14'>
            {article2Title}
          </h3>
          <article
            className='text-darkBrown leading-9 space-y-4'
            dangerouslySetInnerHTML={{ __html: article2Text }}
          ></article>
        </div>
      </section>
      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}

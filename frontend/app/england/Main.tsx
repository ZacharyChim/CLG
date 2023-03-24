import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import Contact from '../../components/Contact'
import Countries from '../../components/Countries'
import curve from '/public/small-curve.png'

export default async function Main() {
  const england = await fetchSingle('England')
  const curveWidth = 33
  const curveHeight = 10
  const benefitTitle = england.benefit_title

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.incorporation.data.attributes.url
  const incorporationWidth = england.incorporation.data.attributes.width
  const incorporationHeight = england.incorporation.data.attributes.height

  const benefit1Title = england.benefit1_title
  const benefit1Content = england.benefit1_content
  const benefit1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit1_image.data.attributes.url
  const benefit1ImageWidth = england.benefit1_image.data.attributes.width
  const benefit1ImageHeight = england.benefit1_image.data.attributes.height

  const benefit2Title = england.benefit2_title
  const benefit2Content = england.benefit2_content
  const benefit2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit2_image.data.attributes.url
  const benefit2ImageWidth = england.benefit2_image.data.attributes.width
  const benefit2ImageHeight = england.benefit2_image.data.attributes.height

  const benefit3Title = england.benefit3_title
  const benefit3Content = england.benefit3_content
  const benefit3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit3_image.data.attributes.url
  const benefit3ImageWidth = england.benefit3_image.data.attributes.width
  const benefit3ImageHeight = england.benefit3_image.data.attributes.height

  const benefit4Title = england.benefit4_title
  const benefit4Content = england.benefit4_content
  const benefit4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit4_image.data.attributes.url
  const benefit4ImageWidth = england.benefit4_image.data.attributes.width
  const benefit4ImageHeight = england.benefit4_image.data.attributes.height

  const benefit5Title = england.benefit5_title
  const benefit5Content = england.benefit5_content
  const benefit5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    england.benefit5_image.data.attributes.url
  const benefit5ImageWidth = england.benefit5_image.data.attributes.width
  const benefit5ImageHeight = england.benefit5_image.data.attributes.height

  const article1Title = england.article1_title
  const article1Text = richTextReducer(england.article1_text)

  const article2Title = england.article2_title
  const article2Text = richTextReducer(england.article2_text)

  const article3Title = england.article3_title
  const article3Text = richTextReducer(england.article3_text)

  const article4Title = england.article4_title
  const article4Text = richTextReducer(england.article4_text)

  const article5Title = england.article5_title
  const article5Text = richTextReducer(england.article5_text)

  const contactUs = england.contact_us

  return (
    <>
      <section className='flex flex-col mx-auto max-w-5xl mt-10 mb-10 md:flex-row'>
        {/* @ts-expect-error Server Component */}
        <Countries country='england' />
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
          <div className='grid grid-cols-1 gap-8 flex-wrap leading-8 md:gap-8 md:grid-cols-2'>
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
            <div className='flex flex-col items-center px-6 pt-10 pb-6 border-4 rounded-md border-veryLightBlue '>
              <Image
                alt=''
                src={benefit5Image}
                width={benefit5ImageWidth}
                height={benefit5ImageHeight}
                quality='100'
              />

              <h4 className='text-xl text-center font-bold text-darkBlue mb-4 mt-4'>
                {benefit5Title}
              </h4>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto mb-4'
              />
              <p className='text-center text-darkBrown'>{benefit5Content}</p>
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
          <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-14'>
            {article3Title}
          </h3>
          <article
            className='text-darkBrown leading-9 space-y-4'
            dangerouslySetInnerHTML={{ __html: article3Text }}
          ></article>
          <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-14'>
            {article4Title}
          </h3>
          <article
            className='text-darkBrown leading-9 space-y-4'
            dangerouslySetInnerHTML={{ __html: article4Text }}
          ></article>
          <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-14'>
            {article5Title}
          </h3>
          <article
            className='text-darkBrown leading-9 space-y-4'
            dangerouslySetInnerHTML={{ __html: article5Text }}
          ></article>
        </div>
      </section>
      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}

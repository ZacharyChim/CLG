import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import Contact from '../../components/Contact'
import Countries from '../../components/Countries'
import curve from '/public/small-curve.png'

export default async function Main() {
  const cayman = await fetchSingle('cayman')
  const curveWidth = 33
  const curveHeight = 10
  const benefitTitle = cayman.benefit_title

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    cayman.incorporation.data.attributes.url
  const incorporationWidth = cayman.incorporation.data.attributes.width
  const incorporationHeight = cayman.incorporation.data.attributes.height

  const benefit1Title = cayman.benefit1_title
  const benefit1Content = cayman.benefit1_content
  const benefit1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    cayman.benefit1_image.data.attributes.url
  const benefit1ImageWidth = cayman.benefit1_image.data.attributes.width
  const benefit1ImageHeight = cayman.benefit1_image.data.attributes.height

  const benefit2Title = cayman.benefit2_title
  const benefit2Content = cayman.benefit2_content
  const benefit2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    cayman.benefit2_image.data.attributes.url
  const benefit2ImageWidth = cayman.benefit2_image.data.attributes.width
  const benefit2ImageHeight = cayman.benefit2_image.data.attributes.height

  const benefit3Title = cayman.benefit3_title
  const benefit3Content = cayman.benefit3_content
  const benefit3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    cayman.benefit3_image.data.attributes.url
  const benefit3ImageWidth = cayman.benefit3_image.data.attributes.width
  const benefit3ImageHeight = cayman.benefit3_image.data.attributes.height

  const benefit4Title = cayman.benefit4_title
  const benefit4Content = cayman.benefit4_content
  const benefit4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    cayman.benefit4_image.data.attributes.url
  const benefit4ImageWidth = cayman.benefit4_image.data.attributes.width
  const benefit4ImageHeight = cayman.benefit4_image.data.attributes.height

  const benefit5Title = cayman.benefit5_title
  const benefit5Content = cayman.benefit5_content
  const benefit5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    cayman.benefit5_image.data.attributes.url
  const benefit5ImageWidth = cayman.benefit5_image.data.attributes.width
  const benefit5ImageHeight = cayman.benefit5_image.data.attributes.height

  const article1Title = cayman.article1_title
  const article1Text = richTextReducer(cayman.article1_text)

  const article2Title = cayman.article2_title
  const article2Text = richTextReducer(cayman.article2_text)

  const contactUs = cayman.contact_us

  return (
    <>
      <section className='flex flex-col mx-auto max-w-5xl mt-10 mb-10 md:flex-row'>
        {/* @ts-expect-error Server Component */}
        <Countries country='cayman island' />
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
        </div>
      </section>
      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}

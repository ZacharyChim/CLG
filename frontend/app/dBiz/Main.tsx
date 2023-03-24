import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import contactTop from '../../public/contact-top.png'
import caseTop from '../../public/case-top.png'
import Contact from '../../components/Contact'

export default async function Main() {
  const dBiz = await fetchSingle('d-biz')

  const fundingAudit =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.funding_audit.data.attributes.url
  const fundingAuditWidth = dBiz.funding_audit.data.attributes.width
  const fundingAuditHeight = dBiz.funding_audit.data.attributes.height

  const award =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.award.data.attributes.url
  const awardWidth = dBiz.award.data.attributes.width
  const awardHeight = dBiz.award.data.attributes.height
  const subsidyBold = dBiz.subsidy_bold
  const subsidyText = dBiz.subsidy_text
  const timeBold = dBiz.time_bold
  const timeText = dBiz.time_text
  const capBold = dBiz.cap_bold
  const capText = dBiz.cap_text

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.image1.data.attributes.url
  const image1Width = dBiz.image1.data.attributes.width
  const image1Height = dBiz.image1.data.attributes.height
  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.image2.data.attributes.url
  const image2Width = dBiz.image2.data.attributes.width
  const image2Height = dBiz.image2.data.attributes.height
  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.image3.data.attributes.url
  const image3Width = dBiz.image3.data.attributes.width
  const image3Height = dBiz.image3.data.attributes.height
  const image4 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.image4.data.attributes.url
  const image4Width = dBiz.image4.data.attributes.width
  const image4Height = dBiz.image4.data.attributes.height

  const title1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.title1.data.attributes.url
  const title1Width = dBiz.title1.data.attributes.width
  const title1Height = dBiz.title1.data.attributes.height
  const title2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.title2.data.attributes.url
  const title2Width = dBiz.title2.data.attributes.width
  const title2Height = dBiz.title2.data.attributes.height
  const title3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.title3.data.attributes.url
  const title3Width = dBiz.title3.data.attributes.width
  const title3Height = dBiz.title3.data.attributes.height
  const title4 =
    process.env.NEXT_PUBLIC_STRAPI_URL + dBiz.title4.data.attributes.url
  const title4Width = dBiz.title4.data.attributes.width
  const title4Height = dBiz.title4.data.attributes.height

  const text1 = richTextReducer(dBiz.text1)
  const text2 = richTextReducer(dBiz.text2)
  const text3 = richTextReducer(dBiz.text3)
  const text4 = richTextReducer(dBiz.text4)

  const aboutTitle = dBiz.about_title
  const aboutText = richTextReducer(dBiz.about_text)
  const contactUs = dBiz.contact_us

  return (
    <>
      <section
        id='case'
        className='flex flex-col mx-auto items-center max-w-5xl'
      >
        <div className='mx-auto pt-20 text-center'>
          <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
            <div className='text-left'>
              <Image
                alt=''
                src={fundingAudit}
                width={fundingAuditWidth}
                height={fundingAuditHeight}
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
          </div>
        </div>
      </section>

      <section id='numbers' className='w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 mx-auto text-center'>
          <div className='flex flex-col py-20 md:flex-row md:space-x-14'>
            <div className='flex flex-col items-center p-4 space-y-2 h-30 md:w-1/3'>
              <Image
                src={award}
                alt=''
                width={awardWidth}
                height={awardHeight}
              />
              <h5 className='text-4xl font-bold text-darkBlue pt-6'>
                {subsidyBold}
              </h5>
              <p className='text-lg'>{subsidyText}</p>
            </div>

            <div className='flex flex-col items-center p-4 space-y-2 h-30 md:w-1/3'>
              <Image
                src={award}
                alt=''
                width={awardWidth}
                height={awardHeight}
              />
              <h5 className='text-4xl font-bold text-darkBlue pt-6'>
                {timeBold}
              </h5>
              <p className='text-lg'>{timeText}</p>
            </div>

            <div className='flex flex-col items-center p-4 space-y-2 h-30 md:w-1/3'>
              <Image
                src={award}
                alt=''
                width={awardWidth}
                height={awardHeight}
              />
              <h5 className='text-4xl font-bold text-darkBlue pt-6'>
                {capBold}
              </h5>
              <p className='text-lg'>{capText}</p>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <div className='mx-auto pt-20 text-center'>
          <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
            <div className='text-left m-16 md:w-1/2'>
              <Image
                alt=''
                src={title1}
                width={title1Width}
                height={title1Height}
                className='object-fit'
                quality='100'
              />
              <article
                className='text-darkBrown leading-7 space-y-4 mt-10'
                dangerouslySetInnerHTML={{ __html: text1 }}
              ></article>
            </div>
            <div className='m-auto md:w-1/2'>
              <Image
                alt=''
                src={image1}
                width={image1Width}
                height={image1Height}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col-reverse gap-8 pb-20 px-5 md:flex-row'>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image2}
              width={image2Width}
              height={image2Height}
            />
          </div>
          <div className='text-left m-16 md:w-1/2'>
            <Image
              alt=''
              src={title2}
              width={title2Width}
              height={title2Height}
              className='object-fit'
              quality='100'
            />
            <article
              className='text-darkBrown leading-7 space-y-4 mt-10'
              dangerouslySetInnerHTML={{ __html: text2 }}
            ></article>
          </div>
        </div>

        <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
          <div className='text-left m-16 md:w-1/2'>
            <Image
              alt=''
              src={title3}
              width={title3Width}
              height={title3Height}
              className='object-fit'
              quality='100'
            />
            <article
              className='text-darkBrown leading-7 space-y-4 mt-10'
              dangerouslySetInnerHTML={{ __html: text3 }}
            ></article>
          </div>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image3}
              width={image3Width}
              height={image3Height}
            />
          </div>
        </div>

        <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image4}
              width={image4Width}
              height={image4Height}
            />
          </div>
          <div className='text-left m-8 md:w-1/2'>
            <Image
              alt=''
              src={title4}
              width={title4Width}
              height={title4Height}
              className='object-fit'
              quality='100'
            />
            <article
              className='text-darkBrown leading-7 space-y-4 mt-10'
              dangerouslySetInnerHTML={{ __html: text4 }}
            ></article>
          </div>
        </div>

        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}

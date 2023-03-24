import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import ImageArticle from '../../components/ImageArticle'
import Contact from '../../components/Contact'
import Faqs from '../../components/Faqs'

export default async function Main() {
  const tvp = await fetchSingle('tvp')

  const aboutTitle = tvp.about_title
  const aboutText = richTextReducer(tvp.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutText,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.about_image.data.attributes.url
  const aboutImageWidth = tvp.about_image.data.attributes.width
  const aboutImageHeight = tvp.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutImageWidth,
    height: aboutImageHeight,
  }

  const aboutTagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.funding_audit.data.attributes.url
  const aboutTagImageWidth = tvp.funding_audit.data.attributes.width
  const aboutTagImageHeight = tvp.funding_audit.data.attributes.height
  const aboutTagImageObj = {
    url: aboutTagImage,
    width: aboutTagImageWidth,
    height: aboutTagImageHeight,
  }

  const data1 = tvp.data1
  const data1Desc = tvp.data1_desc
  const data2 = tvp.data2
  const data2Desc = tvp.data2_desc
  const data3 = tvp.data3
  const data3Desc = tvp.data3_desc
  const data4 = tvp.data4
  const data4Desc = tvp.data4_desc

  const article1Title = ''
  const article1Text = richTextReducer(tvp.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.article1_image.data.attributes.url
  const article1ImageWidth = tvp.article1_image.data.attributes.width
  const article1ImageHeight = tvp.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.article1_number.data.attributes.url
  const article1TagImageWidth = tvp.article1_number.data.attributes.width
  const article1TagImageHeight = tvp.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const diagramTitle = tvp.diagram_title
  const diagram =
    process.env.NEXT_PUBLIC_STRAPI_URL + tvp.diagram.data.attributes.url
  const diagramWidth = tvp.diagram.data.attributes.width
  const diagramHeight = tvp.diagram.data.attributes.height

  const contactUs = tvp.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: tvp.faq1,
      content: richTextReducer(tvp.faq1_content),
    },
    {
      title: tvp.faq2,
      content: richTextReducer(tvp.faq2_content),
    },
    {
      title: tvp.faq3,
      content: richTextReducer(tvp.faq3_content),
    },
    {
      title: tvp.faq4,
      content: richTextReducer(tvp.faq4_content),
    },
    {
      title: tvp.faq5,
      content: richTextReducer(tvp.faq5_content),
    },
    {
      title: tvp.faq6,
      content: richTextReducer(tvp.faq6_content),
    },
    {
      title: tvp.faq7,
      content: richTextReducer(tvp.faq7_content),
    },
    {
      title: tvp.faq8,
      content: richTextReducer(tvp.faq8_content),
    },
    {
      title: tvp.faq9,
      content: richTextReducer(tvp.faq9_content),
    },
  ]

  return (
    <>
      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <ImageArticle
          aboutImage={aboutImageObj}
          aboutArticle={aboutObj}
          tagImage={aboutTagImageObj}
          imageLeft={false}
        />
      </section>

      <section className='w-full bg-veryLightBlue my-10'>
        <div className='max-w-5xl px-5 pb-5 mx-auto text-left'>
          <div className='flex flex-col text-center md:flex-row'>
            <div className='flex flex-col space-y-2 mt-10 mr-4 py-8 md:w-3/10'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data1}</h5>
              <p className='text-sm'>{data1Desc}</p>
            </div>

            <div className='flex flex-col space-y-2 mt-10 mx-8 py-8 md:w-1/5'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data2}</h5>
              <p className='text-sm'>{data2Desc}</p>
            </div>

            <div className='flex flex-col space-y-2 mt-10 mx-8 py-8 md:w-1/5'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data3}</h5>
              <p className='text-sm'>{data3Desc}</p>
            </div>

            <div className='flex flex-col space-y-2 mt-10 ml-10 py-8 md:w-3/10'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data4}</h5>
              <p className='text-sm'>{data4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <div className='flex flex-col my-10 items-center'>
          <h3 className='text-center text-darkBlue font-bold text-4xl mb-20'>
            {diagramTitle}
          </h3>
          <Image
            src={diagram}
            alt=''
            width={diagramWidth}
            height={diagramHeight}
          />
        </div>
        <ImageArticle
          aboutImage={article1ImageObj}
          aboutArticle={article1Obj}
          tagImage={article1TagImageObj}
          imageLeft={true}
        />

        <Contact contactUs={contactUs} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}

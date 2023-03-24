import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import ImageArticle from '../../components/ImageArticle'
import Contact from '../../components/Contact'
import contactTop from '../../public/contact-top.png'
import caseTop from '../../public/case-top.png'
import Faqs from '../../components/Faqs'

export default async function Main() {
  const bud = await fetchSingle('bud')

  const aboutTitle = bud.about_title
  const aboutText = richTextReducer(bud.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutText,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.about_image.data.attributes.url
  const aboutImageWidth = bud.about_image.data.attributes.width
  const aboutImageHeight = bud.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutImageWidth,
    height: aboutImageHeight,
  }

  const aboutTagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.funding_audit.data.attributes.url
  const aboutTagImageWidth = bud.funding_audit.data.attributes.width
  const aboutTagImageHeight = bud.funding_audit.data.attributes.height
  const aboutTagImageObj = {
    url: aboutTagImage,
    width: aboutTagImageWidth,
    height: aboutTagImageHeight,
  }

  const data1 = bud.data1
  const data1Desc = bud.data1_desc
  const data2 = bud.data2
  const data2Desc = bud.data2_desc
  const data3 = bud.data3
  const data3Desc = bud.data3_desc
  const data4 = bud.data4
  const data4Desc = bud.data4_desc

  const article1Title = ''
  const article1Text = richTextReducer(bud.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article1_image.data.attributes.url
  const article1ImageWidth = bud.article1_image.data.attributes.width
  const article1ImageHeight = bud.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article1_number.data.attributes.url
  const article1TagImageWidth = bud.article1_number.data.attributes.width
  const article1TagImageHeight = bud.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const article2Title = ''
  const article2Text = richTextReducer(bud.article2_text)
  const article2Obj = {
    title: article2Title,
    text: article2Text,
  }

  const article2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article2_image.data.attributes.url
  const article2ImageWidth = bud.article2_image.data.attributes.width
  const article2ImageHeight = bud.article2_image.data.attributes.height
  const article2ImageObj = {
    url: article2Image,
    width: article2ImageWidth,
    height: article2ImageHeight,
  }

  const article2TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + bud.article2_number.data.attributes.url
  const article2TagImageWidth = bud.article2_number.data.attributes.width
  const article2TagImageHeight = bud.article2_number.data.attributes.height
  const article2TagImageObj = {
    url: article2TagImage,
    width: article2TagImageWidth,
    height: article2TagImageHeight,
  }

  const contactUs = bud.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: bud.faq1,
      content: richTextReducer(bud.faq1_content),
    },
    {
      title: bud.faq2,
      content: richTextReducer(bud.faq2_content),
    },
    {
      title: bud.faq3,
      content: richTextReducer(bud.faq3_content),
    },
    {
      title: bud.faq4,
      content: richTextReducer(bud.faq4_content),
    },
    {
      title: bud.faq5,
      content: richTextReducer(bud.faq5_content),
    },
    {
      title: bud.faq6,
      content: richTextReducer(bud.faq6_content),
    },
    {
      title: bud.faq7,
      content: richTextReducer(bud.faq7_content),
    },
    {
      title: bud.faq8,
      content: richTextReducer(bud.faq8_content),
    },
    {
      title: bud.faq9,
      content: richTextReducer(bud.faq9_content),
    },
    {
      title: bud.faq10,
      content: richTextReducer(bud.faq10_content),
    },
    {
      title: bud.faq11,
      content: richTextReducer(bud.faq11_content),
    },
    {
      title: bud.faq12,
      content: richTextReducer(bud.faq12_content),
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

      <section className='w-full bg-veryLightBlue my-20'>
        <div className='max-w-5xl px-5 pb-5 mx-auto text-left'>
          <div className='flex flex-col text-center md:flex-row'>
            <div className='flex flex-col space-y-2 mt-10 mr-4 py-8 md:w-3/10'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data1}</h5>
              <p className='text-sm'>{data1Desc}</p>
            </div>

            <div className='flex flex-col space-y-2 mt-10 mx-6 py-8 md:w-1/5'>
              <h5 className='text-4xl font-bold text-darkBlue'>{data2}</h5>
              <p className='text-sm'>{data2Desc}</p>
            </div>

            <div className='flex flex-col space-y-2 mt-10 mx-6 py-8 md:w-1/5'>
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
        <ImageArticle
          aboutImage={article1ImageObj}
          aboutArticle={article1Obj}
          tagImage={article1TagImageObj}
          imageLeft={false}
        />

        <ImageArticle
          aboutImage={article2ImageObj}
          aboutArticle={article2Obj}
          tagImage={article2TagImageObj}
          imageLeft={true}
        />
        <Contact contactUs={contactUs} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}

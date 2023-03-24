import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import ImageArticle from '../../components/ImageArticle'
import Contact from '../../components/Contact'
import contactTop from '../../public/contact-top.png'
import caseTop from '../../public/case-top.png'
import Faqs from '../../components/Faqs'

export default async function Main() {
  const accounting = await fetchSingle('accounting')

  const accountingTag =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.accounting.data.attributes.url
  const accountingTagWidth = accounting.accounting.data.attributes.width
  const accountingTagHeight = accounting.accounting.data.attributes.height

  const accountingTitle = accounting.accounting_title

  const article1Title = accounting.article1_title
  const article1Text = richTextReducer(accounting.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article1_image.data.attributes.url
  const article1ImageWidth = accounting.article1_image.data.attributes.width
  const article1ImageHeight = accounting.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article1_number.data.attributes.url
  const article1TagImageWidth = accounting.article1_number.data.attributes.width
  const article1TagImageHeight =
    accounting.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const article2Title = accounting.article2_title
  const article2Text = richTextReducer(accounting.article2_text)
  const article2Obj = {
    title: article2Title,
    text: article2Text,
  }

  const article2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article2_image.data.attributes.url
  const article2ImageWidth = accounting.article2_image.data.attributes.width
  const article2ImageHeight = accounting.article2_image.data.attributes.height
  const article2ImageObj = {
    url: article2Image,
    width: article2ImageWidth,
    height: article2ImageHeight,
  }

  const article2TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article2_number.data.attributes.url
  const article2TagImageWidth = accounting.article2_number.data.attributes.width
  const article2TagImageHeight =
    accounting.article2_number.data.attributes.height
  const article2TagImageObj = {
    url: article2TagImage,
    width: article2TagImageWidth,
    height: article2TagImageHeight,
  }

  const article3Title = accounting.article3_title
  const article3Text = richTextReducer(accounting.article3_text)
  const article3Obj = {
    title: article3Title,
    text: article3Text,
  }

  const article3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article3_image.data.attributes.url
  const article3ImageWidth = accounting.article3_image.data.attributes.width
  const article3ImageHeight = accounting.article3_image.data.attributes.height
  const article3ImageObj = {
    url: article3Image,
    width: article3ImageWidth,
    height: article3ImageHeight,
  }

  const article3TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article3_number.data.attributes.url
  const article3TagImageWidth = accounting.article3_number.data.attributes.width
  const article3TagImageHeight =
    accounting.article3_number.data.attributes.height
  const article3TagImageObj = {
    url: article3TagImage,
    width: article3TagImageWidth,
    height: article3TagImageHeight,
  }

  const article4Title = accounting.article4_title
  const article4Text = richTextReducer(accounting.article4_text)
  const article4Obj = {
    title: article4Title,
    text: article4Text,
  }

  const article4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article4_image.data.attributes.url
  const article4ImageWidth = accounting.article4_image.data.attributes.width
  const article4ImageHeight = accounting.article4_image.data.attributes.height
  const article4ImageObj = {
    url: article4Image,
    width: article4ImageWidth,
    height: article4ImageHeight,
  }

  const article4TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article4_number.data.attributes.url
  const article4TagImageWidth = accounting.article4_number.data.attributes.width
  const article4TagImageHeight =
    accounting.article4_number.data.attributes.height
  const article4TagImageObj = {
    url: article4TagImage,
    width: article4TagImageWidth,
    height: article4TagImageHeight,
  }

  const article5Title = accounting.article5_title
  const article5Text = richTextReducer(accounting.article5_text)
  const article5Obj = {
    title: article5Title,
    text: article5Text,
  }

  const article5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article5_image.data.attributes.url
  const article5ImageWidth = accounting.article5_image.data.attributes.width
  const article5ImageHeight = accounting.article1_image.data.attributes.height
  const article5ImageObj = {
    url: article5Image,
    width: article5ImageWidth,
    height: article5ImageHeight,
  }

  const article5TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.article5_number.data.attributes.url
  const article5TagImageWidth = accounting.article5_number.data.attributes.width
  const article5TagImageHeight =
    accounting.article5_number.data.attributes.height
  const article5TagImageObj = {
    url: article5TagImage,
    width: article5TagImageWidth,
    height: article5TagImageHeight,
  }

  const service = accounting.service_title
  const service1 = accounting.service1
  const service2 = accounting.service2
  const service3 = accounting.service3
  const service4 = accounting.service4

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.service1_image.data.attributes.url
  const service1ImageWidth = accounting.service1_image.data.attributes.width
  const service1ImageHeight = accounting.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.service2_image.data.attributes.url
  const service2ImageWidth = accounting.service2_image.data.attributes.width
  const service2ImageHeight = accounting.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.service3_image.data.attributes.url
  const service3ImageWidth = accounting.service3_image.data.attributes.width
  const service3ImageHeight = accounting.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.service4_image.data.attributes.url
  const service4ImageWidth = accounting.service4_image.data.attributes.width
  const service4ImageHeight = accounting.service4_image.data.attributes.height

  const aboutTitle = accounting.about_title
  const aboutText = richTextReducer(accounting.about_text)

  const table = accounting.table
  const tableImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    accounting.table_image.data.attributes.url
  const tableImageWidth = accounting.table_image.data.attributes.width
  const tableImageHeight = accounting.table_image.data.attributes.height

  const contactUs = accounting.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: accounting.faq1,
      content: richTextReducer(accounting.faq1_content),
    },
    {
      title: accounting.faq2,
      content: richTextReducer(accounting.faq2_content),
    },
    {
      title: accounting.faq3,
      content: richTextReducer(accounting.faq3_content),
    },
    {
      title: accounting.faq4,
      content: richTextReducer(accounting.faq4_content),
    },
  ]

  return (
    <>
      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <div className='self-start mt-10'>
          <Image
            alt=''
            src={accountingTag}
            width={accountingTagWidth}
            height={accountingTagHeight}
            className='items-start'
          />
          <h3 className='text-2xl font-bold text-darkBlue mt-4'>
            {accountingTitle}
          </h3>
        </div>
        <ImageArticle
          aboutImage={article1ImageObj}
          aboutArticle={article1Obj}
          tagImage={article1TagImageObj}
          imageLeft={true}
        />

        <ImageArticle
          aboutImage={article2ImageObj}
          aboutArticle={article2Obj}
          tagImage={article2TagImageObj}
          imageLeft={false}
        />
        <ImageArticle
          aboutImage={article3ImageObj}
          aboutArticle={article3Obj}
          tagImage={article3TagImageObj}
          imageLeft={true}
        />

        <ImageArticle
          aboutImage={article4ImageObj}
          aboutArticle={article4Obj}
          tagImage={article4TagImageObj}
          imageLeft={false}
        />

        <ImageArticle
          aboutImage={article5ImageObj}
          aboutArticle={article5Obj}
          tagImage={article5TagImageObj}
          imageLeft={true}
        />

        <h3 className='text-2xl font-bold text-darkBlue my-4 mx-10 self-start'>
          {aboutTitle}
        </h3>
        <article
          className='text-darkBrown leading-8 space-y-4 mb-4 mx-10'
          dangerouslySetInnerHTML={{ __html: aboutText }}
        ></article>
      </section>

      <section id='numbers' className='w-full bg-veryLightBlue mt-20'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 mx-auto text-left'>
          <h3 className='text-center text-darkBlue font-bold text-4xl mt-20'>
            {service}
          </h3>
          <div className='flex flex-col py-10 text-center md:flex-row'>
            <div className='flex flex-col items-center space-y-2 h-30 mt-10 md:w-1/3'>
              <Image
                src={service1Image}
                alt=''
                width={service1ImageWidth}
                height={service1ImageHeight}
                className='h-40 w-40'
              />
              <h5 className='text-md text-darkBlue pt-6'>{service1}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 h-30 mt-10 md:w-1/3'>
              <Image
                src={service2Image}
                alt=''
                width={service2ImageWidth}
                height={service2ImageHeight}
                className='h-40 w-40'
              />
              <h5 className='text-md text-darkBlue pt-6'>{service2}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 h-30 mt-10 md:w-1/3'>
              <Image
                src={service3Image}
                alt=''
                width={service3ImageWidth}
                height={service3ImageHeight}
                className='h-40 w-40'
              />
              <h5 className='text-md text-darkBlue pt-6'>{service3}</h5>
            </div>

            <div className='flex flex-col items-center space-y-2 h-30 mt-10 md:w-1/3'>
              <Image
                src={service4Image}
                alt=''
                width={service4ImageWidth}
                height={service4ImageHeight}
                className='h-40 w-40'
              />
              <h5 className='text-md text-darkBlue pt-6'>{service4}</h5>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <div className='flex flex-col my-20 items-center'>
          <h3 className='text-3xl font-bold text-darkBlue mb-8'>{table}</h3>
          <Image
            src={tableImage}
            alt=''
            width={tableImageWidth}
            height={tableImageHeight}
          />
        </div>
        <Contact contactUs={contactUs} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}

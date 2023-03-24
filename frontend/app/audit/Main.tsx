import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import ImageArticle from '../../components/ImageArticle'
import Contact from '../../components/Contact'
import contactTop from '../../public/contact-top.png'
import caseTop from '../../public/case-top.png'
import Faqs from '../../components/Faqs'

export default async function Main() {
  const audit = await fetchSingle('audit')

  const auditTag =
    process.env.NEXT_PUBLIC_STRAPI_URL + audit.audit.data.attributes.url
  const auditTagWidth = audit.audit.data.attributes.width
  const auditTagHeight = audit.audit.data.attributes.height

  const auditTitle = audit.audit_title

  const article1Title = audit.article1_title
  const article1Text = richTextReducer(audit.article1_text)
  const article1Obj = {
    title: article1Title,
    text: article1Text,
  }

  const article1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.article1_image.data.attributes.url
  const article1ImageWidth = audit.article1_image.data.attributes.width
  const article1ImageHeight = audit.article1_image.data.attributes.height
  const article1ImageObj = {
    url: article1Image,
    width: article1ImageWidth,
    height: article1ImageHeight,
  }

  const article1TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.article1_number.data.attributes.url
  const article1TagImageWidth = audit.article1_number.data.attributes.width
  const article1TagImageHeight = audit.article1_number.data.attributes.height
  const article1TagImageObj = {
    url: article1TagImage,
    width: article1TagImageWidth,
    height: article1TagImageHeight,
  }

  const article2Title = audit.article2_title
  const article2Text = richTextReducer(audit.article2_text)
  const article2Obj = {
    title: article2Title,
    text: article2Text,
  }

  const article2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.article2_image.data.attributes.url
  const article2ImageWidth = audit.article2_image.data.attributes.width
  const article2ImageHeight = audit.article2_image.data.attributes.height
  const article2ImageObj = {
    url: article2Image,
    width: article2ImageWidth,
    height: article2ImageHeight,
  }

  const article2TagImage =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.article2_number.data.attributes.url
  const article2TagImageWidth = audit.article2_number.data.attributes.width
  const article2TagImageHeight = audit.article2_number.data.attributes.height
  const article2TagImageObj = {
    url: article2TagImage,
    width: article2TagImageWidth,
    height: article2TagImageHeight,
  }

  const service = audit.service_title
  const service1 = audit.service1
  const service2 = audit.service2
  const service3 = audit.service3
  const service4 = audit.service4
  const service5 = audit.service5

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.service1_image.data.attributes.url
  const service1ImageWidth = audit.service1_image.data.attributes.width
  const service1ImageHeight = audit.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.service2_image.data.attributes.url
  const service2ImageWidth = audit.service2_image.data.attributes.width
  const service2ImageHeight = audit.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.service3_image.data.attributes.url
  const service3ImageWidth = audit.service3_image.data.attributes.width
  const service3ImageHeight = audit.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.service4_image.data.attributes.url
  const service4ImageWidth = audit.service4_image.data.attributes.width
  const service4ImageHeight = audit.service4_image.data.attributes.height

  const service5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    audit.service5_image.data.attributes.url
  const service5ImageWidth = audit.service5_image.data.attributes.width
  const service5ImageHeight = audit.service5_image.data.attributes.height

  const tableImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + audit.audit_diagram.data.attributes.url
  const tableImageWidth = audit.audit_diagram.data.attributes.width
  const tableImageHeight = audit.audit_diagram.data.attributes.height

  const contactUs = audit.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: audit.faq1,
      content: richTextReducer(audit.faq1_content),
    },
    {
      title: audit.faq2,
      content: richTextReducer(audit.faq2_content),
    },
    {
      title: audit.faq3,
      content: richTextReducer(audit.faq3_content),
    },
    {
      title: audit.faq4,
      content: richTextReducer(audit.faq4_content),
    },
    {
      title: audit.faq5,
      content: richTextReducer(audit.faq5_content),
    },
    {
      title: audit.faq6,
      content: richTextReducer(audit.faq6_content),
    },
  ]

  return (
    <>
      <section className='flex flex-col mx-auto items-center max-w-5xl'>
        <div className='self-start mt-10'>
          <Image
            alt=''
            src={auditTag}
            width={auditTagWidth}
            height={auditTagHeight}
            className='items-start'
          />
          <h3 className='text-2xl font-bold text-darkBlue mt-4'>
            {auditTitle}
          </h3>
        </div>

        <div className='flex flex-col my-20 items-center'>
          <Image
            src={tableImage}
            alt=''
            width={tableImageWidth}
            height={tableImageHeight}
            quality='100'
          />
        </div>
      </section>

      <section className='w-full bg-veryLightBlue mt-20'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 pb-5 mx-auto text-left'>
          <h3 className='text-center text-darkBlue font-bold text-4xl mt-20'>
            {service}
          </h3>
          <div className='flex flex-col text-center md:flex-row'>
            <div className='flex flex-col space-y-2 mt-10 p-8 md:w-1/5'>
              <div className='self-center pb-6'>
                <Image
                  src={service1Image}
                  alt=''
                  width={service1ImageWidth}
                  height={service1ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <h5 className='text-md text-darkBlue'>{service1}</h5>
            </div>

            <div className='flex flex-col space-y-2 mt-10 p-8 md:w-1/5'>
              <div className='self-center pb-6'>
                <Image
                  src={service2Image}
                  alt=''
                  width={service2ImageWidth}
                  height={service2ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <h5 className='text-md text-darkBlue'>{service2}</h5>
            </div>

            <div className='flex flex-col space-y-2 mt-10 p-8 md:w-1/5'>
              <div className='self-center pb-6'>
                <Image
                  src={service3Image}
                  alt=''
                  width={service3ImageWidth}
                  height={service3ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <h5 className='text-md text-darkBlue'>{service3}</h5>
            </div>

            <div className='flex flex-col space-y-2 mt-10 p-8 md:w-1/5'>
              <div className='self-center pb-6'>
                <Image
                  src={service4Image}
                  alt=''
                  width={service4ImageWidth}
                  height={service4ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <h5 className='text-md text-darkBlue'>{service4}</h5>
            </div>

            <div className='flex flex-col space-y-2 mt-10 p-8 md:w-1/5'>
              <div className='self-center pb-6'>
                <Image
                  src={service5Image}
                  alt=''
                  width={service5ImageWidth}
                  height={service5ImageHeight}
                  className='w-32 object-fill'
                />
              </div>
              <h5 className='text-md text-darkBlue'>{service5}</h5>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='flex flex-col mx-auto items-center space-y-32 max-w-5xl'>
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
        <Contact contactUs={contactUs} />

        <Faqs faqs={faqs} />
      </section>
    </>
  )
}

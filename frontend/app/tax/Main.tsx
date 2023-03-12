import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import ImageArticle from '../../components/ImageArticle'
import { ImageType, ArticleType } from '../../types.d'
import Contact from '../../components/Contact'
import { v4 } from 'uuid'

export default async function Main() {
  const tax = await fetchSingle('tax')

  const audit = process.env.STRAPI_URL + tax.audit.data.attributes.url
  const auditWidth = tax.audit.data.attributes.width
  const auditHeight = tax.audit.data.attributes.height
  const auditObj = {
    url: audit,
    width: auditWidth,
    height: auditHeight,
  }

  const aboutTitle = tax.about_title
  const aboutText = richTextReducer(tax.about_text)
  const aboutArticle = {
    title: aboutTitle,
    text: aboutText,
  }

  const aboutImage =
    process.env.STRAPI_URL + tax.about_image.data.attributes.url
  const aboutWidth = tax.about_image.data.attributes.width
  const aboutHeight = tax.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutWidth,
    height: aboutHeight,
  }

  const taxImage = process.env.STRAPI_URL + tax.tax_image.data.attributes.url
  const taxImageWidth = tax.tax_image.data.attributes.width
  const taxImageHeight = tax.tax_image.data.attributes.height
  const taxImageObj = {
    url: taxImage,
    width: taxImageWidth,
    height: taxImageHeight,
  }

  const taxTitle = tax.tax_title
  const taxText = richTextReducer(tax.tax_text)
  const taxArticle = {
    title: taxTitle,
    text: taxText,
  }

  const contactUs = tax.contact_us

  const faqs: { title: string; content: string }[] = [
    { title: tax.faq1, content: richTextReducer(tax.faq1_content) },
    { title: tax.faq2, content: richTextReducer(tax.faq2_content) },
    { title: tax.faq3, content: richTextReducer(tax.faq3_content) },
    { title: tax.faq4, content: richTextReducer(tax.faq4_content) },
    { title: tax.faq5, content: richTextReducer(tax.faq5_content) },
    { title: tax.faq6, content: richTextReducer(tax.faq6_content) },
    { title: tax.faq7, content: richTextReducer(tax.faq7_content) },
  ]

  return (
    <section className='flex flex-col mx-auto items-center max-w-5xl'>
      <ImageArticle
        aboutImage={aboutImageObj}
        aboutArticle={aboutArticle}
        tagImage={auditObj}
        imageLeft={false}
      />

      <ImageArticle
        aboutImage={taxImageObj}
        aboutArticle={taxArticle}
        imageLeft={true}
      />

      <Contact contactUs={contactUs} />

      <div className='mx-auto space-y-4 max-w-4xl mb-16'>
        <h3 className='w-full text-center text-darkBlue font-bold text-4xl mb-16'>
          FAQS
        </h3>
        {faqs.map((item, index) => (
          <details
            key={v4()}
            className='group border-b pb-6 border-black [&_summary::-webkit-details-marker]:hidden'
            // open
          >
            <summary className='flex items-center justify-between leading-7 p-4 cursor-pointer '>
              <h4 className='font-medium flex items-start'>
                <span className='w-7 grow-0 shrink-0 inline-block text-center text-white bg-oceanBlue mr-2 rounded-full'>
                  {index + 1}
                </span>
                <span className='inline-block font-bold text-darkBlue summary-title'>
                  {item.title}
                </span>
              </h4>

              <svg
                className='ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </summary>

            <article
              className='text-sm px-14 mt-4 leading-relaxed text-gray-700 faq'
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></article>
          </details>
        ))}
      </div>
    </section>
  )
}

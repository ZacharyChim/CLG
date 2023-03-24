import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import ImageArticle from '../../components/ImageArticle'
import Contact from '../../components/Contact'
import Faqs from '../../components/Faqs'

export default async function Main() {
  const tax = await fetchSingle('tax')

  const audit =
    process.env.NEXT_PUBLIC_STRAPI_URL + tax.audit.data.attributes.url
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
    process.env.NEXT_PUBLIC_STRAPI_URL + tax.about_image.data.attributes.url
  const aboutWidth = tax.about_image.data.attributes.width
  const aboutHeight = tax.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutWidth,
    height: aboutHeight,
  }

  const taxImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + tax.tax_image.data.attributes.url
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

      <Faqs faqs={faqs} />
    </section>
  )
}

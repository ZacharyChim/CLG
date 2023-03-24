import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import Contact from '../../components/Contact'
import Faqs from '../../components/Faqs'
import number1 from '../../public/01.png'
import number2 from '../../public/02.png'
import number3 from '../../public/03.png'

export default async function Main() {
  const hk = await fetchSingle('hk')

  const serviceTitle = hk.service_title
  const serviceDesc = hk.service_desc

  const service1 = hk.service1_title
  const service2 = hk.service2_title
  const service3 = hk.service3_title
  const service4 = hk.service4_title

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service1_image.data.attributes.url
  const service1ImageWidth = hk.service1_image.data.attributes.width
  const service1ImageHeight = hk.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service2_image.data.attributes.url
  const service2ImageWidth = hk.service2_image.data.attributes.width
  const service2ImageHeight = hk.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service3_image.data.attributes.url
  const service3ImageWidth = hk.service3_image.data.attributes.width
  const service3ImageHeight = hk.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hk.service4_image.data.attributes.url
  const service4ImageWidth = hk.service4_image.data.attributes.width
  const service4ImageHeight = hk.service4_image.data.attributes.height

  const procedureTitle = hk.procedure_title
  const procedureStep1 = richTextReducer(hk.procedure_step1)
  const procedureStep2 = richTextReducer(hk.procedure_step2)
  const procedureStep3 = richTextReducer(hk.procedure_step3)

  const contactUs = hk.contact_us

  const faqs: { title: string; content: string }[] = [
    {
      title: hk.faq1,
      content: richTextReducer(hk.faq1_content),
    },
    {
      title: hk.faq2,
      content: richTextReducer(hk.faq2_content),
    },
    {
      title: hk.faq3,
      content: richTextReducer(hk.faq3_content),
    },
    {
      title: hk.faq4,
      content: richTextReducer(hk.faq4_content),
    },
    {
      title: hk.faq5,
      content: richTextReducer(hk.faq5_content),
    },
    {
      title: hk.faq6,
      content: richTextReducer(hk.faq6_content),
    },
  ]

  return (
    <>
      <section className='flex flex-col mx-auto max-w-5xl mt-10 items-center'>
        <h3 className='text-2xl font-bold text-darkBlue mb-6 mt-4'>
          {serviceTitle}
        </h3>
        <p className='max-w-lg text-center text-darkBrown'>{serviceDesc}</p>
      </section>

      <section
        className='flex flex-col w-full mx-auto mb-10 items-center md:bg-hkWave md:bg-no-repeat md:bg-contain md:bg-bottom'
        style={{ backgroundPosition: 'bottom' }}
      >
        <div className='max-w-5xl px-5 mx-auto text-left'>
          <div className='flex flex-col py-10 gap-2 text-center md:flex-row '>
            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/4'>
              <Image
                src={service1Image}
                alt=''
                width={service1ImageWidth}
                height={service1ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-white pt-6 mx-8'>
                {service1}
              </h5>
            </div>

            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/4'>
              <Image
                src={service2Image}
                alt=''
                width={service2ImageWidth}
                height={service2ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-white pt-6 mx-8'>
                {service2}
              </h5>
            </div>

            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/4'>
              <Image
                src={service3Image}
                alt=''
                width={service3ImageWidth}
                height={service3ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-white pt-6 mx-6'>
                {service3}
              </h5>
            </div>

            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/4'>
              <Image
                src={service4Image}
                alt=''
                width={service4ImageWidth}
                height={service4ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-white pt-6 mx-8'>
                {service4}
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col mx-auto max-w-4xl mt-20 mb-10 items-center'>
        <h3 className='text-4xl max-w-xl text-center font-bold text-darkBlue mb-14 mt-4'>
          {procedureTitle}
        </h3>
        <div className='grid grid-cols-1 gap-10 leading-10 md:grid-cols-5'>
          <div className='col-span-1 text-darkBrown font-bold'>
            <p>STEP</p>
            <Image
              src={number1}
              alt=''
              width={85}
              height={83}
              quality={100}
              className='ml-6'
            />
          </div>
          <div className='col-span-4 mt-8 pl-10'>
            <article
              dangerouslySetInnerHTML={{ __html: procedureStep1 }}
            ></article>
          </div>
          <div className='col-span-1 text-darkBrown font-bold'>
            <p>STEP</p>
            <Image
              src={number2}
              alt=''
              width={85}
              height={83}
              quality={100}
              className='ml-6'
            />
          </div>
          <div className='col-span-4 mt-8 pl-10'>
            <article
              dangerouslySetInnerHTML={{ __html: procedureStep2 }}
            ></article>
          </div>
          <div className='col-span-1 text-darkBrown font-bold'>
            <p>STEP</p>
            <Image
              src={number3}
              alt=''
              width={85}
              height={83}
              quality={100}
              className='ml-6'
            />
          </div>
          <div className='col-span-4 mt-8 pl-10'>
            <article
              dangerouslySetInnerHTML={{ __html: procedureStep3 }}
            ></article>
          </div>
        </div>
        <Contact contactUs={contactUs} />
        <Faqs faqs={faqs} />
      </section>
    </>
  )
}

import Image from 'next/image'
import React from 'react'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import Contact from '../../components/Contact'
import arrow from '../../public/arrow-white.png'
import ImageArticle from '../../components/ImageArticle'
import contactTop from '../../public/contact-top.png'
import caseTop from '../../public/case-top.png'
import curve from '/public/small-curve.png'

export default async function Main() {
  const curveWidth = 33
  const curveHeight = 10
  const ngo = await fetchSingle('ngo')

  const incorporation =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.incorporation.data.attributes.url
  const incorporationWidth = ngo.incorporation.data.attributes.width
  const incorporationHeight = ngo.incorporation.data.attributes.height
  const tagObj = {
    url: incorporation,
    width: incorporationWidth,
    height: incorporationHeight,
  }

  const aboutTitle = ngo.about_title
  const aboutContent = richTextReducer(ngo.about_content)
  const aboutObj = {
    title: aboutTitle,
    text: aboutContent,
  }
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.about_image.data.attributes.url
  const aboutImageWidth = ngo.about_image.data.attributes.width
  const aboutImageHeight = ngo.about_image.data.attributes.height
  const aboutImageObj = {
    url: aboutImage,
    width: aboutImageWidth,
    height: aboutImageHeight,
  }

  const purpose = ngo.purpose
  const purpose1 = ngo.purpose1
  const purpose2 = ngo.purpose2
  const purpose3 = ngo.purpose3
  const purpose1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.purpose1_image.data.attributes.url
  const purpose1ImageWidth = ngo.purpose1_image.data.attributes.width
  const purpose1ImageHeight = ngo.purpose1_image.data.attributes.height
  const purpose2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.purpose2_image.data.attributes.url
  const purpose2ImageWidth = ngo.purpose2_image.data.attributes.width
  const purpose2ImageHeight = ngo.purpose2_image.data.attributes.height
  const purpose3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.purpose3_image.data.attributes.url
  const purpose3ImageWidth = ngo.purpose3_image.data.attributes.width
  const purpose3ImageHeight = ngo.purpose3_image.data.attributes.height

  const addition = ngo.addition
  const benefitTitle = ngo.benefit_title
  const benefitContent = richTextReducer(ngo.benefit_content)

  const leftSmall = ngo.left_small
  const left = ngo.left
  const rightSmall = ngo.right_small
  const right = ngo.right

  const serviceTitle = ngo.service_title
  const service1 = ngo.service1
  const service2 = ngo.service2
  const service3 = ngo.service3
  const service4 = ngo.service4
  const service5 = ngo.service5
  const service6 = ngo.service6

  const service1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service1_image.data.attributes.url
  const service1ImageWidth = ngo.service1_image.data.attributes.width
  const service1ImageHeight = ngo.service1_image.data.attributes.height

  const service2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service2_image.data.attributes.url
  const service2ImageWidth = ngo.service2_image.data.attributes.width
  const service2ImageHeight = ngo.service2_image.data.attributes.height

  const service3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service3_image.data.attributes.url
  const service3ImageWidth = ngo.service3_image.data.attributes.width
  const service3ImageHeight = ngo.service3_image.data.attributes.height

  const service4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service4_image.data.attributes.url
  const service4ImageWidth = ngo.service4_image.data.attributes.width
  const service4ImageHeight = ngo.service4_image.data.attributes.height

  const service5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service5_image.data.attributes.url
  const service5ImageWidth = ngo.service5_image.data.attributes.width
  const service5ImageHeight = ngo.service5_image.data.attributes.height

  const service6Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + ngo.service6_image.data.attributes.url
  const service6ImageWidth = ngo.service6_image.data.attributes.width
  const service6ImageHeight = ngo.service6_image.data.attributes.height

  const contactUs = ngo.contact_us

  return (
    <>
      <section className='flex flex-col mx-auto max-w-5xl mt-10 items-center'>
        <ImageArticle
          aboutImage={aboutImageObj}
          aboutArticle={aboutObj}
          tagImage={tagObj}
          imageLeft={false}
        />
      </section>

      <section
        className='flex flex-col w-full mb-10 items-center md:bg-ngoWave md:bg-no-repeat md:bg-contain md:bg-bottom'
        style={{ backgroundPosition: 'bottom' }}
      >
        <h3 className='text-2xl max-w-xl text-center text-oceanBlue mt-4'>
          {purpose}
        </h3>
        <div className='max-w-5xl text-left'>
          <div className='flex flex-col pt-10 pb-20 gap-20 text-center md:flex-row '>
            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/3'>
              <Image
                src={purpose1Image}
                alt=''
                width={purpose1ImageWidth}
                height={purpose1ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-darkBlue pt-6 mx-8'>
                {purpose1}
              </h5>
            </div>

            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/3'>
              <Image
                src={purpose2Image}
                alt=''
                width={purpose2ImageWidth}
                height={purpose2ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-darkBlue pt-6 mx-8'>
                {purpose2}
              </h5>
            </div>

            <div className='flex flex-col items-center space-y-2 mt-10 md:w-1/3'>
              <Image
                src={purpose3Image}
                alt=''
                width={purpose3ImageWidth}
                height={purpose3ImageHeight}
                className='h-40 object-contain'
              />
              <h5 className='text-md text-darkBlue md:text-darkBlue pt-6 mx-6'>
                {purpose3}
              </h5>
            </div>
          </div>
          <div className='relative px-4 mx-4'>
            <div className='md:absolute md:-bottom-5 text-center w-full text-white bg-blue-400 py-3 rounded-full '>
              <Image
                src={arrow}
                alt=''
                width={12}
                height={12}
                className='inline mr-3 align-baseline	'
              />
              {addition}
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col mx-auto max-w-5xl mt-20 items-left'>
        <h3 className='text-2xl font-bold text-darkBlue text-left mb-4 mx-4'>
          {benefitTitle}
        </h3>

        <article
          className='leading-10 mx-4'
          dangerouslySetInnerHTML={{ __html: benefitContent }}
        ></article>

        <div className='flex flex-col text-center text-white mt-10 mx-4 space-y-2 md:space-y-0 md:flex-row md:gap-2'>
          <div className='bg-oceanBlue p-6 rounded-3xl md:w-1/2'>
            <p className='text-sm mb-6'>{leftSmall}</p>
            <p>{left}</p>
          </div>
          <div className='bg-darkBlue p-6 rounded-3xl md:w-1/2'>
            <p className='text-sm mb-1'>{rightSmall}</p>
            <p>{right}</p>
          </div>
        </div>
      </section>
      <section className='w-full bg-veryLightBlue mt-20'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 pb-5 mx-auto text-left'>
          <h3 className='text-center text-darkBlue font-bold text-4xl my-20'>
            {serviceTitle}
          </h3>
          <div className='grid grid-cols-1 text-center gap-8 mb-20 md:grid-cols-3'>
            <div className='flex flex-col space-y-2 p-8 bg-white border-4 rounded-xl border-borderBlue'>
              <div className='self-center'>
                <Image
                  src={service1Image}
                  alt=''
                  width={service1ImageWidth}
                  height={service1ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-sm text-darkBlue'>{service1}</h5>
            </div>

            <div className='flex flex-col space-y-2 p-8 bg-white border-4 rounded-xl border-borderBlue'>
              <div className='self-center'>
                <Image
                  src={service2Image}
                  alt=''
                  width={service2ImageWidth}
                  height={service2ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-sm text-darkBlue'>{service2}</h5>
            </div>

            <div className='flex flex-col space-y-2 p-8 bg-white border-4 rounded-xl border-borderBlue'>
              <div className='self-center'>
                <Image
                  src={service3Image}
                  alt=''
                  width={service3ImageWidth}
                  height={service3ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-md text-darkBlue'>{service3}</h5>
            </div>

            <div className='flex flex-col space-y-2 p-8 bg-white border-4 rounded-xl border-borderBlue'>
              <div className='self-center'>
                <Image
                  src={service4Image}
                  alt=''
                  width={service4ImageWidth}
                  height={service4ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-md text-darkBlue'>{service4}</h5>
            </div>
            <div className='flex flex-col space-y-2 p-8 bg-white border-4 rounded-xl border-borderBlue'>
              <div className='self-center'>
                <Image
                  src={service5Image}
                  alt=''
                  width={service5ImageWidth}
                  height={service5ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />

              <h5 className='text-md text-darkBlue'>{service5}</h5>
            </div>
            <div className='flex flex-col space-y-2 p-8 bg-white border-4 rounded-xl border-borderBlue'>
              <div className='self-center'>
                <Image
                  src={service6Image}
                  alt=''
                  width={service6ImageWidth}
                  height={service6ImageHeight}
                  className='object-contain'
                />
              </div>
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto py-3'
              />
              <h5 className='text-md text-darkBlue'>{service6}</h5>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />
      <section className='flex flex-col mx-auto max-w-5xl mt-10 items-center'>
        <Contact contactUs={contactUs} />
      </section>
    </>
  )
}

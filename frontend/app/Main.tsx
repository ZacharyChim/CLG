import React from 'react'
import Image from 'next/image'

const fetchData = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate=%2A`
  )

  const resData = await res.json()
  return resData
}

const fetchDesc = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate[0]=ImageDescLeft&populate[1]=ImageDescLeft.Image&populate[2]=ImageDescRight&populate[3]=ImageDescRight.Image&populate[4]=ImageDescLeft.ImageTitle&populate[5]=ImageDescRight.ImageTitle`
  )

  const resData = await res.json()
  return resData
}

export default async function Main() {
  const res = await fetchData()
  const data = res.data.attributes

  const comma = data.comma.data.attributes.url
  const commaURL = process.env.STRAPI_URL + comma

  const desc = await fetchDesc()
  const descLeft = desc.data.attributes.ImageDescLeft.Image.data.attributes.url
  const descLeftURL = process.env.STRAPI_URL + descLeft
  const descLeftTitle =
    desc.data.attributes.ImageDescLeft.ImageTitle.data.attributes.url
  const descLeftTitleURL = process.env.STRAPI_URL + descLeftTitle

  const descRight =
    desc.data.attributes.ImageDescRight.Image.data.attributes.url
  const descRightURL = process.env.STRAPI_URL + descRight
  const descRightTitle =
    desc.data.attributes.ImageDescRight.ImageTitle.data.attributes.url
  const descRightTitleURL = process.env.STRAPI_URL + descRightTitle

  const xero = data.xero.data.attributes.url
  const xeroURL = process.env.STRAPI_URL + xero

  const xeroSilver = data.xeroSilver.data.attributes.url
  const xeroSilverURL = process.env.STRAPI_URL + xeroSilver
  return (
    <>
      <section
        id='desc'
        className='flex flex-col max-w-2xl px-5 mx-auto mt-12 text-center items-center'
      >
        <h3 className='w-96 text-center text-darkBlue font-bold text-4xl mb-4'>
          SMART ACCOUNTING FOR THE HAPPY LIFE
        </h3>
        <p className='leading-10 text-center my-6'>
          By facing substantial change in society and the general environment,
          we are always passionate about finding solutions for different
          business difficulties, to help our clients to work smartly and easily
          every day. We did it through our three main service scopes — cloud
          solutions, assurance, and advisory. We are always doing our best to
          assist our clients with their challenging and tough business tasks and
          realize their largest aspirations in their business.
        </p>
        <span className='w-12 my-5'>
          <Image src={commaURL} alt='comma' width='70' height='51' />
        </span>
      </section>

      <section id='simple'>
        <div className='container flex flex-col px-10 mx-auto mt-10 space-y-12 items-center md:space-y-0 md:flex-row'>
          <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:w-1/2'>
            <Image
              src={descLeftURL}
              alt='Keep It Simple'
              width='535'
              height='504'
            />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={descLeftTitleURL}
              alt='Keep It Simple Title'
              width='331'
              height='43'
            />
            <p>
              We offer a hands-on approach with an understanding of your value
              chain. We help simplify everyday business tasks with cloud
              solutions.
            </p>
          </div>
        </div>
        <div className='container flex flex-col-reverse px-10 mx-auto mt-10 space-y-12 items-center md:space-y-0 md:flex-row'>
          <div className='container flex flex-col px-4 mt-10 mx-auto space-y-8 md:space-y-0 md:w-1/2'>
            <Image
              src={descRightTitleURL}
              alt='Glow It Fast'
              width='309'
              height='45'
            />

            <p>
              Let us take you to the complex accounting, finance and taxes
              world. You then focus on what matters most, growing the business
              faster together.
            </p>
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={descRightURL}
              alt='Xero Silver Partner'
              width='553'
              height='504'
            />
          </div>
        </div>
      </section>

      <section id='partner'>
        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          <div className='flex flex-col space-y-12 items-center md:w-1/2'>
            <Image src={xeroURL} alt='Xero' width='256' height='123' />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={xeroSilverURL}
              alt='Xero Silver Partner'
              width='471'
              height='41'
            />
            <h3 className='text-brightBlue text-xl font-bold'>
              Emerging Accounting Partner Of The Year - HONG KONG
            </h3>
            <p>
              By combining innovation and technology, CLG Group has become the
              partner of the cloud-based accounting software Xero. We believe
              that the use of technology greatly improves the efficiency and
              effectiveness of streamlining business processes. Our Team
              consists of Xero-certified advisors, guiding our clients to
              transform their business with solid experiences and knowledge.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

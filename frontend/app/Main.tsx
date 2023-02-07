import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackToTop from './BackToTop'

import contactTop from '../public/contact-top.png'
import caseTop from '../public/case-top.png'
import partnershipTop from '../public/partnership-top.png'
import serviceTop from '../public/service-top.png'

const fetchData = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate=%2A`
  )

  const resData = await res.json()
  return resData
}

const fetchPost = async (id: number) => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/posts/${id}?populate=%2A`
  )

  const resData = await res.json()
  return resData.data.attributes
}

const fetchDesc = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate[0]=ImageDescLeft&populate[1]=ImageDescLeft.Image&populate[2]=ImageDescRight&populate[3]=ImageDescRight.Image&populate[4]=ImageDescLeft.ImageTitle&populate[5]=ImageDescRight.ImageTitle`
  )

  const resData = await res.json()
  return resData
}

const fetchNumber = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/home-page?populate[0]=experience&populate[1]=client&populate[2]=award`
  )

  const resData = await res.json()
  return resData.data.attributes
}

export default async function Main() {
  const res = await fetchData()
  const data = res.data.attributes

  const post3 = await fetchPost(3)
  const post3URL =
    process.env.STRAPI_URL + post3.featuredImage.data.attributes.url
  const post4 = await fetchPost(4)
  const post4URL =
    process.env.STRAPI_URL + post4.featuredImage.data.attributes.url
  const post5 = await fetchPost(5)
  const post5URL =
    process.env.STRAPI_URL + post5.featuredImage.data.attributes.url

  const commaURL = process.env.STRAPI_URL + data.comma.data.attributes.url

  const desc = await fetchDesc()
  const descLeftURL =
    process.env.STRAPI_URL +
    desc.data.attributes.ImageDescLeft.Image.data.attributes.url

  const descLeftTitleURL =
    process.env.STRAPI_URL +
    desc.data.attributes.ImageDescLeft.ImageTitle.data.attributes.url

  const descRightURL =
    process.env.STRAPI_URL +
    desc.data.attributes.ImageDescRight.Image.data.attributes.url

  const descRightTitleURL =
    process.env.STRAPI_URL +
    desc.data.attributes.ImageDescRight.ImageTitle.data.attributes.url

  const number = await fetchNumber()
  const expURL = process.env.STRAPI_URL + number.experience.data.attributes.url
  const expNumber = number.experienceNumber
  const expText = number.experienceText
  const clientURL = process.env.STRAPI_URL + number.client.data.attributes.url
  const clientNumber = number.clientNumber
  const clientText = number.clientText
  const awardURL = process.env.STRAPI_URL + number.award.data.attributes.url
  const awardTitle = number.awardTitle
  const awardText = number.awardText
  const awardDesc = number.awardDesc

  const xeroURL = process.env.STRAPI_URL + data.xero.data.attributes.url

  const xeroSilverURL =
    process.env.STRAPI_URL + data.xeroSilver.data.attributes.url

  const xeroTitle = data.xeroTitle
  const xeroText = data.xeroText

  const serviceTitle = data.serviceTitle
  const incorporation = data.incorporation
  const secretary = data.secretary
  const accounting = data.accounting
  const taxation = data.taxation
  const auditing = data.auditing
  const funding = data.funding
  const cloud = data.cloud
  const solution = data.solution

  const incorporationURL =
    process.env.STRAPI_URL + data.incorporationImage.data.attributes.url
  const secretaryURL =
    process.env.STRAPI_URL + data.secretaryImage.data.attributes.url
  const accountingURL =
    process.env.STRAPI_URL + data.accountingImage.data.attributes.url
  const taxationURL =
    process.env.STRAPI_URL + data.taxationImage.data.attributes.url
  const auditingURL =
    process.env.STRAPI_URL + data.auditingImage.data.attributes.url
  const fundingURL =
    process.env.STRAPI_URL + data.fundingImage.data.attributes.url
  const cloudURL = process.env.STRAPI_URL + data.cloudImage.data.attributes.url
  const solutionURL =
    process.env.STRAPI_URL + data.solutionImage.data.attributes.url

  const partnership = data.partnership
  const partnershipDesc = data.partnershipDesc

  const workstemURL =
    process.env.STRAPI_URL + data.workstemLogo.data.attributes.url
  const hubdocURL = process.env.STRAPI_URL + data.hubdocLogo.data.attributes.url
  const xeroLogoURL = process.env.STRAPI_URL + data.xeroLogo.data.attributes.url
  const mshopURL = process.env.STRAPI_URL + data.mshopLogo.data.attributes.url
  const gingersoftURL =
    process.env.STRAPI_URL + data.gingersoftLogo.data.attributes.url
  const eats365URL =
    process.env.STRAPI_URL + data.eats365Logo.data.attributes.url
  const foodmarkethubURL =
    process.env.STRAPI_URL + data.foodmarkethubLogo.data.attributes.url
  const yoovURL = process.env.STRAPI_URL + data.yoovLogo.data.attributes.url
  const dkdooURL = process.env.STRAPI_URL + data.dkdooLogo.data.attributes.url
  const kpayURL = process.env.STRAPI_URL + data.kpayLogo.data.attributes.url
  const eberURL = process.env.STRAPI_URL + data.eberLogo.data.attributes.url
  const hikeURL = process.env.STRAPI_URL + data.hikeLogo.data.attributes.url
  const boutirURL = process.env.STRAPI_URL + data.boutirLogo.data.attributes.url
  const postifyURL =
    process.env.STRAPI_URL + data.postifyLogo.data.attributes.url

  const caseTitle = data.caseTitle
  const caseDesc = data.caseDesc

  const contactTitle = data.contactTitle
  const contactSubtitle = data.contactSubtitle
  const contactText = data.contactText

  return (
    <>
      <section
        id='desc'
        className='flex flex-col max-w-2xl px-5 mx-auto mt-12 text-center items-center'
      >
        <h3 className='w-96 text-center text-darkBlue font-bold text-4xl mb-4'>
          SMART ACCOUNTING FOR THE HAPPY LIFE
        </h3>
        <p className='leading-10 text-justify my-6'>
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

      <section
        id='simple'
        className='bg-curveLine bg-contain bg-no-repeat bg-center mb-10 md:bg-top'
      >
        <div className='container flex flex-col max-w-5xl px-10 mx-auto mt-10 space-y-12 items-center md:space-y-0 md:flex-row'>
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
        <div className='container flex flex-col-reverse max-w-5xl px-10 mx-auto mt-10 space-y-12 items-center md:space-y-0 md:flex-row'>
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

      <section id='numbers' className='bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 mx-auto text-center'>
          <div className='flex flex-col py-20 md:flex-row md:space-x-14'>
            <div className='flex flex-col items-center p-8 space-y-2 h-30 md:w-1/3'>
              <Image src={expURL} alt={expText} width='240' height='300' />
              <h5 className='text-4xl font-bold text-veryDarkBlue pt-6'>
                {expNumber}
              </h5>
              <p className='text-xl'>{expText}</p>
            </div>

            <div className='flex flex-col items-center p-8 space-y-2 h-30 md:w-1/3'>
              <Image
                src={clientURL}
                alt={clientText}
                width='293'
                height='300'
              />
              <h5 className='text-4xl font-bold text-veryDarkBlue pt-6'>
                {clientNumber}
              </h5>
              <p className='text-xl'>{clientText}</p>
            </div>

            <div className='flex flex-col items-center p-8 space-y-2 h-30 md:w-1/3'>
              <Image src={awardURL} alt={awardText} width='269' height='300' />
              <h5 className='text-4xl font-bold text-veryDarkBlue pt-6'>
                {awardTitle}
              </h5>
              <p className='text-xl'>{awardText}</p>
              <p className='text-lg text-darkBlue'>{awardDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id='xero' className='bg-lineBg bg-no-repeat bg-cover bg-center'>
        <Image src={contactTop} alt='' />
        <div className='container max-w-4xl flex flex-col px-4 mx-auto py-40 md:flex-row'>
          <div className='flex flex-col space-y-12 mb-10 items-center md:w-1/2'>
            <Image src={xeroURL} alt='' width='256' height='123' />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={xeroSilverURL}
              alt='Xero Silver Partner'
              width='471'
              height='41'
            />
            <h3 className='text-brightBlue text-xl font-bold'>{xeroTitle}</h3>
            <p className='text-darkBrown'>{xeroText}</p>
          </div>
        </div>
        <Image src={serviceTop} alt='' />
      </section>

      <section id='services' className='bg-deepBlue'>
        <div className='max-w-4xl px-5 mx-auto py-20 text-center'>
          <h2 className='text-4xl font-bold text-white mb-10 mt-10 '>
            {serviceTitle}
          </h2>

          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={incorporationURL}
                alt={incorporation}
                width='216'
                height='216'
              />
              <h5 className='text-md text-white pt-6'>{incorporation}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={secretaryURL}
                alt={secretary}
                width='216'
                height='216'
              />
              <h5 className='text-md text-white pt-6'>{secretary}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={accountingURL}
                alt={accounting}
                width='216'
                height='216'
              />
              <h5 className='text-md text-white pt-6'>{accounting}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={taxationURL}
                alt={taxation}
                width='216'
                height='216'
              />
              <h5 className='text-md text-white pt-6'>{taxation}</h5>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={auditingURL}
                alt={auditing}
                width='216'
                height='216'
              />
              <h5 className='text-md text-white pt-6'>{auditing}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image src={fundingURL} alt={funding} width='216' height='216' />
              <h5 className='text-md text-white pt-6'>{funding}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image src={cloudURL} alt={cloud} width='216' height='216' />
              <h5 className='text-md text-white pt-6'>{cloud}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={solutionURL}
                alt={solution}
                width='216'
                height='216'
              />
              <h5 className='text-md text-white pt-6'>{solution}</h5>
            </div>
          </div>
        </div>
      </section>

      <section id='partnership' className='bg-white'>
        <Image src={partnershipTop} alt='' />
        <div className='max-w-4xl mx-auto py-20 text-center'>
          <h2 className='text-4xl font-bold text-darkBlue mb-10 mt-10 '>
            {partnership}
          </h2>
          <p className='text-lg text-darkBrown mb-10'>{partnershipDesc}</p>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-0'>
            <div className='flex flex-col justify-center space-y-2 md:w-1/4'>
              <Image src={workstemURL} alt='' width='300' height='47' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={hubdocURL} alt='' width='185' height='57' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={xeroLogoURL} alt='' width='100' height='100' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={mshopURL} alt='' width='291' height='80' />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/3'>
              <Image src={gingersoftURL} alt='' width='300' height='79' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/3'>
              <Image src={eats365URL} alt='' width='300' height='150' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/3'>
              <Image src={foodmarkethubURL} alt='' width='300' height='124' />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={yoovURL} alt='' width='281' height='100' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={dkdooURL} alt='' width='300' height='79' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={kpayURL} alt='' width='300' height='150' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={eberURL} alt='' width='300' height='150' />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={hikeURL} alt='' width='281' height='100' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={boutirURL} alt='' width='300' height='79' />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image src={postifyURL} alt='' width='300' height='150' />
            </div>
          </div>
        </div>
      </section>

      <section id='case' className='bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 mx-auto pt-32 pb-20 text-center'>
          <h2 className='text-4xl font-bold text-darkBlue mb-10 mt-10 '>
            {caseTitle}
          </h2>
          <p className='text-lg text-darkBrown mb-10'>{caseDesc}</p>

          <div className='flex flex-col pb-20 space-y-12 md:flex-row md:space-x-14'>
            <div className='flex flex-col items-center mt-12 space-y-2 md:w-1/3'>
              <article className='overflow-hidden w-96 bg-white border border-gray-100 shadow-sm md:w-auto'>
                <Image
                  alt={post3.title}
                  src={post3URL}
                  width={post3.featuredImage.data.attributes.width}
                  height={post3.featuredImage.data.attributes.height}
                  className='h-56 w-full object-cover'
                />

                <div className='text-left p-4 sm:p-6'>
                  <Link href='#'>
                    <h3 className='text-md text-darkBrown'>{post3.title}</h3>
                  </Link>

                  <Link
                    href='#'
                    className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                  >
                    DETAILS
                  </Link>
                </div>
              </article>
            </div>

            <div className='flex flex-col items-center space-y-2 md:w-1/3'>
              <article className='overflow-hidden w-96 bg-white border border-gray-100 shadow-sm md:w-auto'>
                <Image
                  alt={post4.title}
                  src={post4URL}
                  width={post4.featuredImage.data.attributes.width}
                  height={post4.featuredImage.data.attributes.height}
                  className='h-56 w-full object-cover'
                />

                <div className='text-left p-4 sm:p-6'>
                  <Link href='#'>
                    <h3 className='text-md  text-darkBrown'>{post4.title}</h3>
                  </Link>

                  <Link
                    href='#'
                    className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                  >
                    DETAILS
                  </Link>
                </div>
              </article>
            </div>

            <div className='flex flex-col items-center space-y-2 md:w-1/3'>
              <article className='overflow-hidden w-96 bg-white border border-gray-100 shadow-sm md:w-auto'>
                <Image
                  alt={post5.title}
                  src={post5URL}
                  width={post5.featuredImage.data.attributes.width}
                  height={post5.featuredImage.data.attributes.height}
                  className='h-56 w-full object-cover'
                />

                <div className='text-left p-4 sm:p-6'>
                  <Link href='#'>
                    <h3 className='text-md text-darkBrown'>{post5.title}</h3>
                  </Link>

                  <Link
                    href='#'
                    className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                  >
                    DETAILS
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='bg-white'>
        <Image src={contactTop} alt='' />
        <div className='max-w-3xl mx-auto pt-10 text-center'>
          <h2 className='text-4xl font-bold text-darkBlue mt-10'>
            {contactTitle}
          </h2>
          <h2 className='text-4xl font-bold text-darkBlue mb-10'>
            {contactSubtitle}
          </h2>

          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center mb-20 mx-5 bg-contactBg bg-cover pb-20 md:flex-row'>
              <p className='text-lg text-left text-darkBlue mt-48 ml-20 mr-1 mb-2'>
                {contactText}
              </p>
              <Link
                className='inline-block rounded-full bg-white w-2/5 place-self-end mr-2 py-2 px-4 text-md font-bold text-darkBlue hover:bg-darkBlue hover:text-white md:mb-8'
                href='#'
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <BackToTop />
        </div>
      </section>
    </>
  )
}

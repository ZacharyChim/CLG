import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 } from 'uuid'
import { fetchCollection, fetchSingle, trimTitle } from '../lib/utils'

import contactTop from '../public/contact-top.png'
import caseTop from '../public/case-top.png'
import partnershipTop from '../public/partnership-top.png'
import serviceTop from '../public/service-top.png'
import Contact from '../components/Contact'

const fetchData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-page?populate=%2A`
  )

  const resData = await res.json()
  return resData
}

const fetchDesc = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-page?populate[0]=ImageDescLeft&populate[1]=ImageDescLeft.Image&populate[2]=ImageDescRight&populate[3]=ImageDescRight.Image&populate[4]=ImageDescLeft.ImageTitle&populate[5]=ImageDescRight.ImageTitle`
  )

  const resData = await res.json()
  return resData
}

export default async function Main() {
  const data = await fetchSingle('home-page')

  const allCases = await fetchCollection('cases')
  const newCases = allCases.filter((item) => item.id < 4)

  const commaURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.comma.data.attributes.url

  const desc = await fetchDesc()
  const descLeftURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    desc.data.attributes.ImageDescLeft.Image.data.attributes.url
  const descLeftWidth =
    desc.data.attributes.ImageDescLeft.Image.data.attributes.width
  const descLeftHeight =
    desc.data.attributes.ImageDescLeft.Image.data.attributes.height

  const descLeftTitleURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    desc.data.attributes.ImageDescLeft.ImageTitle.data.attributes.url
  const descLeftTitleWidth =
    desc.data.attributes.ImageDescLeft.ImageTitle.data.attributes.width
  const descLeftTitleHeight =
    desc.data.attributes.ImageDescLeft.ImageTitle.data.attributes.height

  const descRightTitleURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    desc.data.attributes.ImageDescRight.ImageTitle.data.attributes.url
  const descRightTitleWidth =
    desc.data.attributes.ImageDescRight.ImageTitle.data.attributes.width
  const descRightTitleHeight =
    desc.data.attributes.ImageDescRight.ImageTitle.data.attributes.height

  const descRightURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    desc.data.attributes.ImageDescRight.Image.data.attributes.url
  const descRightWidth =
    desc.data.attributes.ImageDescRight.Image.data.attributes.width
  const descRightHeight =
    desc.data.attributes.ImageDescRight.Image.data.attributes.height

  const expURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.experience.data.attributes.url
  const expWidth = data.experience.data.attributes.width
  const expHeight = data.experience.data.attributes.height

  const expNumber = data.experienceNumber
  const expText = data.experienceText

  const clientURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.client.data.attributes.url
  const clientWidth = data.client.data.attributes.width
  const clientHeight = data.client.data.attributes.height

  const clientNumber = data.clientNumber
  const clientText = data.clientText

  const awardURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.award.data.attributes.url
  const awardWidth = data.award.data.attributes.width
  const awardHeight = data.award.data.attributes.height

  const awardTitle = data.awardTitle
  const awardText = data.awardText
  const awardDesc = data.awardDesc

  const xeroURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.xero.data.attributes.url
  const xeroWidth = data.xero.data.attributes.width
  const xeroHeight = data.xero.data.attributes.height

  const xeroSilverURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.xeroSilver.data.attributes.url
  const xeroSilverWidth = data.xeroSilver.data.attributes.width
  const xeroSilverHeight = data.xeroSilver.data.attributes.height

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
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.incorporationImage.data.attributes.url
  const incorporationWidth = data.incorporationImage.data.attributes.width
  const incorporationHeight = data.incorporationImage.data.attributes.height

  const secretaryURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.secretaryImage.data.attributes.url
  const secretaryWidth = data.secretaryImage.data.attributes.width
  const secretaryHeight = data.secretaryImage.data.attributes.height

  const accountingURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.accountingImage.data.attributes.url
  const accountingWidth = data.accountingImage.data.attributes.width
  const accountingHeight = data.accountingImage.data.attributes.height

  const taxationURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.taxationImage.data.attributes.url
  const taxationWidth = data.taxationImage.data.attributes.width
  const taxationHeight = data.taxationImage.data.attributes.height

  const auditingURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.auditingImage.data.attributes.url
  const auditingWidth = data.auditingImage.data.attributes.width
  const auditingHeight = data.auditingImage.data.attributes.height

  const fundingURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.fundingImage.data.attributes.url
  const fundingWidth = data.fundingImage.data.attributes.width
  const fundingHeight = data.fundingImage.data.attributes.height

  const cloudURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.cloudImage.data.attributes.url
  const cloudWidth = data.cloudImage.data.attributes.width
  const cloudHeight = data.cloudImage.data.attributes.height

  const solutionURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.solutionImage.data.attributes.url
  const solutionWidth = data.solutionImage.data.attributes.width
  const solutionHeight = data.solutionImage.data.attributes.height

  const partnership = data.partnership
  const partnershipDesc = data.partnershipDesc

  const workstemURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.workstemLogo.data.attributes.url
  const workstemWidth = data.workstemLogo.data.attributes.width
  const workstemHeight = data.workstemLogo.data.attributes.height

  const hubdocURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.hubdocLogo.data.attributes.url
  const hubdocWidth = data.hubdocLogo.data.attributes.width
  const hubdocHeight = data.hubdocLogo.data.attributes.height

  const xeroLogoURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.xeroLogo.data.attributes.url
  const xeroLogoWidth = data.xeroLogo.data.attributes.width
  const xeroLogoHeight = data.xeroLogo.data.attributes.height

  const mshopURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.mshopLogo.data.attributes.url
  const mshopWidth = data.mshopLogo.data.attributes.width
  const mshopHeight = data.mshopLogo.data.attributes.height

  const gingersoftURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.gingersoftLogo.data.attributes.url
  const gingersoftWidth = data.gingersoftLogo.data.attributes.width
  const gingersoftHeight = data.gingersoftLogo.data.attributes.height

  const eats365URL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.eats365Logo.data.attributes.url
  const eats365Width = data.eats365Logo.data.attributes.width
  const eats365Height = data.eats365Logo.data.attributes.height

  const foodmarkethubURL =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.foodmarkethubLogo.data.attributes.url
  const foodmarkethubWidth = data.foodmarkethubLogo.data.attributes.width
  const foodmarkethubHeight = data.foodmarkethubLogo.data.attributes.height

  const yoovURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.yoovLogo.data.attributes.url
  const yoovWidth = data.yoovLogo.data.attributes.width
  const yoovHeight = data.yoovLogo.data.attributes.height

  const dkdooURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.dkdooLogo.data.attributes.url
  const dkdooWidth = data.dkdooLogo.data.attributes.width
  const dkdooHeight = data.dkdooLogo.data.attributes.height

  const kpayURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.kpayLogo.data.attributes.url
  const kpayWidth = data.kpayLogo.data.attributes.width
  const kpayHeight = data.kpayLogo.data.attributes.height

  const eberURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.eberLogo.data.attributes.url
  const eberWidth = data.eberLogo.data.attributes.width
  const eberHeight = data.eberLogo.data.attributes.height

  const hikeURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.hikeLogo.data.attributes.url
  const hikeWidth = data.hikeLogo.data.attributes.width
  const hikeHeight = data.hikeLogo.data.attributes.height

  const boutirURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.boutirLogo.data.attributes.url
  const boutirWidth = data.boutirLogo.data.attributes.width
  const boutirHeight = data.boutirLogo.data.attributes.height

  const postifyURL =
    process.env.NEXT_PUBLIC_STRAPI_URL + data.postifyLogo.data.attributes.url
  const postifyWidth = data.postifyLogo.data.attributes.width
  const postifyHeight = data.postifyLogo.data.attributes.height

  const caseTitle = data.caseTitle
  const caseDesc = data.caseDesc

  const contactTitle = data.contactTitle
  const contactSubtitle = data.contactSubtitle
  const contactText = data.contactText
  const introTitle = data.intro_title
  const introText = data.intro_text

  return (
    <>
      <section
        id='desc'
        className='flex flex-col max-w-2xl px-5 mx-auto mt-12 text-center items-center'
      >
        <h3 className='w-96 text-center text-darkBlue font-bold text-4xl mb-4'>
          {introTitle}
        </h3>
        <p className='leading-10 text-justify my-6'>{introText}</p>
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
              width={descLeftWidth}
              height={descLeftHeight}
            />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={descLeftTitleURL}
              alt='Keep It Simple Title'
              width={descLeftTitleWidth}
              height={descLeftTitleHeight}
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
              width={descRightTitleWidth}
              height={descRightTitleHeight}
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
              width={descRightWidth}
              height={descRightHeight}
            />
          </div>
        </div>
      </section>

      <section id='numbers' className='bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='max-w-5xl px-5 mx-auto text-center'>
          <div className='flex flex-col py-20 md:flex-row md:space-x-14'>
            <div className='flex flex-col items-center p-8 space-y-2 h-30 md:w-1/3'>
              <Image
                src={expURL}
                alt={expText}
                width={expWidth}
                height={expHeight}
              />
              <h5 className='text-4xl font-bold text-veryDarkBlue pt-6'>
                {expNumber}
              </h5>
              <p className='text-xl'>{expText}</p>
            </div>

            <div className='flex flex-col items-center p-8 space-y-2 h-30 md:w-1/3'>
              <Image
                src={clientURL}
                alt={clientText}
                width={clientWidth}
                height={clientHeight}
              />
              <h5 className='text-4xl font-bold text-veryDarkBlue pt-6'>
                {clientNumber}
              </h5>
              <p className='text-xl'>{clientText}</p>
            </div>

            <div className='flex flex-col items-center p-8 space-y-2 h-30 md:w-1/3'>
              <Image
                src={awardURL}
                alt={awardText}
                width={awardWidth}
                height={awardHeight}
              />
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
          <div className='flex flex-col mr-10 mb-10 items-center md:w-1/2'>
            <Image src={xeroURL} alt='' width={xeroWidth} height={xeroHeight} />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <Image
              src={xeroSilverURL}
              alt='Xero Silver Partner'
              width={xeroSilverWidth}
              height={xeroSilverHeight}
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
                width={incorporationWidth}
                height={incorporationHeight}
              />
              <h5 className='text-md text-white pt-6'>{incorporation}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={secretaryURL}
                alt={secretary}
                width={secretaryWidth}
                height={secretaryHeight}
              />
              <h5 className='text-md text-white pt-6'>{secretary}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={accountingURL}
                alt={accounting}
                width={accountingWidth}
                height={accountingHeight}
              />
              <h5 className='text-md text-white pt-6'>{accounting}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={taxationURL}
                alt={taxation}
                width={taxationWidth}
                height={taxationHeight}
              />
              <h5 className='text-md text-white pt-6'>{taxation}</h5>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={auditingURL}
                alt={auditing}
                width={auditingWidth}
                height={auditingHeight}
              />
              <h5 className='text-md text-white pt-6'>{auditing}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={fundingURL}
                alt={funding}
                width={fundingWidth}
                height={fundingHeight}
              />
              <h5 className='text-md text-white pt-6'>{funding}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={cloudURL}
                alt={cloud}
                width={cloudWidth}
                height={cloudHeight}
              />
              <h5 className='text-md text-white pt-6'>{cloud}</h5>
            </div>

            <div className='flex flex-col items-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={solutionURL}
                alt={solution}
                width={solutionWidth}
                height={solutionHeight}
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
              <Image
                src={workstemURL}
                alt=''
                width={workstemWidth}
                height={workstemHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={hubdocURL}
                alt=''
                width={hubdocWidth}
                height={hubdocHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={xeroLogoURL}
                alt=''
                width={xeroLogoWidth}
                height={xeroLogoHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={mshopURL}
                alt=''
                width={mshopWidth}
                height={mshopHeight}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/3'>
              <Image
                src={gingersoftURL}
                alt=''
                width={gingersoftWidth}
                height={gingersoftHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/3'>
              <Image
                src={eats365URL}
                alt=''
                width={eats365Width}
                height={eats365Height}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/3'>
              <Image
                src={foodmarkethubURL}
                alt=''
                width={foodmarkethubWidth}
                height={foodmarkethubHeight}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={yoovURL}
                alt=''
                width={yoovWidth}
                height={yoovHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={dkdooURL}
                alt=''
                width={dkdooWidth}
                height={dkdooHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={kpayURL}
                alt=''
                width={kpayWidth}
                height={kpayHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={eberURL}
                alt=''
                width={eberWidth}
                height={eberHeight}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={hikeURL}
                alt=''
                width={hikeWidth}
                height={hikeHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={boutirURL}
                alt=''
                width={boutirWidth}
                height={boutirHeight}
              />
            </div>

            <div className='flex flex-col justify-center p-6 space-y-2 md:w-1/4'>
              <Image
                src={postifyURL}
                alt=''
                width={postifyWidth}
                height={postifyHeight}
              />
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
            {newCases.map((item) => (
              <div
                key={v4()}
                className='flex flex-col items-center mt-12 space-y-2 md:w-1/3'
              >
                <article className='overflow-hidden w-96 bg-white border border-gray-100 shadow-sm md:w-auto'>
                  <Image
                    alt={item.attributes.title}
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      item.attributes.featuredImage.data.attributes.url
                    }
                    width={item.attributes.featuredImage.data.attributes.width}
                    height={
                      item.attributes.featuredImage.data.attributes.height
                    }
                    className='h-56 w-full object-cover'
                  />

                  <div className='text-left p-4 sm:p-6'>
                    <Link
                      href={
                        process.env.NEXT_PUBLIC_SITE_URL +
                        '/cases/' +
                        item.attributes.slug
                      }
                    >
                      <h3 className='text-md text-darkBrown'>
                        {trimTitle(item.attributes.title)}
                      </h3>
                    </Link>

                    <Link
                      href={
                        process.env.NEXT_PUBLIC_SITE_URL +
                        '/cases/' +
                        item.attributes.slug
                      }
                      className='group mt-4 inline-flex gap-1 text-sm font-medium text-blue-600'
                    >
                      DETAILS
                    </Link>
                  </div>
                </article>
              </div>
            ))}

            {/* <div className='flex flex-col items-center space-y-2 md:w-1/3'>
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
            </div> */}
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

          <Contact contactUs={contactText} />
        </div>
      </section>
    </>
  )
}

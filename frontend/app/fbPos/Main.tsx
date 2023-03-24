import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Contact from '../../components/Contact'
import { fetchSingle, richTextReducer, trimTitle } from '../../lib/utils'
import curve from '/public/small-curve.png'

export default async function Main() {
  const fbPos = await fetchSingle('fb-pos')

  const cloudSolutions =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.cloud_solutions.data.attributes.url
  const cloudSolutionsWidth = fbPos.cloud_solutions.data.attributes.width
  const cloudSolutionsHeight = fbPos.cloud_solutions.data.attributes.height
  const aboutTitle = fbPos.about_title
  const aboutText = richTextReducer(fbPos.about_text)
  const aboutImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.about_image.data.attributes.url
  const aboutWidth = fbPos.about_image.data.attributes.width
  const aboutHeight = fbPos.about_image.data.attributes.height

  const image1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.image1.data.attributes.url
  const image1Width = fbPos.image1.data.attributes.width
  const image1Height = fbPos.image1.data.attributes.height
  const image2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.image2.data.attributes.url
  const image2Width = fbPos.image2.data.attributes.width
  const image2Height = fbPos.image2.data.attributes.height
  const image3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.image3.data.attributes.url
  const image3Width = fbPos.image3.data.attributes.width
  const image3Height = fbPos.image3.data.attributes.height

  const customersTitle1 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.customers_title1.data.attributes.url
  const customersTitle1Width = fbPos.customers_title1.data.attributes.width
  const customersTitle1Height = fbPos.customers_title1.data.attributes.height
  const customersTitle2 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.customers_title2.data.attributes.url
  const customersTitle2Width = fbPos.customers_title2.data.attributes.width
  const customersTitle2Height = fbPos.customers_title2.data.attributes.height
  const restaurantTitle =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.restaurant_title.data.attributes.url
  const restaurantTitleWidth = fbPos.restaurant_title.data.attributes.width
  const restaurantTitleHeight = fbPos.restaurant_title.data.attributes.height
  const managerTitle =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.manager_title.data.attributes.url
  const managerTitleWidth = fbPos.manager_title.data.attributes.width
  const managerTitleHeight = fbPos.manager_title.data.attributes.height

  const number1 =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.number1.data.attributes.url
  const number1Width = fbPos.number1.data.attributes.width
  const number1Height = fbPos.number1.data.attributes.height
  const number2 =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.number2.data.attributes.url
  const number2Width = fbPos.number2.data.attributes.width
  const number2Height = fbPos.number2.data.attributes.height
  const number3 =
    process.env.NEXT_PUBLIC_STRAPI_URL + fbPos.number3.data.attributes.url
  const number3Width = fbPos.number3.data.attributes.width
  const number3Height = fbPos.number3.data.attributes.height

  const customersText1 = richTextReducer(fbPos.customers_text1)
  const customersText2 = richTextReducer(fbPos.customers_text2)
  const customers = fbPos.customers
  const restaurantStaff = fbPos.restaurant_staff
  const manager = fbPos.manager
  const restaurantText = richTextReducer(fbPos.restaurant_text)
  const managerText = richTextReducer(fbPos.manager_text)

  const icon1 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon1.data.attributes.url
  const icon1Width = fbPos.solutions_icon1.data.attributes.width
  const icon1Height = fbPos.solutions_icon1.data.attributes.height
  const icon2 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon2.data.attributes.url
  const icon2Width = fbPos.solutions_icon2.data.attributes.width
  const icon2Height = fbPos.solutions_icon2.data.attributes.height
  const icon3 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon3.data.attributes.url
  const icon3Width = fbPos.solutions_icon3.data.attributes.width
  const icon3Height = fbPos.solutions_icon3.data.attributes.height
  const icon4 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon4.data.attributes.url
  const icon4Width = fbPos.solutions_icon4.data.attributes.width
  const icon4Height = fbPos.solutions_icon4.data.attributes.height
  const icon5 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon5.data.attributes.url
  const icon5Width = fbPos.solutions_icon5.data.attributes.width
  const icon5Height = fbPos.solutions_icon5.data.attributes.height
  const icon6 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon6.data.attributes.url
  const icon6Width = fbPos.solutions_icon6.data.attributes.width
  const icon6Height = fbPos.solutions_icon6.data.attributes.height
  const icon7 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon7.data.attributes.url
  const icon7Width = fbPos.solutions_icon7.data.attributes.width
  const icon7Height = fbPos.solutions_icon7.data.attributes.height
  const icon8 =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    fbPos.solutions_icon8.data.attributes.url
  const icon8Width = fbPos.solutions_icon8.data.attributes.width
  const icon8Height = fbPos.solutions_icon8.data.attributes.height

  const curveWidth = 33
  const curveHeight = 10

  const solutionsTitle1 = fbPos.solutions_title1
  const solutionsTitle2 = fbPos.solutions_title2
  const solutionsTitle3 = fbPos.solutions_title3
  const solutionsTitle4 = fbPos.solutions_title4
  const solutionsTitle5 = fbPos.solutions_title5
  const solutionsTitle6 = fbPos.solutions_title6
  const solutionsTitle7 = fbPos.solutions_title7
  const solutionsTitle8 = fbPos.solutions_title8

  const solutionsText1 = fbPos.solutions_text1
  const solutionsText2 = fbPos.solutions_text2
  const solutionsText3 = fbPos.solutions_text3
  const solutionsText4 = fbPos.solutions_text4
  const solutionsText5 = fbPos.solutions_text5
  const solutionsText6 = fbPos.solutions_text6
  const solutionsText7 = fbPos.solutions_text7
  const solutionsText8 = fbPos.solutions_text8

  const title = fbPos.title
  const solutions = fbPos.solutions
  const contactUs = fbPos.contact_us

  return (
    <section id='case' className='flex flex-col mx-auto items-center max-w-5xl'>
      <div className='mx-auto text-center'>
        <div className='flex flex-col gap-8 pl-10 py-5 items-center md:flex-row'>
          <div className='text-left md:w-1/2'>
            <Image
              alt=''
              src={cloudSolutions}
              width={cloudSolutionsWidth}
              height={cloudSolutionsHeight}
              className='object-fit'
              quality='100'
            />
            <h2 className='text-3xl font-bold text-darkBlue mb-6 mt-4'>
              {aboutTitle}
            </h2>
            <article
              className='text-darkBrown leading-7 space-y-4 mx-4'
              dangerouslySetInnerHTML={{ __html: aboutText }}
            ></article>
          </div>
          <div className='mb-16 my-16 md:w-1/2'>
            <Image
              alt=''
              src={aboutImage}
              width={aboutWidth}
              height={aboutHeight}
            />
          </div>
        </div>
      </div>

      <h3 className='text-center text-darkBlue font-bold text-4xl mb-4'>
        {title}
      </h3>

      <div className='mx-auto pt-20 text-center'>
        <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
          <div className='m-auto md:w-1/2'>
            <Image
              alt=''
              src={image1}
              width={image1Width}
              height={image1Height}
            />
          </div>
          <div className='text-left m-10 md:w-1/2'>
            <Image
              alt=''
              src={number1}
              width={number1Width}
              height={number1Height}
              className='w-16 pb-2 object-fit'
              quality='100'
            />
            <h2 className='text-3xl font-bold text-darkBlue mb-6'>
              {customers}
            </h2>
            <Image
              alt=''
              src={customersTitle1}
              width={customersTitle1Width}
              height={customersTitle1Height}
              className='object-fit'
              quality='100'
            />
            <article
              className='text-darkBrown leading-7 space-y-4 mt-4 mb-4'
              dangerouslySetInnerHTML={{ __html: customersText1 }}
            ></article>
            <Image
              alt=''
              src={customersTitle2}
              width={customersTitle2Width}
              height={customersTitle2Height}
              className='object-fit'
              quality='100'
            />
            <article
              className='text-darkBrown leading-7 space-y-4 mt-4'
              dangerouslySetInnerHTML={{ __html: customersText2 }}
            ></article>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-8 pb-20 px-5 md:flex-row'>
        <div className='text-left m-10 md:w-1/2'>
          <Image
            alt=''
            src={number2}
            width={number2Width}
            height={number2Height}
            className='w-16 pb-2 object-fit'
            quality='100'
          />
          <h2 className='text-3xl font-bold text-darkBlue mb-6'>
            {restaurantStaff}
          </h2>
          <Image
            alt=''
            src={restaurantTitle}
            width={restaurantTitleWidth}
            height={restaurantTitleHeight}
            className='object-fit'
            quality='100'
          />
          <article
            className='text-darkBrown leading-7 space-y-4 mt-4'
            dangerouslySetInnerHTML={{ __html: restaurantText }}
          ></article>
        </div>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image2}
            width={image2Width}
            height={image2Height}
          />
        </div>
      </div>

      <div className='flex flex-col gap-8 pb-20 px-5 md:flex-row'>
        <div className='m-auto md:w-1/2'>
          <Image
            alt=''
            src={image3}
            width={image3Width}
            height={image3Height}
          />
        </div>
        <div className='text-left m-10 md:w-1/2'>
          <Image
            alt=''
            src={number3}
            width={number3Width}
            height={number3Height}
            className='w-16 pb-2 object-fit'
            quality='100'
          />
          <h2 className='text-3xl font-bold text-darkBlue mb-6'>{manager}</h2>
          <Image
            alt=''
            src={managerTitle}
            width={managerTitleWidth}
            height={managerTitleHeight}
            className='object-fit'
            quality='100'
          />
          <article
            className='text-darkBrown leading-7 space-y-4 mt-4'
            dangerouslySetInnerHTML={{ __html: managerText }}
          ></article>
        </div>
      </div>

      <h3 className='text-center text-darkBlue font-bold text-4xl mb-4'>
        {solutions}
      </h3>

      <div className='max-w-4xl grid grid-cols-1 gap-8 mt-16 mb-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4'>
        <div>
          <Image
            alt=''
            src={icon1}
            width={icon1Width}
            height={icon1Height}
            className='h-16 w-14 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle1}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText1}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon2}
            width={icon2Width}
            height={icon2Height}
            className='h-16 w-16 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle2}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText2}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon3}
            width={icon3Width}
            height={icon3Height}
            className='h-16 w-16 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle3}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText3}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon4}
            width={icon4Width}
            height={icon4Height}
            className='h-16 w-16 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle4}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText4}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon5}
            width={icon5Width}
            height={icon5Height}
            className='h-16 w-16 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle5}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText5}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon6}
            width={icon6Width}
            height={icon6Height}
            className='h-16 w-12 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle6}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText6}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon7}
            width={icon7Width}
            height={icon7Height}
            className='h-16 w-16 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle7}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText7}</p>
        </div>
        <div>
          <Image
            alt=''
            src={icon8}
            width={icon8Width}
            height={icon8Height}
            className='h-16 w-16 mx-auto mb-2'
          />
          <h4 className='text-center text-darkBlue font-bold text-xl mb-4'>
            {solutionsTitle8}
          </h4>
          <Image
            alt=''
            src={curve}
            width={curveWidth}
            height={curveHeight}
            className='mx-auto mb-4'
          />
          <p className='text-center text-xs mx-4 md:mx-0'>{solutionsText8}</p>
        </div>
      </div>

      <Contact contactUs={contactUs} />
    </section>
  )
}

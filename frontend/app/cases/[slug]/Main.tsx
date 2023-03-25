import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchCollection, richTextReducer, trimTitle } from '../../../lib/utils'
import { v4 } from 'uuid'

const fetchCase = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/cases/${slug}`
  )

  const resData = await res.json()
  return resData.data.attributes
}

type PageProps = {
  slug: string
}

export default async function Main(props: PageProps) {
  const caseObj = await fetchCase(props.slug)
  const content = richTextReducer(caseObj.content)

  const publishedAt = new Date(caseObj.publishedAt)
  const monthNames = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ]
  const year = publishedAt.getFullYear()
  const month = monthNames[publishedAt.getMonth()]

  const date = publishedAt.getDate()

  const allCases = await fetchCollection('cases')
  const newCases = allCases.filter((item) => item.id < 4)

  return (
    <section id='case' className='flex flex-col mx-auto items-center max-w-5xl'>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-2/3 pr-8 pb-8 text-center md:text-left'>
              <Link
                href='/cases'
                className='text-darkBlue inline-flex items-center text-xl'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
                  />
                </svg>
                Back
              </Link>

              <h2 className='text-3xl my-4 font-bold text-darkBlue'>
                {caseObj.title}
              </h2>
              <p className='text-darkBrown half_background inline text-left'>
                {month} {date}, {year}
              </p>

              <div
                className='text-darkBrown mt-4'
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>

            <div className='md:w-1/3 text-center mx-auto'>
              <div className='flex flex-col pb-20 space-y-12'>
                {newCases.map((item) => (
                  <div
                    key={v4()}
                    className='flex flex-col bg-veryLightBlue items-center space-y-2 '
                  >
                    <article className='overflow-hidden m-3 bg-white border border-gray-100 shadow-sm md:w-auto'>
                      <Image
                        alt={item.attributes.title}
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_URL +
                          item.attributes.featuredImage.data.attributes.url
                        }
                        width={
                          item.attributes.featuredImage.data.attributes.width
                        }
                        height={
                          item.attributes.featuredImage.data.attributes.height
                        }
                        className='h-56 w-full object-cover'
                      />

                      <div className='text-left p-4 md:p-2'>
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
                          className='group mt-2 inline-flex gap-1 text-sm font-medium text-blue-600'
                        >
                          DETAILS
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

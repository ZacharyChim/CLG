import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const fetchPost = async (id: number) => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/posts/${id}?populate=%2A`
  )

  const resData = await res.json()
  return resData.data.attributes
}

export default async function Main() {
  const post3 = await fetchPost(3)
  const post3URL =
    process.env.STRAPI_URL + post3.featuredImage.data.attributes.url
  const post4 = await fetchPost(4)
  const post4URL =
    process.env.STRAPI_URL + post4.featuredImage.data.attributes.url
  const post5 = await fetchPost(5)
  const post5URL =
    process.env.STRAPI_URL + post5.featuredImage.data.attributes.url

  return (
    <section id='case' className='flex flex-col mx-auto items-center max-w-5xl'>
      <div className='px-5 mx-auto pb-20 text-center'>
        <h2 className='text-2xl font-bold text-darkBlue'>All</h2>
        <div className='flex flex-col space-y-12 md:flex-row md:space-x-8'>
          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post3.title}
                src={post3URL}
                width={post3.featuredImage.data.attributes.width}
                height={post3.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm text-darkBrown'>{post3.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>

          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post4.title}
                src={post4URL}
                width={post4.featuredImage.data.attributes.width}
                height={post4.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm  text-darkBrown'>{post4.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>

          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post5.title}
                src={post5URL}
                width={post5.featuredImage.data.attributes.width}
                height={post5.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm text-darkBrown'>{post5.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>
        </div>

        <div className='flex flex-col space-y-12 md:flex-row md:space-x-8'>
          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post3.title}
                src={post3URL}
                width={post3.featuredImage.data.attributes.width}
                height={post3.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm text-darkBrown'>{post3.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>

          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post4.title}
                src={post4URL}
                width={post4.featuredImage.data.attributes.width}
                height={post4.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm  text-darkBrown'>{post4.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>

          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post5.title}
                src={post5URL}
                width={post5.featuredImage.data.attributes.width}
                height={post5.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm text-darkBrown'>{post5.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>
        </div>

        <div className='flex flex-col space-y-12 md:flex-row md:space-x-8'>
          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post3.title}
                src={post3URL}
                width={post3.featuredImage.data.attributes.width}
                height={post3.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm text-darkBrown'>{post3.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>

          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post4.title}
                src={post4URL}
                width={post4.featuredImage.data.attributes.width}
                height={post4.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm  text-darkBrown'>{post4.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>

          <div className='flex flex-col items-center mt-12 space-y-2 bg-veryLightBlue md:w-1/3'>
            <article className='overflow-hidden bg-white m-4 border border-gray-100 shadow-sm md:w-auto'>
              <Image
                alt={post5.title}
                src={post5URL}
                width={post5.featuredImage.data.attributes.width}
                height={post5.featuredImage.data.attributes.height}
                className='h-48 w-full object-cover'
              />

              <div className='text-left px-4 py-2'>
                <Link href='#'>
                  <h3 className='text-sm text-darkBrown'>{post5.title}</h3>
                </Link>

                <Link
                  href='#'
                  className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                >
                  DETAILS
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

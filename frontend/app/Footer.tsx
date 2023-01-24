import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isTemplateExpression } from 'typescript'

const fetchFooter = async () => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/footer?populate=%2A`)

  const footer = await res.json()
  return footer.data.attributes
}

const fetchSocial = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/footer?populate[0]=SocialIcons&populate[1]=SocialIcons.Icon&populate[2]=seoData.Icon.media`
  )

  const social = await res.json()
  return social.data.attributes.SocialIcons
}

const fetchLinks = async () => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/navigation/render/1`, {
    next: { revalidate: 60 },
  })

  const links = await res.json()
  return links
}

async function Footer() {
  const footer = await fetchFooter()
  const copyright = footer.copyright
  const arrow = process.env.STRAPI_URL + footer.arrow.data.attributes.url
  const allLinks = await fetchLinks()
  const linkWithParent = allLinks.filter((item) => item.parent !== null)
  const linkAboutUS = linkWithParent.filter((item) => item.parent.id === 4)
  const linkAudit = linkWithParent.filter((item) => item.parent.id === 8)
  const linkAdvisory = linkWithParent.filter((item) => item.parent.id === 9)
  const linkFunding = linkWithParent.filter((item) => item.parent.id === 10)
  const linkIncorporation = linkWithParent.filter(
    (item) => item.parent.id === 19
  )
  const linkCloud = linkWithParent.filter((item) => item.parent.id === 20)
  const logoURL = footer.LogoWhite.data.attributes.url
  const social = await fetchSocial()
  const icons = social.map((icon) => ({
    text: icon.Text,
    iconURL: icon.Icon.data.attributes.url,
  }))

  return (
    <footer className='bg-brightBlue'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='border-r'>
            <div className='px-4 py-8'>
              <Image
                src={`${process.env.STRAPI_URL}${logoURL}`}
                alt='CLG Group Logo'
                width={174}
                height={64}
              />
            </div>
            <ul>
              {icons.map((icon) => (
                <li className='flex pb-5 pl-4 items-center' key={v4()}>
                  <Image
                    src={`${process.env.STRAPI_URL}${icon.iconURL}`}
                    alt=''
                    className='h-8'
                    width={32}
                    height={32}
                  />
                  <p className='px-2 text-grayishWhite text-sm'>{icon.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-2 lg:col-span-2 lg:grid-cols-4'>
          <div>
             {links.map((item) => (
                  <Link
                    href='#'
                    key={`footer-${item.id}`}
                    className='hover:text-brightRed'
                  >
                    {item.title}
                  </Link>
              ))} 
          </div>
        </div> */}

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
            <div>
              <p className='font-bold text-grayishWhite pb-4'>
                <Link href={allLinks[0].externalPath}>{allLinks[0].title}</Link>
              </p>
              <p className='font-bold text-grayishWhite pb-4'>
                <Link href={allLinks[1].externalPath}>{allLinks[1].title}</Link>
              </p>
              <p className='font-bold text-grayishWhite pb-4'>
                <Link href={allLinks[2].externalPath}>{allLinks[2].title}</Link>
              </p>
              <p className='font-bold text-grayishWhite pb-1'>
                <Link href={allLinks[3].path}>{allLinks[3].title}</Link>
              </p>

              <nav aria-label='Footer Navigation - Services' className='my-2'>
                <ul className='space-y-3 text-sm mb-4'>
                  {linkAboutUS.map((item) => (
                    <li key={v4()}>
                      <a
                        href={item.externalPath}
                        className='flex items-center text-grayishWhite transition hover:opacity-75'
                      >
                        <span>
                          <Image
                            src={arrow}
                            alt='arrow'
                            width={11}
                            height={11}
                          />
                        </span>
                        <span className='ml-2'>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-bold text-grayishWhite'>{allLinks[7].title}</p>

              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-3 text-sm mb-4'>
                  {linkAudit.map((item) => (
                    <li key={v4()}>
                      <a
                        href={item.externalPath}
                        className='flex items-center text-grayishWhite transition hover:opacity-75'
                      >
                        <span>
                          <Image
                            src={arrow}
                            alt='arrow'
                            width={11}
                            height={11}
                          />
                        </span>
                        <span className='ml-2'>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className='font-bold text-grayishWhite mb-3'>
                  {allLinks[11].title}
                </p>
                <ul className='space-y-3 text-sm mb-4'>
                  {linkAdvisory.map((item) => (
                    <li key={v4()}>
                      <a
                        href={item.externalPath}
                        className='flex items-center text-grayishWhite transition hover:opacity-75'
                      >
                        <span>
                          <Image
                            src={arrow}
                            alt='arrow'
                            width={11}
                            height={11}
                          />
                        </span>
                        <span className='ml-2'>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className='font-bold text-grayishWhite mb-3'>
                  {allLinks[14].title}
                </p>
                <ul className='space-y-3 text-sm mb-4'>
                  {linkFunding.map((item) => (
                    <li key={v4()}>
                      <a
                        href={item.externalPath}
                        className='flex items-center text-grayishWhite transition hover:opacity-75'
                      >
                        <span>
                          <Image
                            src={arrow}
                            alt='arrow'
                            width={11}
                            height={11}
                          />
                        </span>
                        <span className='ml-2'>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-bold text-grayishWhite mb-2'>
                {allLinks[18].title}
              </p>

              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-3 text-sm mb-4'>
                  {linkIncorporation.map((item) => (
                    <li key={v4()}>
                      <a
                        href={item.externalPath}
                        className='flex items-center text-grayishWhite transition hover:opacity-75'
                      >
                        <span>
                          <Image
                            src={arrow}
                            alt='arrow'
                            width={11}
                            height={11}
                          />
                        </span>
                        <span className='ml-2'>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-bold text-grayishWhite'>
                {allLinks[28].title}
              </p>

              <nav aria-label='Footer Navigation - Legal' className='mt-6'>
                <ul className='space-y-3 text-sm mb-4'>
                  {linkCloud.map((item) => (
                    <li key={v4()}>
                      <a
                        href={item.externalPath}
                        className='flex items-center text-grayishWhite transition hover:opacity-75'
                      >
                        <span>
                          <Image
                            src={arrow}
                            alt='arrow'
                            width={11}
                            height={11}
                          />
                        </span>
                        <span className='ml-2'>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-darkBlue border-b-8 border-slate-900'>
        <div className='max-w-screen-xl px-4 py-5 mx-auto space-y-8  sm:px-6 lg:space-y-16 lg:px-8'>
          <p className='text-xs text-grayishWhite'>{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

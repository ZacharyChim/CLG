import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isTemplateExpression } from 'typescript'

const fetchFooter = async () => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/footer?populate=%2A`, {
    next: { revalidate: 60 },
  })

  const footer = await res.json()
  // console.log(copy.data.attributes.copyright)
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
  // console.log(menu)
  return links
}

async function Footer() {
  const footer = await fetchFooter()
  const copyright = footer.copyright
  const arrow = process.env.STRAPI_URL + footer.arrow.data.attributes.url
  const allLinks = await fetchLinks()
  const links = allLinks.filter((item) => item.parent === null)
  const logoURL = footer.LogoWhite.data.attributes.url
  const social = await fetchSocial()
  const icons = social.map((icon) => ({
    text: icon.Text,
    iconURL: icon.Icon.data.attributes.url,
  }))

  console.log(icons)
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
              <p className='font-bold text-grayishWhite pb-4'>Home</p>
              <p className='font-bold text-grayishWhite pb-4'>Blog</p>
              <p className='font-bold text-grayishWhite pb-4'>Contact Us</p>
              <p className='font-bold text-grayishWhite pb-1'>About Us</p>

              <nav aria-label='Footer Navigation - Services' className='my-2'>
                <ul className='space-y-3 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>About CLG</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Out Events</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Case Studies</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-medium text-grayishWhite'>Audit & Assurance</p>

              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-3 text-sm mb-4'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Accounting & Bookkeeping</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Audit Assurance</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Hong Kong Taxation</span>
                    </a>
                  </li>
                </ul>

                <p className='font-medium text-grayishWhite mb-3'>Advisory</p>
                <ul className='space-y-3 text-sm mb-4'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Company Secretary</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Payroll Outsourcing Service</span>
                    </a>
                  </li>
                </ul>

                <p className='font-medium text-grayishWhite mb-3'>
                  Funding Audit
                </p>
                <ul className='space-y-3 text-sm mb-4'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>BUD</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>TVP</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Others</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-medium text-grayishWhite mb-2'>
                Incorporation
              </p>

              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-3 text-sm mb-4'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Hong Kong</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Non-Government Organization</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Singapore</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Malaysia</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>British</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>BVI</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Caymen Island</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Seychelles</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Anguilla</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-medium text-grayishWhite'>Cloud Solutions</p>

              <nav aria-label='Footer Navigation - Legal' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Accounting Solution</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>HRM Solution</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>POS Solution</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>F&B POS Solution</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Digital Marketing Solution</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Receipt Filing Solution</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center text-grayishWhite transition hover:opacity-75'
                    >
                      <span>
                        <Image src={arrow} alt='arrow' width={11} height={11} />
                      </span>
                      <span className='ml-2'>Online Shop</span>
                    </a>
                  </li>
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

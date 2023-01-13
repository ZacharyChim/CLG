import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-darkGrayishBlue'>
      <div className='container flex flex-col-reverse items-center justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex space-y-12 md:space-y-0 '>
          <div>
            <Image
              src='http://localhost:1338/uploads/logo_87234c5476.png'
              alt='CLG Group Logo'
              width={100}
              height={100}
            />
          </div>
          <div className='flex space-x-4 justify-between'>
            <Link href='#'>
              <Image
                src='http://localhost:1338/uploads/whatsapp_5b853adf8c.png'
                alt=''
                className='h-8'
                width={30}
                height={39}
              />
            </Link>
            <Link href='#'>
              <Image
                src='http://localhost:1338/uploads/email_9a64ad9036.png'
                alt=''
                className='h-8'
                width={30}
                height={39}
              />
            </Link>
            <Link href='#'>
              <Image
                src='http://localhost:1338/uploads/email_9a64ad9036.png'
                alt=''
                className='h-8'
                width={30}
                height={39}
              />
            </Link>
            <Link href='#'>
              <Image
                src='http://localhost:1338/uploads/fax_ddf936d2e8.png'
                alt=''
                className='h-8'
                width={30}
                height={39}
              />
            </Link>
            <Link href='#'>
              <Image
                src='http://localhost:1338/uploads/addr_bd7f710799.png'
                alt=''
                className='h-8'
                width={30}
                height={39}
              />
            </Link>
          </div>
          <div className='flex space-x-32'>
            <div className='flex flex-col space-y-3 text-white'>
              <Link href='#' className='hover:text-brightRed'>
                Home
              </Link>
              <Link href='#' className='hover:text-brightRed'>
                Pricing
              </Link>
              <Link href='#' className='hover:text-brightRed'>
                Products
              </Link>
              <Link href='#' className='hover:text-brightRed'>
                About
              </Link>
            </div>
            <div className='flex flex-col space-y-3 text-white'>
              <Link href='#' className='hover:text-brightRed'>
                Careers
              </Link>
              <Link href='#' className='hover:text-brightRed'>
                Community
              </Link>
              <Link href='#' className='hover:text-brightRed'>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h3>
        &copy; 2022 CLG Group. All Rights Reserved. Auto-renewal Policy Terms &
        Conditions Privacy Policy & Disclaimer Affiliates
      </h3>
    </footer>
  )
}
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'

const fetchMenu = async () => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/navigation/render/2`)

  const menu = await res.json()

  return menu
}

const fetchLogo = async () => {
  const logo = await fetch(
    `${process.env.STRAPI_API_URL}/top-menu?populate=%2A`
  )
  const logoJSON = await logo.json()

  return logoJSON.data.attributes.SiteLogo.data.attributes.url
}

// type PageProps = {
//   title: string
// }

async function Header() {
  const menu = await fetchMenu()
  const parentMenu = menu.filter((item) => item.parent === null)
  const logoURL = await fetchLogo()
  return (
    <>
      <header>
        <nav className='relative container mx-auto p-5 max-w-5xl'>
          <div className='flex items-center justify-between'>
            <div className='pt-2'>
              <Image
                src={`${process.env.STRAPI_URL}${logoURL}`}
                alt='CLG Group Logo'
                width={80}
                height={80}
              />
            </div>
            <div className='hidden md:flex space-x-6'>
              {parentMenu.map((item) => (
                <Link
                  href='#'
                  key={v4()}
                  className='hover:text-darkGrayishBlue'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

// export async function generateStaticParams() {
//   const res = await fetch(`http://localhost:1338/api/navigation/render/1`, {
//     next: { revalidate: 60 },
//   })

//   const menu = await res.json()
//   return menu.map((item) => ({
//     title: item.title,
//   }))
// }

export default Header

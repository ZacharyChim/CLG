import Image from 'next/image'
import Link from 'next/link'
import { toUnicode } from 'punycode'
import { MenuItem } from '../types.d'

const fetchMenu = async () => {
  const res = await fetch(`http://localhost:1338/api/navigation/render/2`, {
    next: { revalidate: 60 },
  })

  const menu = await res.json()
  // console.log(menu)
  return menu
}

// type PageProps = {
//   title: string
// }

async function Header() {
  const menu = await fetchMenu()
  const parentMenu = menu.filter((item) => item.parent === null)
  return (
    <>
      <header>
        <nav className='relative container mx-auto p-6'>
          <div className='flex items-center justify-between'>
            <div className='pt-2'>
              <Image
                src='http://localhost:1338/uploads/logo_87234c5476.png'
                alt='CLG Group Logo'
                width={80}
                height={80}
              />
            </div>
            <div className='hidden md:flex space-x-6'>
              {parentMenu.map((item) => (
                <Link
                  href='#'
                  key='{item.id}'
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

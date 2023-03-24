import Image from 'next/image'
import earth from '../public/earth.png'
import { v4 } from 'uuid'

const fetchLinks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/navigation/render/3`
  )

  const links = await res.json()
  return links
}

type PropType = {
  country: string
}
export default async function Countries(props: PropType) {
  const nav = await fetchLinks()

  return (
    <div className='flex flex-col mx-10 mb-10 md:w-1/5 md:mx-auto'>
      <div className='flex flex-row pb-4 border-b border-black'>
        <Image src={earth} alt='' width='23' height='23' />
        <span className='ml-2 font-bold text-darkBlue '>OTHER COUNTRIES</span>
      </div>
      <div className='mt-3 leading-8 text-sm'>
        <ul>
          {nav.map((item) => (
            <li key={v4()}>
              <a
                href={item.externalPath}
                className={`${
                  props.country.toLowerCase() === item.title.toLowerCase()
                    ? 'text-black half_background'
                    : 'text-darkGrayishBlue'
                } transition hover:opacity-75`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

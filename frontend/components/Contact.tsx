import Link from 'next/link'

type PropType = {
  contactUs: string
}

export default function Contact(props: PropType) {
  return (
    <div className='max-w-4xl flex flex-col items-center justify-center mt-10'>
      <div className='flex flex-col items-center justify-center mx-5 bg-contactBg bg-cover pb-20 md:flex-row'>
        <p className='text-lg text-left text-darkBlue mt-56 md:mt-44 ml-20 mr-1 mb-2'>
          {props.contactUs}
        </p>
        <Link
          className='inline-block rounded-full bg-white w-2/5 place-self-end mr-2 py-2 px-4 text-md font-bold text-center text-darkBlue hover:bg-darkBlue hover:text-white md:mb-6'
          href='#'
        >
          CONTACT US
        </Link>
      </div>
    </div>
  )
}

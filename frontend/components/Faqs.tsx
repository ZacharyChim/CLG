import React from 'react'
import { v4 } from 'uuid'

type faqType = {
  title: string
  content: string
}

type PropType = {
  faqs: faqType[]
}

export default function Faqs(props: PropType) {
  return (
    <div className='mx-auto space-y-4 max-w-4xl mb-16 mt-20 px-10 w-full self-center'>
      <h3 className='w-full text-center text-darkBlue font-bold text-4xl mb-10'>
        FAQs
      </h3>
      {props.faqs.map((item, index) => (
        <details
          key={v4()}
          className='group border-b pb-6 border-black [&_summary::-webkit-details-marker]:hidden'
          // open
        >
          <summary className='flex items-center justify-between w-full leading-7 p-4 cursor-pointer '>
            <h4 className='font-medium flex items-start'>
              <span className='w-7 grow-0 shrink-0 inline-block text-center text-white bg-oceanBlue mr-2 rounded-full'>
                {index + 1}
              </span>
              <span className='inline-block font-bold text-darkBlue summary-title'>
                {item.title}
              </span>
            </h4>

            <svg
              className='ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </summary>

          <article
            className='text-sm px-14 mt-4 leading-relaxed text-gray-700 faq'
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></article>
        </details>
      ))}
    </div>
  )
}

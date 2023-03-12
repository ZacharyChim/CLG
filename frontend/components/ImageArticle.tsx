import Image from 'next/image'
import React from 'react'
import { ImageType, ArticleType } from '../types.d'

type PropType = {
  aboutImage: ImageType
  aboutArticle: ArticleType
  tagImage?: ImageType
  imageLeft: boolean
}

export default function ImageArticle(props: PropType) {
  return (
    <div className='mx-auto text-center'>
      <div
        className={`flex flex-col gap-8 pl-10 py-5 items-center ${
          props.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div className='px-10 my-16 md:w-1/2'>
          <Image
            alt=''
            src={props.aboutImage.url}
            width={props.aboutImage.width}
            height={props.aboutImage.height}
          />
        </div>
        <div className='text-left md:w-1/2'>
          {props.tagImage && (
            <Image
              alt=''
              src={props.tagImage.url}
              width={props.tagImage.width}
              height={props.tagImage.height}
              className='object-fit'
              quality='100'
            />
          )}
          <h2 className='text-3xl font-bold text-darkBlue mb-6 mt-4'>
            {props.aboutArticle.title}
          </h2>
          <article
            className='text-darkBrown leading-7 space-y-4'
            dangerouslySetInnerHTML={{ __html: props.aboutArticle.text }}
          ></article>
        </div>
      </div>
    </div>
  )
}

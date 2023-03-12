'use client'
import Image from 'next/image'
import React from 'react'

export default function BackToTop() {
  const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

  function scrollToTop(): void {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      <button className='inline-block' onClick={scrollToTop}>
        <Image
          src='/backToTop.png'
          alt=''
          width='50'
          height='50'
          quality='90'
        />
      </button>
    </div>
  )
}

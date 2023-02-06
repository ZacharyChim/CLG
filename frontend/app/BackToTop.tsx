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
    <button className='inline-block' onClick={scrollToTop}>
      <Image src='/backToTop.png' alt='' width='50' height='50' />
    </button>
  )
}

'use client'
import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const toggleMenu = () => {
    setIsOpen((current) => !current)
    setIsHidden((current) => !current)
  }
  return (
    <nav className='relative container mx-auto p-5 max-w-5xl'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Image
            src={props.logoURL}
            alt='CLG Group Logo'
            width={80}
            height={80}
          />
        </div>
        <div className='hidden md:flex space-x-6'>
          {props.parentMenu.map((item) => (
            <Link href='#' key={v4()} className='hover:text-darkGrayishBlue'>
              {item.title}
            </Link>
          ))}
        </div>
        <button
          id='menu-btn'
          className={`${
            isOpen ? 'open' : ''
          } block hamburger md:hidden focus:outline-none`}
          onClick={toggleMenu}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      <div className='md:hidden'>
        <div
          id='menu'
          className={`${
            isHidden ? 'hidden' : 'flex'
          } absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          {props.parentMenu.map((item) => (
            <Link href='#' key={v4()} className='hover:text-darkGrayishBlue'>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function preipo() {
  return (
    <div className='bg-preIpoCurveLine bg-no-repeat bg-[center_top_95rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='pre-ipo' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default preipo

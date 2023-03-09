import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function dBiz() {
  return (
    <div className='bg-preIpoCurveLine bg-no-repeat bg-[center_top_110rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='d-biz' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default dBiz

import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function payroll() {
  return (
    <div className='bg-preIpoCurveLine bg-no-repeat bg-[center_top_94rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='payroll' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default payroll

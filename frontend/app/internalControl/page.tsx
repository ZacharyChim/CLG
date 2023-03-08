import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function internalControl() {
  return (
    <div className='bg-internalControlCurveLine bg-no-repeat bg-[center_top_90rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='internal-control' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default internalControl

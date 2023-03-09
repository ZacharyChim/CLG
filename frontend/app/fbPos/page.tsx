import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function internalControl() {
  return (
    <div className='bg-curveLine bg-no-repeat bg-[center_top_128rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='fb-pos' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default internalControl

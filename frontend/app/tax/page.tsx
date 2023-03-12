import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function tax() {
  return (
    <div className='bg-curveLine bg-no-repeat bg-[center_top_60rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='tax' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default tax

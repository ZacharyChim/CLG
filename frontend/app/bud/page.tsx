import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function bud() {
  return (
    <div className='bg-curveLine bg-no-repeat bg-[center_top_110rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='bud' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default bud

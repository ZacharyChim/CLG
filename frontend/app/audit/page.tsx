import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function audit() {
  return (
    <div className='bg-curveLine bg-no-repeat bg-[center_top_178rem] bg-contain'>
      {/* @ts-ignore */}
      <Hero page='audit' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default audit

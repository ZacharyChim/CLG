import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function ngo() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='ngo' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default ngo

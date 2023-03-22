import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function hk() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='hk' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default hk

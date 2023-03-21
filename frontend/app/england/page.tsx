import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function england() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='england' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default england

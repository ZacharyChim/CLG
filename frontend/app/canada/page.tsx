import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function canada() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='canada' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default canada

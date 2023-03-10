import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function receipt() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='receipt' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default receipt

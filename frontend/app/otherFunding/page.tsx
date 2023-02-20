import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function otherFunding() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='other-funding' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default otherFunding

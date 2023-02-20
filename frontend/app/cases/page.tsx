import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function caseStudies() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='case-study' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default caseStudies

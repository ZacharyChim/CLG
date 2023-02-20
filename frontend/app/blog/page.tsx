import React from 'react'
import Hero from '../../components/Hero'
import Main from './Main'

function Blog() {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='blog' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default Blog

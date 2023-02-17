import React from 'react'
import Main from './Main'
import Hero from '../Hero'

type PageProps = {
  params: {
    slug: string
  }
}

export default function caseDetail({ params: { slug } }: PageProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Hero />
      {/* @ts-ignore */}
      <Main slug={slug} />
    </>
  )
}

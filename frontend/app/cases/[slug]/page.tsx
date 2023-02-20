import React from 'react'
import Main from './Main'
import Hero from '../../../components/Hero'

type PageProps = {
  params: {
    slug: string
  }
}

export default function caseDetail({ params: { slug } }: PageProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Hero page='case-study' />
      {/* @ts-ignore */}
      <Main slug={slug} />
    </>
  )
}

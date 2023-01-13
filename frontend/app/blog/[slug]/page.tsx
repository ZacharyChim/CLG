import React from 'react'

type PageProps = {
  params: {
    slug: string
  }
}

export default function Post({ params: { slug } }: PageProps) {
  return <div>Single post page: {slug}</div>
}

import Layout from '../components/Layout'
import { fetcher } from '../lib/api'
import Posts from '../components/Posts'
import useSWR from 'swr'
import { useState } from 'react'

const PostList = ({ data }) => {
  const posts = data.data

  return (
    <Layout>
      <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
          Posts
        </span>
      </h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.attributes.title}</h2>
          </div>
        ))}
    </Layout>
  )
}

export default PostList

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/posts')
  const data = await res.json()

  return {
    props: { data },
  }
}

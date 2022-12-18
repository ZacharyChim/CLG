import Layout from '../components/Layout'
import { fetcher } from '../lib/api'
import Posts from '../components/Posts'
import useSWR from 'swr'
import { useState } from 'react'

const PostList = ({ posts }) => {
  const [pageIndex, setPageIndex] = useState(1)
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=${pageIndex}&pagination[pageSize]=3`,
    fetcher,
    { fallbackData: posts }
  )
  return (
    <Layout>
      <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
          Posts
        </span>
      </h1>
      <Posts posts={data} />
      <div className='space-x-2 space-y-2'>
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
          }`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {' '}
          Previous
        </button>
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === (data && data.meta.pagination.pageCount)
              ? 'bg-gray-300'
              : 'bg-blue-400'
          }`}
          disabled={pageIndex === (data && data.meta.pagination.pageCount)}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div>
    </Layout>
  )
}

export default PostList

export async function getServerSideProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=1&pagination[pageSize]=3`
  )
  console.log(postsResponse)
  return {
    props: {
      posts: postsResponse,
    },
  }
}

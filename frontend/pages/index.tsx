export default function Home({ data }) {
  console.log(data.data)
  const posts = data.data
  return (
    <>
      <h1>Hello</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.attributes.title}</h2>
          </div>
        ))}
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/posts')
  const data = await res.json()

  return {
    props: { data },
  }
}

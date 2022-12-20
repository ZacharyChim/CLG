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
  const res = await fetch('http://165.22.255.85:1338/api/posts')
  const data = await res.json()

  return {
    props: { data },
  }
}

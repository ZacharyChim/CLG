export async function fetcher(url, options = {}) {
  let response
  console.log('URL: ' + url)
  console.log('OPTIONS: ' + options)
  // if (!options) {
  response = await fetch(url)
  console.log('Response: ' + response)
  // }
  // } else {
  //   response = await fetch(url, options)
  // }
  const data = await response.json()
  return data
}

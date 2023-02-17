import { marked } from 'marked'

export const richTextReducer = (raw: string) => {
  const parsed = marked.parse(raw)
  const fixedImageURL = parsed.replace(
    '/uploads/',
    `${process.env.STRAPI_URL}/uploads/`
  )
  const fixedImage = fixedImageURL.replace(
    '<img',
    "<img style='margin: 10px 0; width: 100%'"
  )
  return fixedImage
}

export const trimTitle = (str: string, limit = 55) => {
  let newTitle: string[] = []
  if (str.length >= limit) {
    str.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur)
      }
      return acc + cur.length
    }, 0)
    return `${newTitle.join(' ')} ...`
  }
  return str
}
